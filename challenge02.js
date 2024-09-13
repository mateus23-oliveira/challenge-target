const pretenseFibonacci = (number) => {
    let a = 0;
    let b = 1;
    let proximo = 0;

    if (number === 0 || number === 1) { // se o numero passado for 0 ou 1 nao entra no loop pois eles sempre pertencer a sequencia. 
        return `${number} pertence à sequência de Fibonacci.`;
    }

    while (proximo < number) {
        proximo = a + b;
        a = b;
        b = proximo;
    }

    return proximo === number 
    ? `${number} pertence à sequência de Fibonacci.` 
    : `${number} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
const valor = 23;  // Informe o número desejado aqui
console.log(pretenseFibonacci(valor));
