const form = document.getElementById('form-contatos')
const nomes = []
const telefones = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    adicionaLinha()
    atualizaTabela()
})


function adicionaLinha() {
    const inputContato = document.getElementById('contact-name')
    const inputTelefone = document.getElementById('contact-number')

    if (nomes.includes(inputContato.value)) {
        alert(`O contato ${inputContato.value} já existe.`)

    } else {
        nomes.push(inputContato.value)
        telefones.push(inputTelefone.value)

        let linha = '<tr>'
        linha += `<td>${inputContato.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += '</tr>'

        linhas += linha
    }
    inputContato.value = ''
    inputTelefone.value = ''
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}