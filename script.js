const cep = document.querySelector('#cep');

const endereco = (dados) => {
    for(let x in dados) {
        if(document.querySelector('#' + x)) {
            document.querySelector('#' + x).value = dados[x]
        }
    }
}

cep?.addEventListener('blur', (e) => {

    e.preventDefault

    let search = cep.value;

    // fetch api usa promises (then, catch)
    // site de verificacao de cep
    fetch(`https://viacep.com.br/ws/${search}/json/`, {
        method: 'get', 
        mode: 'cors',
        cache: 'default'
    })
    .then(res => {
        res.json()
        .then(dados => {
            endereco(dados)
        })
    })
    .catch();
})

async function showProdutos() {
    const responseProdutos = await fetch("/api/produtos").then(res => res.json())

    createTable = tableData => {
        var tableProdutos = document.querySelector('#tbody-produtos')
        for (let i = 0; i < tableData.length; i++) {
            var trProdutos = document.createElement('tr')

            var tdCod = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdTipo = document.createElement('td')
            var tdQtd = document.createElement('td')

            tdCod.innerText = tableData[i].cod_barras;
            tdNome.innerText = tableData[i].nome;
            tdTipo.innerText = tableData[i].tipo;
            tdQtd.innerText = tableData[i].quantidade;

            trProdutos.appendChild(tdCod)
            trProdutos.appendChild(tdNome)
            trProdutos.appendChild(tdTipo)
            trProdutos.appendChild(tdQtd)

            tableProdutos.appendChild(trProdutos)
        }
    }

    createTable(responseProdutos);
}

async function showPedidos() {
    const responsePedidos = await fetch("/api/pedidos").then(res => res.json())

    createTable = tableData => {
        var table = document.querySelector('#tbody-pedidos')

        for (let i = 0; i < tableData.length; i++) {
            var tr = document.createElement('tr')

            var tdId = document.createElement('td')
            var tdValor = document.createElement('td')
            var tdCpf = document.createElement('td')
            var tdEntrega = document.createElement('td')
            var tdSabores = document.createElement('td')
            var tdTamanho = document.createElement('td')

            tdId.innerText = tableData[i].idPedido;
            tdValor.innerText = tableData[i].valor;
            tdCpf.innerText = tableData[i].cpf;
            tdEntrega.innerText = tableData[i].retiradaEntrega;
            tdSabores.innerText = tableData[i].sabores;
            tdTamanho.innerText = tableData[i].tamanho;

            tr.appendChild(tdId)
            tr.appendChild(tdValor)
            tr.appendChild(tdCpf)
            tr.appendChild(tdEntrega)
            tr.appendChild(tdSabores)
            tr.appendChild(tdTamanho)

            table.appendChild(tr)
        }
    }

    createTable(responsePedidos);
}

var updateButton = document.querySelector('#update')
var deleteButton = document.querySelector('#delete')
var updateForm = document.querySelector('#update-form')
var deleteForm = document.querySelector('#delete-form')

let i = 0;
let j = 0

updateButton?.addEventListener('click', (e) => {

    e.preventDefault;

    
    if (i%2 == 0) {
        updateForm.style.display = 'block'
        deleteForm.style.display = 'none'
        j = 0;
    } else {
        updateForm.style.display = 'none'
    }

    i++
})

deleteButton?.addEventListener('click', (e) => {

    e.preventDefault;

    
    if (j%2 == 0) {
        deleteForm.style.display = 'block'
        updateForm.style.display = 'none'
        i = 0;
    } else {
        deleteForm.style.display = 'none'
    }

    j++
})

