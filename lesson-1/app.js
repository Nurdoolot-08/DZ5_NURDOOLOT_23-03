console.log('Hello world');
var name = 'Nurdoolot'
var nameAndSurname = 'Jaksybekov Nurdoolot'
console.log(name)

var nameUser = 'Nurdoolot';
var surnameUser = 'Jaksybekov';
var lastnameUser = 'Jaksybekov';

console.log(surnameUser + ' ' + nameUser + ' ' + lastnameUser)
console.log('My name is' + ' ' + nameUser)

// var upper = lastnameUser.toUpperCase()
// console.log(upper)
//
// var number = 90;
// console.log(typeof number);
//
// var num1 = 78
// var num2 = 50
// console.log('78 - 50 =', num1 - num2)
// console.log('78 + 50 =', num1 + num2)
// console.log('78 / 50 =', num1 / num2)
// console.log('78 * 50 =', num1 * num2)
// console.log('78 ** 50 =', num1 ** num2)
// console.log('78 % 50 =', num1 % num2)
// // var n=num1.toString()
// // console.log(typeof n)
//
// console.log('средний возвраст группы 23-3 ->', (16 + 17 + 32 + 30 + 22 + 20 + 17 + 16 + 16 + 14 + 28 + 15) / 12 + ' лет')
//
// var word1 = prompt('Введите первое любое слово')
// var word2 = prompt('Введите второе любое слово')
//
// if(word1.length > word2.length){
//     console.log('слово' + word1 + ' длиннее, чем слово' + word2)
// }else if (word1.length < word2.length){
//     console.log('слово ' + ' ' +word2 + ' длиннее, чем слово ' + word1)
// }else if (word1.length === word2.length){
//     console.log('они равны')
// } else{
//     console.error('error')
// }
//
// var number1 = 23
// var number2 = '23'
// // console.log(number1 == number2)
// console.log(number1 === number2)
//
// var userName = prompt('Enter your name')
// var userSurname = prompt('Enter your surname')
// var userAge = Number(prompt('Enter your age'))
// if (userAge <= 18){
//     console.log('Привет' + userName);
// }else if ( userAge >= 19 && userAge <= 50){
//     console.log('Здравствуйте' + userSurname + ' ' + userName)
// }else if ( userAge >= 51 && userAge <= 90){
//     console.log('Здравствуйте, Добро пожаловать в программу! ' + userSurname + ' ' + userName)
// }else {
//     alert('вводите возраст числами, возраст не должен быть больше 90')
// }

var zodiak = prompt('Введите месяц')
var date = Number(prompt('Введите дату рождения'))
if (zodiak === 'март' && date >= 21 && date <=31){
    console.log('Ваш знак зодиака овен')
}else if (zodiak === 'апрель' && date >= 21 && date <=31){
    console.log('Ваш знак зодиака телец')
}else if (zodiak === 'май' && date >= 22 && date <=31){
    console.log('Ваш знак зодиака близнецы')
}else if (zodiak === 'июнь' && date >= 22 && date <=31){
    console.log('Ваш знак зодиака рак')
}else if (zodiak === 'июль' && date >= 23 && date <=31){
    console.log('Ваш знак зодиака лев ')
}else if (zodiak === 'август' && date >= 24 && date <=31){
    console.log('Ваш знак зодиака дева')
}else if (zodiak === 'сентябрь' && date >= 23 && date <=31){
    console.log('Ваш знак зодиака весы')
}else if (zodiak === 'октябрь' && date >= 24 && date <=31){
    console.log('Ваш знак зодиака скорпион')
}else if (zodiak === 'ноябрь' && date >= 23 && date <=31){
    console.log('Ваш знак зодиака стрелец')
}else if (zodiak === 'декабрь' && date >= 22 && date <=31){
    console.log('Ваш знак зодиака козерог')
}else if (zodiak === 'январь' && date >= 21 && date <=31){
    console.log('Ваш знак зодиака водолей')
}else if (zodiak === 'февраль' && date >= 19 && date <=31){
    console.log('Ваш знак зодиака рыбы')
}else {
    console.log('Неправильная дата')
}


