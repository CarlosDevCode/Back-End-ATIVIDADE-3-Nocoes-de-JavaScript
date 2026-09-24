//Sistema de Cadastro de Produtos utilizando Map
//Cada produto: { codigo, nome, preco, quantidade }

// Map que armazena os produtos, usando o código como chave
const produtos = new Map();

// Cadastra um novo produto, validando código duplicado, preço e quantidade
function cadastrarProduto(codigo, nome, preco, quantidade) {
  if (produtos.has(codigo)) {
    throw new Error(`Já existe um produto cadastrado com o código "${codigo}".`);
  }
  if (preco <= 0) {
    throw new Error("O preço deve ser maior que zero.");
  }
  if (quantidade < 0) {
    throw new Error("A quantidade em estoque não pode ser negativa.");
  }

  const produto = { codigo, nome, preco, quantidade };
  produtos.set(codigo, produto);
  console.log(`Produto "${nome}" cadastrado com sucesso!`);
}

// Busca e retorna um produto pelo código, ou lança erro se não existir
function consultarProduto(codigo) {
  if (!produtos.has(codigo)) {
    throw new Error(`Produto com código "${codigo}" não encontrado.`);
  }
  return produtos.get(codigo);
}

// Atualiza a quantidade em estoque de um produto existente
function alterarQuantidade(codigo, novaQuantidade) {
  if (!produtos.has(codigo)) {
    throw new Error(`Produto com código "${codigo}" não encontrado.`);
  }
  if (novaQuantidade < 0) {
    throw new Error("A quantidade em estoque não pode ser negativa.");
  }

  const produto = produtos.get(codigo);
  produto.quantidade = novaQuantidade;
  produtos.set(codigo, produto);
  console.log(`Quantidade do produto "${produto.nome}" atualizada para ${novaQuantidade}.`);
}

// Atualiza o preço de um produto existente
function alterarPreco(codigo, novoPreco) {
  if (!produtos.has(codigo)) {
    throw new Error(`Produto com código "${codigo}" não encontrado.`);
  }
  if (novoPreco <= 0) {
    throw new Error("O preço deve ser maior que zero.");
  }

  const produto = produtos.get(codigo);
  produto.preco = novoPreco;
  produtos.set(codigo, produto);
  console.log(`Preço do produto "${produto.nome}" atualizado para R$ ${novoPreco.toFixed(2)}.`);
}

// Remove um produto do cadastro pelo código
function removerProduto(codigo) {
  if (!produtos.has(codigo)) {
    throw new Error(`Produto com código "${codigo}" não encontrado.`);
  }

  const produto = produtos.get(codigo);
  produtos.delete(codigo);
  console.log(`Produto "${produto.nome}" removido com sucesso.`);
}

// Verifica se um produto está cadastrado (true ou false)
function existeProduto(codigo) {
  return produtos.has(codigo);
}

// Exibe todos os produtos cadastrados no console
function exibirProdutos() {
  if (produtos.size === 0) {
    console.log("Nenhum produto cadastrado.");
    return;
  }

  console.log("\n=== Lista de Produtos Cadastrados ===");
  for (const produto of produtos.values()) {
    console.log(
      `Código: ${produto.codigo} | Nome: ${produto.nome} | ` +
      `Preço: R$ ${produto.preco.toFixed(2)} | Quantidade: ${produto.quantidade}`
    );
  }
  console.log("======================================\n");
}


// Testes

// Cadastro de produtos válidos
try {
  cadastrarProduto("P001", "Notebook", 3500.00, 10);
  cadastrarProduto("P002", "Mouse", 50.00, 100);
  cadastrarProduto("P003", "Teclado", 120.00, 50);
} catch (erro) {
  console.error("Erro ao cadastrar:", erro.message);
}

exibirProdutos();

// Tentativa de cadastro com código já existente (erro esperado)
try {
  cadastrarProduto("P001", "Notebook Gamer", 8000.00, 5);
} catch (erro) {
  console.error("Erro ao cadastrar:", erro.message);
}

// Consulta de produto existente
try {
  const produto = consultarProduto("P002");
  console.log("Produto encontrado:", produto);
} catch (erro) {
  console.error("Erro ao consultar:", erro.message);
}

// Consulta de produto inexistente (erro esperado)
try {
  consultarProduto("P999");
} catch (erro) {
  console.error("Erro ao consultar:", erro.message);
}

// Alteração de quantidade válida
try {
  alterarQuantidade("P001", 15);
} catch (erro) {
  console.error("Erro ao alterar quantidade:", erro.message);
}

// Tentativa de quantidade negativa (erro esperado)
try {
  alterarQuantidade("P001", -5);
} catch (erro) {
  console.error("Erro ao alterar quantidade:", erro.message);
}

// Alteração de preço válida
try {
  alterarPreco("P002", 45.00);
} catch (erro) {
  console.error("Erro ao alterar preço:", erro.message);
}

// Tentativa de preço inválido (erro esperado)
try {
  alterarPreco("P002", 0);
} catch (erro) {
  console.error("Erro ao alterar preço:", erro.message);
}

// Verificação de existência de produtos
console.log("P001 está cadastrado?", existeProduto("P001"));
console.log("P999 está cadastrado?", existeProduto("P999"));

// Remoção de produto
try {
  removerProduto("P003");
} catch (erro) {
  console.error("Erro ao remover:", erro.message);
}

exibirProdutos();
