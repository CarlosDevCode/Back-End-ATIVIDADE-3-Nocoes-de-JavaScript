// Array inicial com a lista de objetos contendo os produtos
const produtos = [
    { codigo: 1, nome: "Teclado", preco: 100, quantidade: 5 },
    { codigo: 2, nome: "Mouse", preco: 50, quantidade: 20 },
    { codigo: 3, nome: "Monitor", preco: 800, quantidade: 8 },
    { codigo: 4, nome: "Fone", preco: 150, quantidade: 15 },
    { codigo: 5, nome: "Webcam", preco: 250, quantidade: 3 }
];

// 1. Usando filter() para filtrar e listar apenas os produtos com menos de 10 unidades no estoque
const produtosEstoqueMenorDez = produtos.filter(p => p.quantidade < 10);
console.log();
console.log("Produtos com o estoque menor que 10 itens:");
console.log(produtosEstoqueMenorDez);

// 2. Usando map() para percorrer o array de produtos e extrair um novo array só com os nomes
const nomesProdutos = produtos.map(p => p.nome);
console.log();
console.log("Array apenas com os nomes dos produtos:");
console.log(nomesProdutos);

// 3. Usando find() para buscar e localizar o produto específico através do seu código
const produtoPeloCodigo = produtos.find(p => p.codigo === 3);
console.log();
console.log("Produto pesquisado pelo código:");
console.log(produtoPeloCodigo);

// 4. Usando map() para gerar uma nova lista contendo apenas os preços com 10% de desconto
const precosComDesconto = produtos.map(p => p.preco * 0.9);
console.log();
console.log("Preços com 10% de desconto:");
console.log(precosComDesconto);

// 5. Usando map() para calcular o valor em estoque de cada produto individualmente (quantidade x preço)
const valorEstoqueProduto = produtos.map(p => {
    return { ...p, total: p.quantidade * p.preco };
});
console.log();
console.log("Valor total do estoque com uma nova coluna:");
console.log(valorEstoqueProduto);

// 6. Usando reduce() para somar e acumular o valor total de todo o estoque da loja
const estoqueTotal = produtos.reduce((acc, p) => {
    return acc + (p.quantidade * p.preco);
}, 0);
console.log();
console.log("Valor do estoque total:");
console.log(estoqueTotal);

// 7. Usando some() para checar se existe ao menos um produto no estoque com quantidade zerada
const verificarEstoqueIgualZero = produtos.some(p => p.quantidade === 0);

if (verificarEstoqueIgualZero) {
    console.log("Existe um produto com estoque igual a zero");
} else {
    console.log("Nao existe nenhum estoque vazio");
}

// 8. Usando every() para validar se absolutamente todos os produtos possuem preço maior que zero
const verificarPrecoMaiorZero = produtos.every(p => p.preco > 0);

if (verificarPrecoMaiorZero) {
    console.log("Todos os produtos tem preço maior que zero");
} else {
    console.log("Existe algum produto que seja menor ou igual a zero");
}
