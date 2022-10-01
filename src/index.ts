console.log('first');
type person = {
  name: string;
  age: number;
  hobbies: string[]; // array of string can be of any length
  tuple: [number, string];
  role: Role;
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
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
for (const tpl of person.tuple) {
  console.log(tpl);
}
