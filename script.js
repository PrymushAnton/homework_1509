const moment = require("moment")
const express = require('express')

const app = express()

const PORT = 8000

const HOST = 'localhost'


function getDate(){
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
}

app.get('/', () => {
    console.log("ktoto zashel na stranicu")
})

app.get('/date', () => {
    getDate()
})

app.listen(PORT, HOST, () =>{
    console.log("server is running")
})
