const express = require('express')
const bodyParser = require('body-parser')
let ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs') //tell app generated with express to use ejs as view engine
//create views folder with list.ejs inside as base template for todolist

app.get('/', (req, res)=>{
    let date = new Date()
    let day = date.getDay()
    let currentDate = ''

    if(day === 0) {
        currentDate = 'Sunday'
    } else if (day === 1) {
        currentDate = 'Monday'
    } else if (day === 2) {
        currentDate = 'Tuesday'
    } else if (day === 3) {
        currentDate = 'Wednesday'
    } else if (day === 4) {
        currentDate = 'Thursday'
    } else if (day === 5) {
        currentDate = 'Friday'
    } else if (day === 6) {
        currentDate = 'Saturday'
    } else {
        console.log('Error')
    }

    res.render('list', {kindOfDay: currentDate})
    // res.send(`<h1>Today's date is ${currentDate}!!!</h1>`)
    // res.send('Server is connected')
})



app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})