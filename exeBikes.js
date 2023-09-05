function entradaDados(bikes, marcas) {
  let objBike = {
    marca: prompt('Digite a marca da bike').toUpperCase(),
    modelo: prompt('Digite o modelo da bike'),
    quadro: Number(prompt('Digite o quadro da bike')),
    aro: Number(prompt('Digite o aro da bike')),
    ano: Number(prompt('Digite o ano da bike')),
    preco: Number(prompt('Digite o preço da bike')),
  };
  while (!marcas.includes(objBike.marca)) {
    objBike.marca = prompt('Digite a marca correta da bike').toUpperCase();
  }
  bikes.push(objBike);
}
function calculaMediaPrecos(bikes) {
  let somaPrecos = 0;
  for (let i = 0; i < bikes.length; i++) {
    somaPrecos = somaPrecos + bikes[i].preco;
  }
  if (bikes.length == 0) {
    alert(`Não há bikes cadastradas`);
  } else {
    alert(`A média de preço das bikes é ${somaPrecos / bikes.length}`);
  }
}
const calculaBikeMaisAntiga = (bikes) => {
  let objAntigo = bikes[0];
  bikes.length !== 0
    ? bikes.forEach((bike) => {
        if (bike.ano < objAntigo.ano) {
          objAntigo = bike;
        }
      })
    : alert('não há bikes cadastradas');
  alert(objAntigo);
};
const bikesMarcaCaloi = (bikes) => {
  let bikesCaloi = [];
  bikes.length !== 0
    ? bikes.forEach((bike) => {
        if (bike.marca == 'CALOI') {
          bikesCaloi.push(bike);
        }
      })
    : alert(`Não há bikes cadastradas`);
  alert(bikesCaloi);
};
const qtdeBikesAro29 = (bikes) => {
  let cont = 0;
  if (bikes.length !== 0) {
    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].aro == 29) {
        cont++;
      }
    }
    alert(`Qtde de bikes com aro 29 ${cont}`);
  } else {
    alert(`Não há bikes cadastradas`);
  }
};
const bikeMaiorQuadro = (bikes) => {
  let maiorQuadro = bikes[0];
  if (bikes.length !== 0) {
    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].quadro > maiorQuadro.quadro) {
        maiorQuadro = bikes[i];
      }
    }
    alert(maiorQuadro);
  } else {
    alert(`Não há bikes cadastradas`);
  }
};
function bikes() {
  let bikes = [];
  let marcas = ['CALOI', 'SCOTT', 'CANONDALE'];
  let opcao;

  do {
    opcao = Number(
      prompt(`Digite 
        \n 1. Para cadastrar uma bike 
        \n 2. Para fazer a média de preços 
        \n 3. Para saber a bike mais antiga 
        \n 4. Para mostrar as bikes da marca CALOI 
        \n 5. Para a quantidade de bikes com aro  
        \n 6. Para a bike com maior Quadro 
        \n 7. Para sair`)
    );
    switch (opcao) {
      case 1:
        entradaDados(bikes, marcas);
        break;
      case 2:
        calculaMediaPrecos(bikes);
        break;
      case 3:
        calculaBikeMaisAntiga(bikes);
        break;
      case 4:
        bikesMarcaCaloi(bikes);
        break;
      case 5:
        qtdeBikesAro29(bikes);
        break;
      case 6:
        bikeMaiorQuadro(bikes);
        break;
      case 7:
        break;
      default:
        alert(`Opção inválida`);
    }
  } while (opcao != 7);
}
