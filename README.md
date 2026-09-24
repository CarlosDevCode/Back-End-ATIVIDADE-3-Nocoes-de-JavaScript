# Atividade 2 - Noções de JavaScript

## 1. Cadastro e Acompanhamento de Notas de Alunos

Desenvolva um programa para realizar o cadastro e o acompanhamento das notas de alunos.

Cada aluno deve possuir:

- nome;
- idade;
- curso;
- três notas.

O programa deve:

1. Criar uma estrutura para armazenar vários alunos.
2. Criar uma função para cadastrar um novo aluno.
3. Calcular a média das três notas de cada aluno.
4. Informar a situação do aluno:
   - **Aprovado**, se a média for maior ou igual a 7;
   - **Recuperação**, se a média estiver entre 5 e 6,9;
   - **Reprovado**, se a média for menor que 5.
5. Exibir os dados de todos os alunos cadastrados.
6. Informar quantos alunos foram aprovados, estão em recuperação e foram reprovados.

**Conteúdos envolvidos:** variáveis, tipos de dados, objetos, arrays, funções, operadores, condicionais, `forEach()` e `reduce()`.

---

## 2. Cadastro de Produtos com Map

Desenvolva um sistema de cadastro de produtos utilizando a estrutura `Map`.

Cada produto deve possuir:

- código;
- nome;
- preço;
- quantidade em estoque.

O sistema deve possuir funções para:

- Cadastrar um produto.
- Consultar um produto pelo código.
- Alterar a quantidade em estoque.
- Alterar o preço de um produto.
- Remover um produto.
- Verificar se determinado produto está cadastrado.
- Exibir todos os produtos cadastrados.

O programa deve utilizar tratamento de exceções para situações como:

- tentativa de cadastrar um código já existente;
- consulta de produto inexistente;
- quantidade negativa;
- preço menor ou igual a zero.

**Conteúdos envolvidos:** `Map`, objetos, funções, `set()`, `get()`, `has()`, `delete()`, `try`, `catch`, `throw` e condicionais.

---

## 3. Operações com Array de Produtos

Considere o seguinte conjunto de produtos:

```javascript
const produtos = [
    { codigo: 1, nome: "Teclado", preco: 100, quantidade: 5 },
    { codigo: 2, nome: "Mouse", preco: 50, quantidade: 20 },
    { codigo: 3, nome: "Monitor", preco: 800, quantidade: 8 },
    { codigo: 4, nome: "Fone", preco: 150, quantidade: 15 },
    { codigo: 5, nome: "Webcam", preco: 250, quantidade: 3 }
];
```

Utilizando métodos de arrays, desenvolva operações para:

1. Listar os produtos que possuem menos de 10 unidades em estoque.
2. Criar um novo array contendo somente os nomes dos produtos.
3. Localizar um produto a partir do seu código.
4. Criar um novo array contendo os preços com 10% de desconto.
5. Calcular o valor total de cada produto em estoque (preço × quantidade).
6. Calcular o valor total de todo o estoque.
7. Verificar se existe algum produto com estoque igual a zero.
8. Verificar se todos os produtos possuem preço maior que zero.

> **Restrição:** utilize, obrigatoriamente, `filter()`, `map()`, `find()`, `reduce()`, `some()` e `every()` em pelo menos uma das operações.

**Conteúdos envolvidos:** arrays, objetos e métodos de arrays.

---

## 4. Sistema Orientado a Objetos - Funcionários

Desenvolva um sistema utilizando Orientação a Objetos para representar funcionários de uma empresa.

Crie uma classe `Funcionario` contendo:

- nome;
- salário;
- cargo.

A classe deve possuir métodos para:

- Exibir os dados do funcionário.
- Calcular um bônus correspondente a 10% do salário.
- Calcular o salário final, considerando o bônus.

Depois, crie duas classes que herdem de `Funcionario`:

- `Professor`;
- `Programador`.

Cada classe deve possuir uma regra diferente para o cálculo do bônus.

O programa deve:

- Criar pelo menos dois funcionários.
- Criar pelo menos um professor.
- Criar pelo menos um programador.
- Exibir os dados de cada funcionário.
- Exibir o salário e o bônus calculados para cada um.

**Conteúdos envolvidos:** classes, objetos, atributos, métodos, `constructor`, `this`, herança (`extends`) e sobrescrita de métodos.

---

## 5. Sistema de Gerenciamento de Biblioteca

Desenvolva um sistema simples para gerenciamento de uma biblioteca.

Cada livro deve possuir:

- código;
- título;
- autor;
- ano de publicação;
- situação, indicando se está disponível ou emprestado.

Crie uma classe `Livro` para representar os livros e uma classe `Biblioteca` para gerenciar o acervo.

O sistema deve permitir:

- Cadastrar livro pelo código.
- Consultar livro pelo código.
- Listar todos os livros.
- Listar somente os livros disponíveis.
- Realizar empréstimo de um livro.
- Realizar devolução de um livro.
- Remover um livro do acervo.

O programa deve utilizar `Map` para armazenar os livros.

Também deve utilizar tratamento de exceções para impedir:

- cadastro de código duplicado;
- consulta de livro inexistente;
- empréstimo de livro já emprestado;
- devolução de livro que já está disponível;
- remoção de livro inexistente.

O programa deve utilizar obrigatoriamente:

- `class`;
- `constructor`;
- `Map`;
- funções/métodos;
- `if`/`else`;
- `for...of`;
- `try`/`catch`;
- `throw`.

**Conteúdos envolvidos:** classes, objetos, encapsulamento básico, métodos, `Map`, estruturas de repetição, condicionais e tratamento de exceções.
