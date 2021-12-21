// // 1) Выводим х
// let numberA = prompt("Введите число А")
// let numberB = prompt("Введите число B")
//
// let any = (numberA == 0) && (numberB == 0) && alert(`Х - любое число`)
// let numberX = -numberB / numberA
// alert(`Исходя из уравнения a*x+b=0, x будет: ${numberX}`)

// // 2) Задача со временем
// const hours = 24
// const minutes = 60
// let userHours = prompt("Введите текущее время (сейчас часы) в формате 24h")
// let userMinutes = prompt("Введите текущее время (сейчас минуты)")
//
// let minutesToNextHour = minutes - userMinutes
// let hoursToNextDay = hours - userHours - 1
// alert (`До следующего дня осталось ${hoursToNextDay} часа/(ов) и ${minutesToNextHour} минут`)

// // 3) Выводим вторую цифру 3-значного чиса
// let userNumber = prompt("Введите 3-значное число")
// let secondDigit = Math.floor(userNumber / 10) % 10
// alert(`Вторая цифра вашего чила -  ${secondDigit}`)

// // 4) 5-значное число
// let userNumber = prompt("Введите 5-значное число")
// let lastDigit = userNumber % 10
// alert(`Держите: ${lastDigit}` + `${Math.floor(userNumber / 10)}`)

// 5) Зарплата
const salary = 250
let sales = prompt("Введите сумму продаж за месяц")
let finalSalary = salary + sales * 0.1
alert(`Работник зарабаотает ${finalSalary} $`)