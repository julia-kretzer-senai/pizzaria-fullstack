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

var dados = (results) => {
    let hello = document.querySelector('#hello')
    
    for (let result in results) {
        var hi = document.createElement('p')
        hi = result.nome

        hello.appendChild(hi)
    }
}
