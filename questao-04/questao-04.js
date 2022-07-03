const dados = [
    {
        estado: "SP",
        valor: 67836.43
    },
    {
        estado: "RJ",
        valor: 36678.66
    },
    {
        estado: "MG",
        valor: 29229.88
    },
    {
        estado: "ES",
        valor: 27165.48
    },
    {
        estado: "Outros",
        valor: 19849.53
    }
];

function calcFaturamento(dados) {
    let total = 0;
    for(const props in dados) {
        total += dados[props].valor;
    }
    return(total);
}

const faturamentoTotal = calcFaturamento(dados);

console.log("Abaixo estão os percentuais de cada estado no valor total mensal da distribuidora: \n");
function percentualEstadual(valorTotal, dados) {
    let percentual;
    for(const props in dados) {
        percentual = (dados[props].valor / valorTotal) * 100;
        console.log(`${dados[props].estado} equivale a ${(percentual).toFixed(2)} % do total.`);
    }
}
percentualEstadual(faturamentoTotal, dados);