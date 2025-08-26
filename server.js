import express from 'express'

import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const usuarios = []

app.post('/cadastro', async (req, res) => {

    await prisma.usuario.create({
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade,
        }
    })

    res.status(201).json(req.body)
})

app.put('/cadastro/:id', async (req, res) => {
    
    // console.log(req.params.id)
    await prisma.usuario.update({
        where:{
            id:req.params.id,
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade,
        }
    })

    res.status(201).json({"message": "Usuário Atualizado!"})
})

app.delete('/cadastro/:id', async (req, res) => {
    
    // console.log(req.params.id)
    await prisma.usuario.delete({
        where:{
            id:req.params.id,
        },
    })

    res.status(201).json({"message": "Usuário Deletado!"})
})

app.get('/cadastro', async (req, res) => {

    const lista_usuarios = await prisma.usuario.findMany();

    res.status(200).json(lista_usuarios)

})

app.listen(3000, () => {
    console.log('Servidor operando! Porta: localhost:3000');
});
