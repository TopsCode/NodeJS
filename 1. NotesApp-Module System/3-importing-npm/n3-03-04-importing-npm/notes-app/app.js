const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isURL('https://www.tops-int.com/'))
console.log(validator.isEmail('abc@gmail.com'))
