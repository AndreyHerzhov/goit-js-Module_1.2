let balance = 1000;
const payment = 2000;

console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`);

if (balance >= payment) {
    console.log(`ok`);
    balance -= payment;
    
    console.log(`На счету осталось ${balance} кредитов.`);
} else {
    console.log(`На счету недостаточно средств для проведения операции!`)
}

console.log(`Операция завершена.`);
