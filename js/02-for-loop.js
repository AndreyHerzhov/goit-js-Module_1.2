// for (let i = 0; i <= 100; i += 20) {
//     console.log(i);
// }

// console.log(`Between cycles`);

// for (let i = 100; i > 0; i -= 20) {
//     console.log(i);
// }

// let a = 10;
// const b = a++;

// console.log(a);
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i++) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зарплата работника ${i} - ${salary}`);

//     totalSalary += salary;
// }

//     console.log(`totalSalary :`, totalSalary);

const min = 10;
const max = 50;
let total = 0;

for (let i = min; i <= max; i += 1) {
    // console.log(i);

    if (i % 2 !== 0) {
        // console.log(`не чётное:`, i);
        continue;
    }
       
        console.log(`чётное:`, i);

        total += i;
     
}

console.log(`total:`, total);
