const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const adicionarBtn = document.getElementById('adicionar');
const registrosList = document.getElementById('registros');
const prosseguirBtn = document.getElementById('prosseguir');

const pessoas = [];

function adicionarUsuario() {
    const nome = nomeInput.value.trim();
    const idade = idadeInput.value.trim();

    if (!nome || !idade) {
        alert('Por favor, preencha todos os campos');
        return;
    }

    pessoas.push({ nome, idade });
    registrosList.innerHTML += `<li>${nome}, ${idade} anos</li>`;

    nomeInput.value = '';
    idadeInput.value = '';
}

adicionarBtn.addEventListener('click', adicionarUsuario);

prosseguirBtn.addEventListener('click', () => {
    if (pessoas.length === 0) {
        alert('Por favor, insira pelo menos um registro');
        return;
    }
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
    window.location.href = 'pagina2.html';
});