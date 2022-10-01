type someAlias = number | string;
type person = {
  name: string;
  age: number;
  hobbies: string[]; // array of string can be of any length
  tuple: [number, string];
  role: Role;
  uniondt: string | number;
  literalType: 'some literal' | 'some other literal or value' | 5;
  agf?: someAlias;
  sqr(): number;
  sqrprnt(): never;
};
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}
const person: person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  tuple: [13, 'hello'],
  role: Role.ADMIN,
  uniondt: 1,
  literalType: 'some literal',
  sqr: function sqr() {
    return this.age * this.age;
  },
  sqrprnt: function sqrprnt() {
    console.log(this.age * this.age);
    throw Error('some error');
  },
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
console.log(person.role);
console.log(person.uniondt);
console.log(person.sqr());

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
for (const tpl of person.tuple) {
  console.log(tpl);
}
