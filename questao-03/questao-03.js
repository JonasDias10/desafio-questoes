const faturamento = require('./dados.json');

function menorFaturamentoMes(faturamento){
    let menor = faturamento[0];
    for(const dado in faturamento) {
        if(faturamento[dado].valor < menor.valor && faturamento[dado].valor !== 0)
            menor = faturamento[dado];
    }
    return(menor);
}
const menorFaturamento = menorFaturamentoMes(faturamento);
console.log(`O dia útil do mês com menor faturamento foi o ${menorFaturamento.dia} no valor de ${menorFaturamento.valor}\n`);

function maiorFaturamentoMes(faturamento){
    let maior = faturamento[0];
    for(const dado in faturamento) {
        if(faturamento[dado].valor > maior.valor && faturamento[dado].valor !== 0)
            maior = faturamento[dado];
    }
    return(maior);
}
const maiorFaturamento = maiorFaturamentoMes(faturamento);
console.log(`O dia útil do mês com maior faturamento foi o ${maiorFaturamento.dia} no valor de ${maiorFaturamento.valor}\n`);

function calcularMediaMensal(faturamento) {
    let media = 0, diasUteis = 0;
    for(const dado in faturamento) {
        if(faturamento[dado].valor !== 0) {
            media += faturamento[dado].valor;
            diasUteis++;
        }
    }
    media = parseFloat((media / diasUteis).toFixed(4));
    return(media);
}

const media = calcularMediaMensal(faturamento);

function diasAcimaDaMedia(media, faturamento){
    let dias = 0;
    for(const dado in faturamento) {
        if(faturamento[dado].valor > media)
            dias++;
    }
    return(dias);
}
const dias = diasAcimaDaMedia(media, faturamento);
console.log(`Número de dias úteis com faturamento acima da média mensal foi de ${dias}\n`);