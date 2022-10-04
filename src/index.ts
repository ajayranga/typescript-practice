console.log('hello');

const names: Array<string> = ['aaa', 'hbuhbuh', 'bhbu'];
console.log(names);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('THis is done');
  }, 2000);
});

const add = (a: number, b: number) => a + b;
promise.then((data) => console.log(data));

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'max' }, { age: 30 });

console.log(mergedObj.age);

let arr: [number, string][];
arr = [[1, '2']];

function samoke<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}
console.log(samoke({ name: 'aaa', age: 55 }, 'age'));

class Store<T> {
  private data: T[] = [];
  addItem(itm: T) {
    this.data.push(itm);
  }
  removeItem(itm: T) {
    if (this.data.indexOf(itm) !== -1)
      this.data.splice(this.data.indexOf(itm), 1);
    else throw new Error('Not exist');
  }
  getItems() {
    return [...this.data];
  }
}
const txtStore = new Store();
txtStore.addItem('aaa');
txtStore.addItem('aabs');
txtStore.addItem('aabsddd');
console.log(txtStore.getItems());

const objStore = new Store();
objStore.addItem({ name: 'aaaaa' });
let abcd = { name: 'abcd' };
objStore.addItem(abcd);
objStore.addItem({ name: 'abcdefg' });
console.log(objStore.getItems());
objStore.removeItem(abcd);
console.log(objStore.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completedUntill: Date;
}

function setCourseGoal(
  title: string,
  description: string,
  completedUntill: Date
): CourseGoal {
  let obj: Partial<CourseGoal> = {};
  obj.title = title;
  obj.description = description;
  obj.completedUntill = completedUntill;
  return obj as CourseGoal;
}

const nm: Readonly<string[]> = ['aaaa', 'efef'];
// nm.push;
