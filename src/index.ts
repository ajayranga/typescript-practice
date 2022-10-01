const button = document.querySelector('button')! as HTMLButtonElement;
const inp1 = document.querySelector('#inp1')! as HTMLInputElement;
const inp2 = document.querySelector('#inp2')! as HTMLInputElement;

const add = (num1: number, num2: number) => num1 + num2;
button.addEventListener('click', () => {
  console.log(add(parseFloat(inp1.value), parseFloat(inp2.value)));
});
