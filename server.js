const express = require('express')
const app = express()
const PORT=3000



app.get('/',(req,res)=>{res.send('hello world')})
app.get('/hello',(req,res)=>{res.send('hello world')})



app.listen(PORT,()=>console.log(`server run on ${PORT}`))