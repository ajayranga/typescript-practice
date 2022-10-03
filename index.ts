abstract class Department {
  protected name: string;
  public readonly id: string;
  protected employees: string[];
  static countObj: number = 0;

  constructor(name: string, id: string) {
    this.name = name;
    this.employees = [];
    this.id = id;
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    Department.incCount();
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log('Countobject contains', Department.countObj);
    console.log(this.employees);
  }
  static incCount() {
    this.countObj++;
  }
}
class ITDepartment extends Department {
  admins: string[];
  id: string;
  constructor(id: string, admins: string[]) {
    super('ITDepartment', id);
    this.id = id;
    this.admins = admins;
  }
  describe(this: Department): void {
    console.log(`IT Department ${this.id}`);
  }
}
class AccountingDepartment extends Department {
  reports: string[];
  id: string;
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report exists!!!!');
  }
  set mostRecentReport(val: string) {
    if (val) this.lastReport = val;
    else throw new Error('Invalid report to set!!!!');
  }
  private constructor(id: string, reports: string[]) {
    super('Accounting', id);
    this.id = id;
    this.reports = reports;
    this.lastReport = '';
  }
  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printReports() {
    console.log(this.reports);
  }

  describe(this: Department): void {
    console.log(`Accounting Department ${this.id} `);
  }
  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment('d1', []);
    return this.instance;
  }
}

const it1 = new ITDepartment('a1', ['aaa']);
it1.addEmployee('abc');
it1.printEmployeeInfo();
it1.describe();

// const acnt = new AccountingDepartment('a1', ['aaa']);
const acnt = AccountingDepartment.getInstance();
acnt.addReport('abc');
acnt.printReports();
acnt.describe();
acnt.mostRecentReport = 'jjjj';
console.log(acnt.mostRecentReport);
acnt.printReports();

it1.addEmployee('add');
acnt.addEmployee('adddd');
acnt.printEmployeeInfo();
// const abc = new Department('Accounting');

// abc.describe();
// // console.log(abc);
// const dummyDep = { name: 'aaaa', describe: abc.describe };

// console.log(dummyDep.describe());
