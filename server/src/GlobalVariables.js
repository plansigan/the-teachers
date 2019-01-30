//mongoose db connection
const global = {}

global.connection = 'mongodb://localhost:27017/products'//DEV
//global.connection = "mongodb://pao:ragnarok123@ds027318.mlab.com:27318/the-teacher"//PROD


global.secret = 'your secret'
global.saltRounds = 10
global.expiresIn = 60000
module.exports = global