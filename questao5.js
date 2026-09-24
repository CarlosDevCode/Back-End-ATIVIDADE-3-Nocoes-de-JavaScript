// Questão 5 - Sistema de biblioteca
// rodar com: node biblioteca.js

class Livro {
  constructor(codigo, titulo, autor, ano) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.disponivel = true; // todo livro novo já entra disponível
  }

  // retorna a situação em texto pra ficar mais fácil de mostrar
  getSituacao() {
    if (this.disponivel) {
      return "Disponível";
    } else {
      return "Emprestado";
    }
  }

  emprestar() {
    if (!this.disponivel) {
      throw new Error(`O livro "${this.titulo}" já está emprestado.`);
    }
    this.disponivel = false;
  }

  devolver() {
    if (this.disponivel) {
      throw new Error(`O livro "${this.titulo}" já está disponível, não tem o que devolver.`);
    }
    this.disponivel = true;
  }

  mostrar() {
    return `[${this.codigo}] ${this.titulo} - ${this.autor} (${this.ano}) | ${this.getSituacao()}`;
  }
}

class Biblioteca {
  constructor() {
    // a chave é o código e o valor é o objeto Livro
    this.livros = new Map();
  }

  cadastrar(codigo, titulo, autor, ano) {
    if (this.livros.has(codigo)) {
      throw new Error(`Já existe um livro com o código ${codigo}.`);
    }
    const livro = new Livro(codigo, titulo, autor, ano);
    this.livros.set(codigo, livro);
    console.log(`Livro "${titulo}" cadastrado!`);
  }

  // usei esse método nos outros também pra não repetir a verificação
  consultar(codigo) {
    if (!this.livros.has(codigo)) {
      throw new Error(`Livro com código ${codigo} não encontrado.`);
    }
    return this.livros.get(codigo);
  }

  listarTodos() {
    console.log("\n--- Todos os livros ---");
    if (this.livros.size === 0) {
      console.log("Nenhum livro cadastrado ainda.");
      return;
    }
    for (const livro of this.livros.values()) {
      console.log(livro.mostrar());
    }
  }

  listarDisponiveis() {
    console.log("\n--- Livros disponíveis ---");
    let achou = false;
    for (const livro of this.livros.values()) {
      if (livro.disponivel) {
        console.log(livro.mostrar());
        achou = true;
      }
    }
    if (!achou) {
      console.log("Nenhum livro disponível no momento.");
    }
  }

  emprestar(codigo) {
    const livro = this.consultar(codigo); // se não existir já dá erro aqui
    livro.emprestar();
    console.log(`Empréstimo feito: "${livro.titulo}"`);
  }

  devolver(codigo) {
    const livro = this.consultar(codigo);
    livro.devolver();
    console.log(`Devolução feita: "${livro.titulo}"`);
  }

  remover(codigo) {
    if (!this.livros.has(codigo)) {
      throw new Error(`Não dá pra remover, o código ${codigo} não existe.`);
    }
    const titulo = this.livros.get(codigo).titulo;
    this.livros.delete(codigo);
    console.log(`Livro "${titulo}" removido do acervo.`);
  }
}

// testes

const biblioteca = new Biblioteca();

// cadastrando alguns livros
try {
  biblioteca.cadastrar(1, "Dom Casmurro", "Machado de Assis", 1899);
  biblioteca.cadastrar(2, "O Cortiço", "Aluísio Azevedo", 1890);
  biblioteca.cadastrar(3, "Capitães da Areia", "Jorge Amado", 1937);
  biblioteca.cadastrar(4, "Vidas Secas", "Graciliano Ramos", 1938);
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// tentando cadastrar com código repetido (tem que dar erro)
try {
  biblioteca.cadastrar(1, "Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881);
} catch (erro) {
  console.log("Erro: " + erro.message);
}

biblioteca.listarTodos();

// consulta de um que existe e de um que não existe
try {
  const livro = biblioteca.consultar(3);
  console.log("\nConsulta: " + livro.mostrar());
  biblioteca.consultar(10);
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// empréstimos
console.log("");
try {
  biblioteca.emprestar(2);
  biblioteca.emprestar(4);
  biblioteca.emprestar(2); // esse já foi emprestado, vai cair no catch
} catch (erro) {
  console.log("Erro: " + erro.message);
}

biblioteca.listarDisponiveis();

// devoluções
console.log("");
try {
  biblioteca.devolver(2);
  biblioteca.devolver(1); // esse nunca saiu, então não pode devolver
} catch (erro) {
  console.log("Erro: " + erro.message);
}

// remoção
console.log("");
try {
  biblioteca.remover(3);
  biblioteca.remover(99); // não existe
} catch (erro) {
  console.log("Erro: " + erro.message);
}

biblioteca.listarTodos();
