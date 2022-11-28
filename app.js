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

app.get('/cliente', (req,res) => {
    res.sendFile(__dirname + '/cadastrar-cliente.html')
})

app.get('/pedidos', (req,res) => {
    sql.query('select * from pedido', (err,results,fields) => {
        res.json(results)
        var tabela = ''
        tabela += `<table>`
        tabela += `<tr><td>id</td><td>retirada_entrega</td><td>valor_total</td><td>data</td><td>hora</td><td>idSalgada</td>
        <td>idDoce</td><td>idBebida</td><td>cpfCliente</td><td>cep</td></tr>`
        for(var x in results) {
            tabela += `<tr><td>${results[x].id}</td><td>${results[x].retirada_entrega}</td><td>${results[x].valor_total}</td><td>${results[x].data}</td><td>${results[x].hora}</td>
            <td>${results[x].idSalgada}</td><td>${results[x].idDoce}</td><td>${results[x].idBebida}</td><td>${results[x].cpfCliente}</td><td>${results[x].cep}</td></tr>`
        }
        tabela += `</table>`
    })
})

app.get('/produtos', (req, res) => {
    sql.query('select * from produto', (err,results,fields) => {
        res.json(results)
        var tabela = ''
        tabela += `<table>`
        tabela += `<tr><td>cod_barras</td><td>nome</td><td>tipo</td><td>quantidade</td></tr>`
        for(var x in results) {
            tabela += `<tr><td>${results[x].cod_barras}</td><td>${results[x].nome}</td><td>${results[x].tipo}</td><td>${results[x].quantidade}</td></tr>`
        }
        tabela += `</table>`
    })
})

app.get('/cadastrar-produto', (req,res) => {
    res.sendFile(__dirname + '/cadastrar-produto.html')
})

app.get('/finalizar', (req,res) => {
    res.sendFile(__dirname + '/finalizar.html')
})

app.post('/cadastro', (req,res) => {
    sql.query('insert into cliente (cpf, nome, sobrenome, nascimento, cep, uf, localidade, bairro, logradouro, numero, complemento) values (?,?,?,?,?,?,?,?,?,?,?)',
    [req.body.cpf, req.body.nome, req.body.sobrenome, req.body.nascimento, req.body.cep, req.body.uf, req.body.localidade, req.body.bairro, req.body.logradouro, req.body.num, req.body.complemento])
    res.redirect('/finalizar')
})

app.post('/produtos', (req,res) => {
    sql.query('insert into produto (cod_barras, nome, tipo, quantidade) values(?,?,?,?)',
    [req.body.codBarras, req.body.nomeProduto, req.body.tipo, req.body.quantidade]);

    res.redirect('/consulta')
})

app.post('/pizza', (req,res) => {

})

app.listen(port, () => {
    console.log(`Peça sua pizza já na porta ${port}!`)
})