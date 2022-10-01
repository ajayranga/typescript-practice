console.log('hello');
var person = {
  name: 'aaa',
  age: 50,
};

console.log(person.name);

((num) => console.log(num * num))(5);

const newPerson = person;
const newPerson2 = { ...person };
console.log(newPerson, newPerson2);
const add = (...numb: number[]) =>
  numb.reduce((prev, current) => prev + current, 55);

console.log(add(1, 2, 8, 5));

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const [a, b, c, ...rem] = arr1;
const { name: fName, age } = person;

console.log(a, b, c, rem, fName);
// export {};
