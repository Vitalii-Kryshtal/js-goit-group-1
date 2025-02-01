// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let number = prompt("Введіть число");
// Number(number) === 10 ? alert("Вірно") : alert("Не вірно");

// console.log(number);

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 14) {
//   alert(`${min} входить у першу чверть!`);
// } else if (min <= 29) {
//   alert(`${min} входить у другу чверть!`);
// } else if (min <= 44) {
//   alert(`${min} входить у третю чверть!`);
// } else {
//   alert(`${min} входить у четверту чверть!`);
// }

// console.log(min);

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// let num = Number(prompt("Введіть число"));
// let result = "";

// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//     break;
// }
// alert(result);
// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const userMinutes = Number(prompt("Введіть кількість хвилин"));

// console.log(formateTime(userMinutes));

// function formateTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifedHours = String(hours).padStart(2, "0");
//   const minutes = totalMinutes % 60;
//   const modifeMinutes = String(minutes).padStart(2, 0);

//   return `${modifedHours}:${modifeMinutes}`;
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i -= 1) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
    i -= 1;
  }
  return sum;
}

console.log(getNumbers(3, 8));
