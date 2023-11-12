(function principal() {
  do {
    opcao = Number(
      prompt(
        'Digite:\n1-Rodar Exercicio 1.\n2-Rodar Exercicio 2.\n3-Rodar Exercicio 3.\n4-Rodar Exercicio 4.\n5-Rodar Exercicio 5.\n6-Rodar Exercicio 6.\n7-Rodar Exercicio 7.\n8-Rodar Exercicio 8.\n9-Rodar Exercicio 9.\n10-Rodar Exercicio 10.\n11-Sair do programa'
      )
    );
    switch (opcao) {
      case 1:
        exe01();
        break;
      case 2:
        exe02();
        break;
      case 3:
        exe03();
        break;
      case 4:
        exe04();
        break;
      case 5:
        exe05();
        break;
      case 6:
        exe06();
        break;
      case 7:
        exe07();
        break;
      case 8:
        exe08();
        break;
      case 9:
        exe09();
        break;
      case 10:
        exe10();
        break;
      case 11:
        alert('Encerrando programa');
        break;
      default:
        alert('Opção inválida');
    }
  } while (opcao != 6);
})();

function exe01() {
  let matriz = [];
  leituraMatriz(matriz);
  calculoMatriz(matriz);
}

let leituraMatriz = (matriz) => {
  for (i = 0; i < 3; i++) {
    matriz[i] = [];
    for (j = 0; j < 5; j++) {
      matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`));
    }
  }
  alert(matriz);
};

let calculoMatriz = (matriz) => {
  let qntd = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 5; j++) {
      if (matriz[i][j] > 15 && matriz[i][j] < 20) {
        qntd++;
      }
    }
  }
  alert(qntd);
};

function exe02() {
  let matriz = [];
  leituraMatriz2(matriz);
  calculoMatriz2(matriz);
  mediaMatriz2(matriz);
}

let leituraMatriz2 = (matriz) => {
  for (i = 0; i < 2; i++) {
    matriz[i] = [];
    for (j = 0; j < 4; j++) {
      matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`));
    }
  }
  alert(matriz);
};

let calculoMatriz2 = (matriz) => {
  let vet = [];
  for (i = 0; i < 2; i++) {
    let qntd = 0;
    for (j = 0; j < 4; j++) {
      if (matriz[i][j] > 12 && matriz[i][j] < 20) {
        qntd++;
      }
    }
    vet.push(qntd);
  }
  alert(vet);
};

let mediaMatriz2 = (matriz) => {
  let media = 0;
  let qntd = 0;
  for (i = 0; i < 2; i++) {
    for (j = 0; j < 4; j++) {
      if (matriz[i][j] % 2 == 0) {
        media = media + matriz[i][j];
        qntd++;
      }
    }
  }

  if (qntd != 0) {
    media = media / qntd;
    alert(media);
  } else {
    media = 0;
    alert(media);
  }
};

function exe03() {
  let matriz = [];
  leituraMatriz3(matriz);
  maiorMatriz3(matriz);
  menorMatriz3(matriz);
}

let leituraMatriz3 = (matriz) => {
  for (i = 0; i < 6; i++) {
    matriz[i] = [];
    for (j = 0; j < 3; j++) {
      matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`));
    }
  }
  alert(matriz);
};

let maiorMatriz3 = (matriz) => {
  let maior = matriz[0][0];
  let indice1;
  let indice2;
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 3; j++) {
      if (maior < matriz[i][j]) {
        maior = matriz[i][j];
        indice1 = i;
        indice2 = j;
      }
    }
  }
  alert(`Maior valor = ${maior} nos índices i = ${indice1}, j = ${indice2}`);
};

let menorMatriz3 = (matriz) => {
  menor = matriz[0][0];
  let indice1;
  let indice2;
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 3; j++) {
      if (menor > matriz[i][j]) {
        menor = matriz[i][j];
        indice1 = i;
        indice2 = j;
      }
    }
  }
  alert(`Menor valor = ${menor} nos índices i = ${indice1}, j = ${indice2}`);
};

function exe04() {
  let matriz = [];
  let notas = [];
  let vetor = [];
  leituraMatriz4(matriz);
  leituraVetor4(vetor);
  calculos4(matriz, notas);
  media4(notas);
  resultados4(vetor, notas);
}

let leituraMatriz4 = (matriz) => {
  for (i = 0; i < 15; i++) {
    matriz[i] = [];
    for (j = 0; j < 5; j++) {
      matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]: `));
    }
  }
};

let leituraVetor4 = (vetor) => {
  for (i = 0; i < 15; i++) {
    vetor[i] = prompt(`Informe o valor do vetor ${i}: `);
  }
};

let calculos4 = (matriz, notas) => {
  for (i = 0; i < 15; i++) {
    let soma = 0;
    for (j = 0; j < 5; j++) {
      soma = soma + matriz[i][j];
    }
    soma = soma / 5;
    notas.push(soma);
  }
  alert(notas);
};

let resultados4 = (vetor, notas) => {
  for (i = 0; i < 15; i++) {
    let situacao = '';
    alert(`Aluno ${i + 1}:\nNome: ${vetor[i]}\nNota: ${notas[i]}`);
    if (notas[i] > 6) {
      situacao = 'Aprovado';
    } else {
      situacao = 'Reprovado';
    }
    alert(`Situação: ${situacao}`);
  }
};

let media4 = (notas) => {
  let m = 0;
  for (i = 0; i < 15; i++) {
    m = m + notas[i];
  }
  m = m / 15;
  alert(`Média da turma = ${m}`);
};

function exe05() {
  const matrizVendas = preencherMatrizVendas();
  calcularTotalPorMes5(matrizVendas);
  calcularTotalPorSemana5(matrizVendas);
  calcularTotalAnual5(matrizVendas);
}

function preencherMatrizVendas() {
  let matriz = new Array(12);

  for (let i = 0; i < 12; i++) {
    matriz[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = Number(
        prompt(
          `Informe o valor de vendas para o mês ${i + 1}, semana ${j + 1}: `
        )
      );
    }
  }

  return matriz;
}

function calcularTotalPorMes5(matriz) {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  for (let i = 0; i < 12; i++) {
    let totalMes = 0;
    for (let j = 0; j < 4; j++) {
      totalMes += matriz[i][j];
    }
    alert(`Total de vendas em ${meses[i]}: R$${totalMes}`);
  }
}

function calcularTotalPorSemana5(matriz) {
  for (let j = 0; j < 4; j++) {
    let totalSemana = 0;
    for (let i = 0; i < 12; i++) {
      totalSemana += matriz[i][j];
    }
    alert(`Total de vendas na semana ${j + 1}: R$${totalSemana}`);
  }
}

function calcularTotalAnual5(matriz) {
  let totalAno = 0;
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
      totalAno += matriz[i][j];
    }
  }
  alert(`Total de vendas no ano: R$${totalAno}`);
}

let exe6 = () => {
  matriz = [];
  vetor = [];
  leituraMatriz6(matriz);
  somaColunas(matriz, vetor);
  multiplicacaoMatriz(matriz, vetor);
};
let leituraMatriz6 = (mat) => {
  for (i = 0; i < 20; i++) {
    mat[i] = [];
    for (j = 0; j < 10; j++) {
      mat[i][j] = Number(
        prompt(`Insira o elemento na posição ${i + 1}x${j + 1}`)
      );
    }
  }
};
let somaColunas = (mat, vet) => {
  let soma;
  for (j = 0; j < 10; j++) {
    soma = 0;
    for (i = 0; i < 20; i++) {
      soma += mat[i][j];
    }
    vet[j] = soma;
  }
};
let multiplicacaoMatriz = (mat, vet) => {
  for (i = 0; i < 20; i++) {
    for (j = 0; j < 10; j++) {
      mat[i][j] = mat[i][j] * vet[j];
    }
  }
  console.log(mat);
};

let exe7 = () => {
  M = [];
  N = [];
  leituraMatrizes(M, N);
  terceiraMatriz(M, N);
};
let leituraMatrizes = (m, n) => {
  alert('LEITURA DA MATRIZ M');
  for (i = 0; i < 4; i++) {
    m[i] = [];
    for (j = 0; j < 6; j++) {
      m[i][j] = Number(
        prompt(`Insira o elemento na posição ${i + 1}x${j + 1} da matriz M`)
      );
    }
  }
  alert('LEITURA DA MATRIZ N');
  for (i = 0; i < 6; i++) {
    n[i] = [];
    for (j = 0; j < 4; j++) {
      n[i][j] = Number(
        prompt(`Insira o elemento na posição ${i + 1}x${j + 1} da matriz N`)
      );
    }
  }
};

let exe8 = () => {
  mat1 = [];
  mat2 = [];
  leituraMatrizes2(mat1, mat2);
  matrizSoma(mat1, mat2);
  matrizSub(mat1, mat2);
};
let leituraMatrizes2 = (m, n) => {
  for (i = 0; i < 3; i++) {
    m[i] = [];
    for (j = 0; j < 8; j++) {
      m[i][j] = Number(
        prompt(
          `Insira o elemento da posição ${i + 1}x${j + 1} da primeira matriz`
        )
      );
    }
  }
  for (i = 0; i < 3; i++) {
    n[i] = [];
    for (j = 0; j < 8; j++) {
      n[i][j] = Number(
        prompt(
          `Insira o elemento da posição ${i + 1}x${j + 1} da segunda matriz`
        )
      );
    }
  }
};
let matrizSoma = (m, n) => {
  matSoma = [];
  for (i = 0; i < 3; i++) {
    matSoma[i] = [];
    for (j = 0; j < 8; j++) {
      matSoma[i][j] = m[i][j] + n[i][j];
    }
  }
};
let matrizSub = (m, n) => {
  matSub = [];
  for (i = 0; i < 3; i++) {
    matSub[i] = [];
    for (j = 0; j < 8; j++) {
      matSub[i][j] = m[i][j] - n[i][j];
    }
  }
};

let exe9 = () => {
  matriz = [];
  leituraMatriz9(matriz);
  matrizMult(matriz);
};
let leituraMatriz9 = (mat) => {
  for (i = 0; i < 3; i++) {
    mat[i] = [];
    for (j = 0; j < 3; j++) {
      mat[i][j] = Number(
        prompt(`Insira o elemento na posição ${i + 1}x${j + 1}`)
      ).toFixed(1);
    }
  }
};
let matrizMult = (mat) => {
  valor = Number(prompt('Entre o valor para multiplicar a matriz'));
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      mat[i][j] = mat[i][j] * valor;
    }
  }
  console.log(mat);
};

let exe10 = () => {
  matriz = [];
  leituraMatriz10(matriz);
  exA(matriz);
  exB(matriz);
  exC(matriz);
  exD(matriz);
  exE(matriz);
};
let leituraMatriz10 = (mat) => {
  for (i = 0; i < 5; i++) {
    mat[i] = [];
    for (j = 0; j < 5; j++) {
      mat[i][j] = Number(
        prompt(`Insira o elemento da posição ${i + 1}x${j + 1}`)
      );
    }
  }
};
let exA = (mat) => {
  let somaA = 0;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (i == 4) {
        somaA += mat[i][j];
      }
    }
  }
  console.log(`a) ${somaA}`);
};
let exB = (mat) => {
  let somaB = 0;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (j == 2) {
        somaB += mat[i][j];
      }
    }
  }
  console.log(`b) ${somaB}`);
};
let exC = (mat) => {
  let somaC = 0;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (i == j) {
        somaC += mat[i][j];
      }
    }
  }
  console.log(`c) ${somaC}`);
};
let exD = (mat) => {
  let somaD = 0;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (j == 4 - i) {
        somaD += mat[i][j];
      }
    }
  }
  console.log(`d) ${somaD}`);
};
let exE = (mat) => {
  let somaE = 0;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      somaE += mat[i][j];
    }
  }
  console.log(`a) ${somaE}`);
};
