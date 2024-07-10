// 1. ixtiyoriy array yarating va undagi bir martadan ko'p takrorlangan item larni boshqa array ko'chiradigan function yarating 
let array = [1, 2, 3, 4, 5, 2, 3, 2]
const twoElement = (arr) => {
  let newArr = arr.filter((item) => arr.indexOf(item) !== arr.lastIndexOf(item))
  let reject = [] 

  for (let item of newArr) {
    if (!reject.includes(item)) {
      reject.push(item)
    }
  } 
  return reject
}
// console.log(twoElement(array));


// 2. Array elementlari kvadratlaridan hosil bo’lgan array hosil qiling. Input: [1, 2, 3, 4, 5] Output: [1, 4, 9, 16, 25]
let twoArr = [1, 2, 3, 4, 5]
const twoLevelArr = (arr = []) => {
  let newArr = arr.map(item => Math.pow(item, 2))
  return newArr
}
// console.log(twoLevelArr(twoArr));



//  3.Arraydagi musbat sonlar yig’indisini hisoblang. (filter va reduce). Input: [ 1, -4, 12, 0, -3, 29, -150] Output: 42
let threeArr = [ 1, -4, 12, 0, -3, 29, -150]
const musbatItemsTotal = (arr) => {
  let newArr = arr.filter(item => item > 0)
  let total = newArr.reduce((a, b) => a + b, 0)
  return total
}
// console.log(musbatItemsTotal(threeArr));



// 4. Stringdagi so’zlarning bosh harflarini oling. (split, map, join). Input: 'George Raymond Richard Martin'. Output: 'GRRM'
let text = 'George Raymond Richard Martin'
const strOneLetters = (str = '') => {
  let arr = str.split(" ")
  let newArr = arr.map(item => item[0])
  return newArr.join("")
}
// console.log(strOneLetters(text));



// 5. Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring 
let twoText = 'sal1om'
const onlyLetter = (str = "") => {
  let arr = str.split("")
  let reject = arr.some(item => item >= 0)
  return reject
}
// console.log(onlyLetter(twoText))



// String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map)
let threeText = "Salom meni ismim Abdullajon"
const wordsLengrh = (str = '') => {
  let arr = str.split(" ")
  let new_arr = arr.map(item => item.length)
  return new_arr
}
// console.log(wordsLengrh(threeText));


// 7. Stringni bo'sh joy bor yoki yo'qligini tekshiring. Input: "salom dunyo" Output: true 
let fourText = "salom olam"
let searchSpase = (str) => {
  let arr = str.split("")
  let reject = arr.some(item => item == " ")
  return reject
}
// console.log(searchSpase(fourText));



// 8. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring Input: {a: 2, b: 5, c: 7}. Output: ['a2', 'b5', 'c7']
let object =  {a: 2, b: 5, c: 7}
const keyValueTotal = (obj) => {
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  let new_arr = []
  for (let index in keys) {
    new_arr.push('' + keys[index] + values[index])
  }
  return new_arr
}
console.log(keyValueTotal(object));
