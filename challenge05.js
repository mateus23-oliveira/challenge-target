function inverterString(texto) {
    let stringInvertida = '';
    
    // Percorre a string de trás para frente
    for (let i = texto.length - 1; i >= 0; i--) {
        stringInvertida += texto[i]; // Adiciona o caractere na nova string invertida
    }

    return stringInvertida;
}

// Defina a string que deseja inverter
const stringOriginal = "Exemplo ";

const resultado = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${resultado}`);
