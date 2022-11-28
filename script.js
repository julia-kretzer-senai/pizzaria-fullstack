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

var checkboxes = document.getElementsByName('sabor')

var result = '';

let finalizar = document.querySelector('#finalizar');

let sabores = document.querySelector('#sabores')

finalizar.addEventListener('click', (e) => {
    
    e.preventDefault

    for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        result += checkboxes[i].value 
        + " " + " Sabor, ";
    }
    sabores.innerText = checkboxes[i].value;
}
})

function showChoices() {

}