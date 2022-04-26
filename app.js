// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// http Methos
app.get('/v1/explorers',(req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Andres1"};
    const explorer2 = {id: 2, name: "Andres2"};
    const explorer3 = {id: 3, name: "Andres3"};
    const explorer4 = {id: 4, name: "Andres4"};
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers);
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Andres"};
    res.status(200).json(explorer)
})

app.get('/v1/explorer', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})