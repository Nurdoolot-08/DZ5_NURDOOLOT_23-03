// var day = Number(prompt('Выедите день рожденияя'))
// var month = prompt('Введите месяц рождения')
//
// if (day >= 21 && day <= 31 && month === 'март || day <= 20 && month === '){
//     console.log('ваш знак зодиака овен')
// }else{
//     console.log('error')
// }

// var login = 'NurdoolotJ'
// var password = 'qwerty123'
//
// var userLogin = prompt('введите логин')
// var userPassword = prompt('введите пароль')
// if (userLogin === login && userPassword === password) {
//     console.log('авторизация прошла успешно')
// }else {
//     console.log('error')
// }
//
// var userINN = '10810200300758'
// var innFirstNum = Number(userINN[0])
// if ((innFirstNum === 0  || innFirstNum === 1 || innFirstNum === 2) && userINN.length === 14){
//     console.log('ИНН найден')
// }else{
//     console.log('ИНН не существует')
// }

//switch..case

var size = 0
var euSize = 'm'
// if (euSize === 'S' || euSize === 's'){
//     console.log('в цифрах -> ', size = 36)
// }else if (euSize === 'M' euSize === 'm'){
//     console.log('в цифрах M -> ', size = 40)
// }else if (euSize === 'L') {
//     console.log('в цифрах L -> ', size = 44)
// }else {
//     console.log('такого размера нет')
// }

// switch (euSize){
//     case 'S':
//     case 's':
//         console.log('36')
//         break;
//     case 'M':
//     case 'm':
//         console.log('40')
//         break;
//     case "L":
//     case "l":
//         console.log('44')
//         break;
//     default:
//         console.log('unknow size')
// }

//4)null - нулевой тип данных

//var userAddres = null
//console.log(typeof userAddres)

//5) underfind - неопреденный тип данных
//let apple;
//console.log( typeof apple)

//NaN - not a number (не число)
// var a = 123
// var b = 'qwerty'
// console.log(a/b)
// var num = NaN
// console.log(typeof num)

//6)object - комплексный тип данных
//var user = {
//     name: 'Aidana',
//     surname: 'Bekova',
//     phoneNumber: 9967089048590,
//     secondNumber: null,
//     address: {
//         city: 'Bishkek',
//         street: undefined
//     },
//     isMarried: false
//     name1: 'Aliya'
// }
// console.log(user.isMarried)
// console.log(user.address.city)
// console.log(user.address.)
// console.log(user.name0)
//добовление
//user.laptop = 'mac'
//console.log(user)
//удаление
//delete user.laptop
//console.log(user)
//методы обьекта
//console.log(Object.keys(user))
//console.log(Object.values(user))
//console.log(Object.entries(user))
//console.log(user.hasOwnProperty('name'))

var StarBucks = {
    latte: 'Латте',
    cappuccino: 'Каппучино',
    americano: 'Американо',
    espresso: 'Эспрессо',
    frappuccino: 'Фраппучино',
}
var tea = {
    lemonadeBlackTea: 'Лимонад черный чай',
    greenTea: 'Зеленый чай',
    blackTea: 'Черный чай',
    teaLatte: 'Чай латте',
}
console.log(StarBucks.latte)
console.log(StarBucks.cappuccino)
console.log(StarBucks.americano)
console.log(StarBucks.espresso)
console.log(StarBucks.frappuccino)
console.log(tea.lemonadeBlackTea)
console.log(tea.greenTea)
console.log(tea.blackTea)
console.log(tea.teaLatte)

var starbucks = prompt('Добро пожаловать в Starbucks что будете заказывать')
if (starbucks === 'Латте'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Каппучино'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Американо'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Эспрессо'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Фраппучино'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Зеленый чай'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Черный чай'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Чай латте'){
    console.log('Ваш заказ принят')
}else if (starbucks === 'Лимонад черный чай'){
    console.log('Ваш заказ принят')
}else {
    console.log('error')
}

