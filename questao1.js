//Array para armazenar os alunos
const alunos = [];

//Função para cadastrar um novo aluno
function cadastrarAluno(nome, idade, curso, nota1, nota2, nota3) {
  const aluno = {
    nome,
    idade,
    curso,
    notas: [nota1, nota2, nota3],
    media: 0,
    situacao: ""
  };

  aluno.media = calcularMedia(aluno.notas);
  aluno.situacao = definirSituacao(aluno.media);

  alunos.push(aluno);
  return aluno;
}

//Função para calcular a média das três notas
function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

//Função para definir a situação do aluno
function definirSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

//Função para exibir os dados de todos os alunos cadastrados
function exibirAlunos() {
  alunos.forEach((aluno, index) => {
    console.log(`--- Aluno ${index + 1} ---`);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Notas: ${aluno.notas.join(", ")}`);
    console.log(`Média: ${aluno.media.toFixed(2)}`);
    console.log(`Situação: ${aluno.situacao}`);
    console.log("");
  });
}

//Função para contar quantos alunos estão em cada situação
function contarSituacoes() {
  const contagem = { Aprovado: 0, Recuperação: 0, Reprovado: 0 };

  alunos.forEach((aluno) => {
    contagem[aluno.situacao]++;
  });

  console.log("--- Resumo Geral ---");
  console.log(`Aprovados: ${contagem.Aprovado}`);
  console.log(`Em Recuperação: ${contagem.Recuperação}`);
  console.log(`Reprovados: ${contagem.Reprovado}`);
}

//Testa o programa
cadastrarAluno("Ana", 20, "ADS", 7, 8, 9);
cadastrarAluno("Bruno", 18, "CD", 5, 6, 7);
cadastrarAluno("Caio", 25, "Computação", 10, 8, 9);

exibirAlunos();
contarSituacoes();
