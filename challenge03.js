const path = require('path');
const fs = require('fs');

// Lendo o arquivo JSON
const filePath = path.join(__dirname, 'dados.json')
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo", err);
        return;
    }

    // Convertendo o conteúdo do arquivo JSON em um objeto JavaScript
    const faturamento = JSON.parse(data);
    
    // Função para calcular o menor, maior e dias acima da média
    function analisarFaturamento(faturamento) {
        let menorValor = Infinity;
        let maiorValor = -Infinity;
        let soma = 0;
        let diasComFaturamento = 0;

        // Calcular o menor e maior valor, e somar os dias com faturamento
        faturamento.forEach(dia => {
            if (dia.valor > 0) {  // Ignora dias sem faturamento
                if (dia.valor < menorValor) {
                    menorValor = dia.valor;
                }
                if (dia.valor > maiorValor) {
                    maiorValor = dia.valor;
                }
                soma += dia.valor;
                diasComFaturamento++;
            }
        });

        // Calcular a média de faturamento (ignorando dias com faturamento zero)
        const media = soma / diasComFaturamento;

        // Contar os dias com faturamento superior à média
        const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

        // Retornar os resultados
        return {
            menorValor,
            maiorValor,
            diasAcimaDaMedia,
            media
        };
    }

    const resultado = analisarFaturamento(faturamento);
    
    console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
    console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
    console.log(`Dias com faturamento superior à média mensal: ${resultado.diasAcimaDaMedia}`);
    console.log(`Média de faturamento mensal (ignorando dias sem faturamento): ${resultado.media}`);
});
