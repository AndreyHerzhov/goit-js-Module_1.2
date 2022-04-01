const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]')
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span')

console.log(valueInput);
console.log(outputEl);

resetBtn.addEventListener(`click`, function () {
    total = 0;
    outputEl.textContent = 0;

})

btnAdd.textContent = `Добавить`;

let total = 0;

btnAdd.addEventListener(`click`, function()  {
    console.log(`Click`);
    const value = Number(valueInput.value);
    console.log(value);
    total += value;
    outputEl.textContent = total;
    console.log(`total:`, total);

    valueInput.value = ''; 
} ) 

console.log(btnAdd.textContent)