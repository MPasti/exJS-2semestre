const principal = () => {
  let matriz = [];
  for (let i = 0; i < 4; i++) {
    matriz[i] = []; //cria um espaço no array para cada vetor dentro da matriz
    alert(`Informe os elementos da lista da linha ${i + 1}`);
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = Number(prompt(`Entre um valor para a matriz[${i}][${j}]`));
    }
  }

  imprimeMatriz(matriz);
  somaDiagonal(matriz);
  somaDiagonalInversa(matriz);
};

function imprimeMatriz(matriz) {
  for (let i = 0; i < 4; i++) {
    console.log(
      '[' +
        matriz[i][0] +
        ' ' +
        matriz[i][1] +
        ' ' +
        matriz[i][2] +
        ' ' +
        matriz[i][3] +
        ']'
    );
  }
  console.log(matriz);
}
function somaDiagonal(matriz) {
  let soma = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) {
        soma = soma + matriz[i][j];
      }
    }
  }
  console.log(`Soma dos valores da diagonal principal: ${soma}`);
}

const somaDiagonalInversa = (matriz) => {
  let somaInversa = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i + j === 3) {
        somaInversa = somaInversa + matriz[i][j];
      }
    }
  }
  console.log(`Soma dos valores da diagonal invertida: ${somaInversa}`);
};

principal();
