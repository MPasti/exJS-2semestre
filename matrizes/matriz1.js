const principal = () => {
  let matriz = [];
  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = Number(prompt(`Entre um valor para a matriz[${i}][${j}]`));
    }
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      console.log(matriz[i][j]);
    }
    console.log('\n');
  }
};

principal();
