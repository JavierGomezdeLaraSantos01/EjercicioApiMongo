const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://Javi:javi123@basedeprueba.ye4marx.mongodb.net/' ;
const app = express();
app.use(express.json());

mongoose.connect(url, {useNewUrlParser:true});

const con = mongoose.connection;
con.on('open',()=>{
    console.log('Conectadorl')
})

app.listen(9000,() =>{
    console.log('Server arrancado')
})

const alienRouter = require('./routers/aliens');

app.use('/aliens',alienRouter)