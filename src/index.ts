type person = {
  name: string;
  age: number;
  hobbies: string[]; // array of string can be of any length
  tuple: [number, string];
};
const person: person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  tuple: [13, 'hello'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
for (const tpl of person.tuple) {
  console.log(tpl);
}
