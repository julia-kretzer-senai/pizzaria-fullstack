const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const app = express()

const port = process.env.PORT || 3030

const sql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306
})

sql.query('use pizzariaJulia')

app.use(express.static(__dirname + '/'))

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

app.get('', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

var cpf = ''

app.get('/cliente', (req,res) => {
    res.sendFile(__dirname + '/cadastrar-cliente.html')
})

app.get('/pedidos', (req,res) => {
    sql.query('select * from pedido', (err,results,fields) => {
        res.json(results)
    })
})

app.get('/produtos', (req, res) => {
    sql.query('select * from produto', (err,results,fields) => {
        res.json(results)
    })
})

// app.get('/produtos', (req,res) => [
//     res.sendFile(__dirname + '/consulta-produtos.html')
// ])

app.get('/cadastrar-produto', (req,res) => {
    res.sendFile(__dirname + '/cadastrar-produto.html')
})

app.get('/finalizar', (req,res) => {
    res.sendFile(__dirname + '/finalizar.html')
})

app.post('/cadastro', (req,res) => {
    sql.query('insert into cliente (cpf, nome, sobrenome, nascimento, cep, uf, localidade, bairro, logradouro, numero, complemento) values (?,?,?,?,?,?,?,?,?,?,?)',
    [req.body.cpf, req.body.nome, req.body.sobrenome, req.body.nascimento, req.body.cep, req.body.uf, req.body.localidade, req.body.bairro, req.body.logradouro, req.body.num, req.body.complemento])
    cpf = req.body.cpf
    res.redirect('/finalizar')
})

app.post('/produtos', (req,res) => {
    sql.query('insert into produto (cod_barras, nome, tipo, quantidade) values(?,?,?,?)',
    [req.body.codBarras, req.body.nomeProduto, req.body.tipo, req.body.quantidade]);

    res.redirect('/consulta')
})

var sabor = []
var sabor1, sabor2, sabor3, sabor4, valorTotal

app.post('/pizza', (req,res) => {
    console.log(cpf)
    tamanho = req.body.tamanho
    sabor = req.body.sabor
    let sabores = sabor.toString();
    sabor1 = sabor.slice(0,1)
    sabor2 = sabor.slice(1,2)
    sabor3 = sabor.slice(2,3)
    sabor4 = sabor.slice(3,4)
    if (tamanho == 'p') {
        valorTotal = 29.9
    } else if (tamanho == 'm') {
        valorTotal = 49.9
    } else if (tamanho == 'g') {
        valorTotal = 69.9
    } else {
        valorTotal = 99.9
    }
    sql.query('insert into pedido (valor, retiradaEntrega, sabores, tamanho) values(?,?,?,?,?)',
    [valorTotal, req.body.entrega, sabores, tamanho])
    console.log(sabor1, sabor2, sabor3, sabor4) // funcionando, precisa inserir no banco de dados
})

app.listen(port, () => {
    console.log(`Peça sua pizza já na porta ${port}!`)
})
