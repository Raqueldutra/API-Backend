
const express = require('express')
const { listen } = require('express/lib/application')
const res = require('express/lib/response')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

// GET with route params;
app.route('/:autor/get').get( (req,res)  => res.send(req.params.route) )

// GET with quary params;
app.route('/get').get( (req,res)  => res.send(req.query) )

// PUT 
app.route('/put').put( ( req,res) => {
    res.send(req.body)
} )

// POST with body params;
 app.route('/post').post( (req,res)=> {
    const {autor, cidade, livros} = req.body
    res.send(`Meu nome é ${autor}, moro em ${cidade} e meus livros favoritos são: ${livros}`)
 }) 

 app.route('/:identificador').delete ( (req,res) => res.send(req.params.identificador) )