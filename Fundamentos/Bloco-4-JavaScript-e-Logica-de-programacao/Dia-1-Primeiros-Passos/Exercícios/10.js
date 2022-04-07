const custoDoProduto = 100;
const valorDaVenda = 250;

if (valorDaVenda >= 0 && custoDoProduto >= 0) {
    const custoTotalDoProduto = custoDoProduto * 1.2;
    const lucroTotal = (valorDaVenda - custoTotalDoProduto) * 1000;
    console.log(lucroTotal);
} else {
    console.log("Erro: Valor negativo!");
};