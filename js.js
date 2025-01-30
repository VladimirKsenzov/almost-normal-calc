const firstNum = document.querySelector('.stNum');
const secondNum = document.querySelector('.ndNum');
const sum = document.querySelector('.sum');
const min = document.querySelector('.min');
const mult = document.querySelector('.mult');
const divide = document.querySelector('.divide');
const outPut = document.querySelector('.output');
let res;

sum.addEventListener('click', function () {
  let a = Number(firstNum.value);
  let b = Number(secondNum.value);
  res = a + b;
  outPut.innerText = `Ответ: ${res}`;
});

min.addEventListener('click', function () {
  let a = Number(firstNum.value);
  let b = Number(secondNum.value);
  res = a - b;
  outPut.innerText = `Ответ: ${res}`;
});

mult.addEventListener('click', function () {
  let a = Number(firstNum.value);
  let b = Number(secondNum.value);
  res = a * b;
  outPut.innerText = `Ответ: ${res}`;
});

divide.addEventListener('click', function () {
  let a = Number(firstNum.value);
  let b = Number(secondNum.value);
  res = a / b;
  outPut.innerText = `Ответ: ${res}`;
});
