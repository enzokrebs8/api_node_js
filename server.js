import express from 'express'

const app = express()
app.use(express.json())

const usuarios=[]

app.get('/cadastro', (req,res)=>{
    // console.log(req)
    // res.send('Deu certo!')
    // res.json(usuarios)
    res.status(200).json(usuarios)
})

app.post('/cadastro', (req,res)=>{
    // console.log(req.body)
    usuarios.push(req.body)
    //res.send('Ok POST')
    res.status(201).json(req.body)
})

app.listen(3000,()=>{console.log("Servidor Rodando!")})