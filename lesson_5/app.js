// function validateINN() {
//     var firstNumber = Number( inn[0])
//     if ((firstNumber === 0  || firstNumber=== 1 || firstNumber === 2) && inn.length === 14) {
//         console.log('ok')
//     } else {
//         console.error('')
//     }
// }
// validateINN('103030003456')
//
// var getCoffee = function (){
//     var drinkName = prompt('whay do you want to drink? hint: coffee');
//     if (drinkName === 'coffee'){
//         var variant = prompt('how do you want your coffee? black/with cream').toLowerCase();
//     }switch (variant) {
//         case 'black':
//             alert('One black coffee coming right up!')
//             break
//         case "with cream":
//             alert('Coffee with cream is a nice choice')
//             break
//         default:
//             alert("We don't have that coffee")
//         }
//     }else {
//         alert('Sorry we server only coffee')
//     }
// }
// getCoffee();

//функция с параметрами rest(es6+) и arguments (es5)

function getAllSum() {
    console.log(arguments)
    // let sum = 0
    // for (let i = 0; i < arguments.length; i++){
    //     sum += arguments[i]
    // }
    let sum = Array.from(arguments).reduce((a, b) => a+=b)
    console.log(sum)
}
getAllSum(2, 3, 5)

function getAllSum2(...nums){
    console.log(nums)
    let sum = nums.reduce((a, b) => a+=b)
    console.log(sum)
}
getAllSum2(4,4)

// var name = 'Aidana'
//let , const
// const array = []
// array.push(2)
// console.log(array)
// let object = {}
// object = []
// console.log(object)
// const num = 4
// const f = num + 7
// console.log(f)

//rest spread operators = оператор деструктуризации
const num1 = [2, 3, 4, [3, 4, 5]]
const num2 = [5, 6, 7]
const allNum = [...num1[3], ...num2]
console.log(...allNum)

//default params - параметр по умолчанию
function pushjoin(array, separator){
    let result = ''
    for (let i = 0; i<array.length; i++){
        const element = array[i]
result += element + (i === array.length - 1 ? '': separator)
}
return result
}

console.log(pushjoin([1, 2, 3, 4], '-'))

document.querySelector('button').addEventListener('click', function (){
    console.log('вы нажали на кнопку')
})