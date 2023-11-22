const resultado = document.getElementById('resultado');

const pessoasString = localStorage.getItem('pessoas');
const pessoas = JSON.parse(pessoasString);

pessoas.sort((a, b) => a.nome.localeCompare(b.nome));

const nomes = pessoas.map(pessoa => pessoa.nome);
const idades = pessoas.map(pessoa => pessoa.idade);

const maiorIdade = Math.max(...idades);
const menorIdade = Math.min(...idades);
const mediaIdades = idades.reduce((soma, idade) => soma + idade, 0) / idades.length;
const medianaIdades = calcularMediana(idades);

resultado.innerHTML = `
    <h2>Resultados:</h2>
    <ul>
        <li>Nomes em ordem alfabética: ${nomes.join(', ')}</li>
        <li>Maior idade: ${maiorIdade}</li>
        <li>Menor idade: ${menorIdade}</li>
        <li>Média das idades: ${mediaIdades.toFixed(2)}</li>
        <li>Mediana das idades: ${medianaIdades}</li>
    </ul>
`;

function calcularMediana(array) {
    array.sort((a, b) => a - b);

    const indice = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[indice - 1] + array[indice]) / 2;
    } else {
        return array[indice];
    }
}