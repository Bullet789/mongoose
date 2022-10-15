const express = require('express')
const mongoose = require('mongoose');
const app = express();



app.use(express.json())
app.use(require('./routes/students.route.js'))


mongoose.connect("mongodb+srv://deni:admin@cluster0.7wdvqlq.mongodb.net/?retryWrites=true&w=majority",
(err) => {
    if (!err) {
        console.log('Успешно соединились с сервером MongoDb') 
    } else {
        console.log('Ошибка при соединении с сервером MongoDb')
    }
})


app.listen(4000, () => console.log('Сервер запущен успешно http://localhost:'));