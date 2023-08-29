principal();
let principal = () => {
  let vetFarmacias = [];
  let vetRemedios = [];
  cadastraFarmacias(vetFarmacias);
  cadastraRemedios(vetRemedios, vetFarmacias);
  vendaRemedios(vetRemedios);
};

let cadastraFarmacias = (vetFarmacias) => {
  for (let i = 0; i < 5; i++) {
    let novaFarmacia = {
      codigo: Number(prompt('Código da farmacia')),
      nome: prompt('Nome da farmácia'),
      endereco: prompt('Endereço da farmácia'),
    };
    while (vetFarmacias.some((farm) => farm.codigo == novaFarmacia.codigo)) {
      novaFarmacia.codigo = Number(prompt('Código já existe, informe um novo'));
    }
    vetFarmacias.push(novaFarmacia);
  }
};

let cadastraRemedios = (vetRemedios, vetFarmacias) => {
  for (let i = 0; i < 5; i++) {
    let novoRemedio = {
      codigoFarmacia: Number(prompt('Código da farmácia')),
      nome: prompt('Nome do remédio'),
      qtde: Number('Qtde do remédio'),
      preco: Number('Preço do remédio'),
    };

    while (
      !vetFarmacias.some((farm) => farm.codigo == novoRemedio.codigoFarmacia)
    ) {
      novoRemedio.codigoFarmacia = Number(
        prompt('Farmácia não existe. Digite novamente')
      );
    }
    vetRemedios.push(novoRemedio);
  }
};

let vendaRemedios = (vetRemedios) => {
  for (let cont = 0; cont < 5; cont++) {
    let objVenda = {
      codigo: Number(prompt('Código do remédio')),
      nome: prompt('Nome do remédio'),
      qtde: Number(prompt('Qtde vendida')),
    };
    let achou = false;
    for (let i = 0; i < vetRemedios.length; i++) {
      if (
        vetRemedios[i].codigoFarmacia == objVenda.codigo &&
        vetRemedios[i].nome == objVenda.nome
      ) {
        achou = true;
        if (vetRemedios[i].qtde >= objVenda.qtde) {
          vetRemedios[i].qtde = vetRemedios[i].qtde - objVenda.qtde;
        } else {
          alert('Estoque insuficiente para esta venda');
        }
      }
    }
    if (!achou) {
      alert('Produto não encontrado');
    }
  }
};
