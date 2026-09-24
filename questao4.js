// ===== Classe base: Funcionario =====
class Funcionario {
  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  exibirDados() {
    console.log(`Nome: ${this.nome} | Cargo: ${this.cargo} | Salário base: R$ ${this.salario.toFixed(2)}`);
  }

  // Regra padrão: bônus de 10% do salário
  calcularBonus() {
    return this.salario * 0.1;
  }

  // Usa this.calcularBonus(): se a subclasse sobrescrever, a regra dela é usada
  calcularSalarioFinal() {
    return this.salario + this.calcularBonus();
  }
}

// ===== Professor herda de Funcionario (extends) =====
class Professor extends Funcionario {
  constructor(nome, salario) {
    super(nome, salario, "Professor"); // chama o constructor da classe pai
  }

  // Sobrescrita: professor recebe 15% de bônus
  calcularBonus() {
    return this.salario * 0.15;
  }
}

// ===== Programador herda de Funcionario (extends) =====
class Programador extends Funcionario {
  constructor(nome, salario) {
    super(nome, salario, "Programador");
  }

  // Sobrescrita: programador recebe 20% de bônus
  calcularBonus() {
    return this.salario * 0.2;
  }
}

// ===== Programa principal =====
// Pelo menos dois funcionários (um comum, um professor e um programador,
// totalizando quatro objetos)
const funcionarios = [
  new Funcionario("Marcos", 3000, "Secretário"),
  new Funcionario("Luciana", 3500, "Analista Administrativo"),
  new Professor("Carlos", 5000),
  new Programador("Fernanda", 6000),
];

// Exibe dados, bônus e salário final de cada um.
// Polimorfismo: o mesmo método executa a regra de cada classe.
funcionarios.forEach((f) => {
  f.exibirDados();
  console.log(`   Bônus: R$ ${f.calcularBonus().toFixed(2)}`);
  console.log(`   Salário final: R$ ${f.calcularSalarioFinal().toFixed(2)}\n`);
});
