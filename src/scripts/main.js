const form = document.getElementById("form-atividade");
const imgArmazenado = '<img src="images/correto.png" alt="Sinal Correto"/>';
let linhas = '';
const nomes = [];
const telefone = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelContato = document.getElementById("tel-contato");

    if (nomes.includes(inputNomeContato.value)) {
        alert(`Já existe um contato com o nome ${inputNomeContato.value}!`);
    } else {
    nomes.push(inputNomeContato.value);
    telefone.push(parseInt(inputTelContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += `<td>${imgArmazenado}</td>`;
    linha += "</tr>";

    linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelContato.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
};