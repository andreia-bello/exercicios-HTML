import express from 'express';
import db from './repository/index.js';
 
const app = express()
app.use(express.json())
 
//C
app.post("/api/v1/pessoa", (req, res) => {
    //id, cpf, email
    const { id, cpf, email } = req.body
 
    if (!id || !cpf || !email) {
        //avisar q é para enviar tudo
        res.send({ message: "Falta de informação" })
        return
    }
    //cadastrar
    db.push({ id, cpf, email })
    res.send({ message: "Pessoa criada com sucesso!" })
})

app.get("/api/v1/pessoas", (req, res) => {
    res.send({message: "Pessoa encontrada com sucesso", db})
 })

//R
app.get("/api/v1/pessoa/:id", (req, res) => {
    const id = Number(req.params.id)

    const pessoa = db.find(p => p.id === id)

    if(!pessoa) {
        res.status(404).send({message: "Pessoa não encontrada!"})
        return
    }
    res.send({message: "Pessoa encontrada com sucesso", pessoa})
 })
//U
app.put("/api/v1/pessoa/:id", (req, res) => { 
    const id = Number(req.params.id)
    const {email} = req.body
    const pessoa = db.find(it => it.id === id)

    if(!pessoa) {
        res.status(404).send({message: "Pessoa não encontrada!"})
        return
    }
    
    pessoa.email = email
    res.send({message: "Pessoa alterada com sucesso"})
})
//D
app.delete("/api/v1/pessoa/:id", (req, res) => {
    const id = Number(req.params.id)

    const index = db.findIndex(it => it.id === id)

    if(index === -1) {
        res.status(404).send({message: "Pessoa não encontrada"})
        return
    }

    db.splice(index, 1)

    res.send({message: "Pessoa deletada com sucesso!"})

 })
 
app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});


// res.send() → envia resposta com status padrão 200,
// res.status(404).send() → envia resposta com status 404
// p.id e it.id → não têm diferença; são apenas nomes diferentes para o mesmo elemento percorrido pelo find().

