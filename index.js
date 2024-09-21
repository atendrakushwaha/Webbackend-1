require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.send("Atendra")
})

app.get('/Atendra',(req, res)=>{
    res.send('<h1>Atendra</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})