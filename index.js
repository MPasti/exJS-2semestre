function exe1(){
    let obj = {
        a: Number(prompt(`Informe lado a do triângulo`)),
        b: Number(prompt(`Informe lado b do triângulo`)),
        c: Number(prompt(`Informe lado c do triângulo`)),
        delta: 0
    }
    obj.delta = (obj.b ** 2) - (4 * obj.a * obj.c)
    console.log(`O valor do delta do triângulo é ${obj.delta}`)
}

function exe2(){
    let somaMedias = 0
    for(let i=0; i<10;i++){
        let obj = {
            codigo: Number(prompt(`Informe o código do aluno`)),
            nome: prompt(`Informe o nome do aluno`),
            p1: Number(prompt(`Informe a nota da P1`)),
            p2: Number(prompt(`Informe a nota da P2`)),
            media: 0
        }
        obj.media = (obj.p1 + obj.p2) / 2
        console.log(`O aluno ${obj.nome} tem média ${obj.media}`)
        somaMedias = somaMedias + obj.media
    }
    console.log(`A média da turma é ${somaMedias/10}`)
}


const exe02 = () =>{
    const alunos = [];

for (let i = 0; i < 10; i++) {
  const aluno = {
    codigo: prompt("Digite o código do aluno: "),
    nome: prompt("Digite o nome do aluno: "),
    p1: prompt("Digite a nota da P1 do aluno: "),
    p2: prompt("Digite a nota da P2 do aluno: "),
  };
  alunos.push(aluno);
}

const mediaTurma = alunos.map(aluno => aluno.p1 + aluno.p2) / alunos.length;

console.log("Média da turma: " + mediaTurma);
}

function exe03(){
    let vetor = [];
    for(let i=0;i<4;i++){
        let objeto = {
            codigo: Number(prompt("Informe código do filme")),
            titulo: prompt("Informe o nome do filme"),
            class: Number(prompt("Informe a classificação indicativa do filme")),
            avaliacao: Number(prompt("Informe a avaliação do filme")),
        }
        vetor.push(objeto)
    }

    let somaClassificacao = 0
    for(let i=0;i<4;i++){
        somaClassificacao = somaClassificacao + vetor[i].class
    }
    console.log(`A média da classificação etária é ${somaClassificacao/4}`)
    
    let tituloMaisCurto = vetor[0].titulo;
    let tituloMaisLongo = vetor[0].titulo;
    let tempoMaisLongo = vetor[0].duracao;
    let tempoMaisCurto = vetor[0].duracao;
    for(let i =0; i<4; i++){
         if(filmes[i].duracao > tempoMaisLongo){
            tituloMaisLongo = vetor[i].titulo;
            tempoMaisLongo = vetor[i].duracao;
         }
         if(filmes[i].duracao < tempoMaisCurto){
            tempoMaisCurto = vetor[i].duracao;
            tituloMaisCurto = vetor[i].titulo;
         }
    }
}

function ex04(){
  let partidos = ["PT", "PSDB", "PL", "PSB"];
  let candidatos = [];
  let i = 1;
  for(let i=0;i<10;i++){
      let objeto = {
          codigo: Number(prompt("Informe o código do candidato")),
          nome: prompt("Informe o nome do candidato"),
          partido: prompt("Informe o partido do candidato").toUpperCase(),
          qtde: Number(prompt("Informe a quantidade de votos do candidato")),
      }

      while(!partidos.includes(objeto.partido)){
        objeto.partido = prompt("Insira um partido válido!!").toUpperCase();
      }

      candidatos.push(objeto)
  }


  let mv = candidatos[0].qtde;
  let mvc = candidatos[0].nome;
  let mpt = candidatos[0].partido;
for(let i=0; i<10;i++){
  if(candidatos[i].qtde > mv){
    mv = vet[i].qtde;
    mvc = vet[i].nome;
    mpt = vet[i].partido;
  }
}
  console.log(`Candidato mais votado: ${mvc} "\nSeu partido: ${mpt}\n Com a quantidade de ${mv} votos`);
}

function bike() {
  let bikes = [];
  let marcas = ["CALOI", "SCOTT", "CANONDALE"];
  let totalPreco = 0.0;
  let caloi = [];
  let maisAntigas = [];
  let maiorQuadro = {};

  for (let i = 0; i < 10; i++) {
    let obj = {
      marca: prompt(`Entre a marca da bicicleta`).toUpperCase(),
      modelo: prompt(`Entre o modelo da bicicleta`),
      quadro: Number(prompt(`Entre o quadro da bicicleta`)),
      aro: Number(prompt(`Entre o aro da bicicleta`)),
      ano: Number(prompt(`Entre o ano da bicicleta`)),
      preco: Number(prompt(`Entre o preço da bicicleta`)),
    };

    while (!marcas.includes(obj.marca)) {
      obj.marca = prompt("Insira uma marca válida!").toUpperCase();
    }

    totalPreco += obj.preco;
    bikes.push(obj);

    if (obj.marca === "CALOI") {
      caloi.push(obj);
    }

    if (!maisAntigas.length || obj.ano < maisAntigas[0].ano) {
      maisAntigas = [obj];
    } else if (obj.ano === maisAntigas[0].ano) {
      maisAntigas.push(obj);
    }

    if (!maiorQuadro.quadro || obj.quadro > maiorQuadro.quadro) {
      maiorQuadro = obj;
    }
  }

  console.log(`A média dos preços é de: ${totalPreco / bikes.length}`);

  console.log("As bicicletas mais antigas são:");
  maisAntigas.forEach((bicicleta) => console.log(bicicleta));

  console.log("Bicicletas da marca Caloi:");
  caloi.forEach((bicicleta) => console.log(bicicleta));

  let aro29 = bikes.filter((bicicleta) => bicicleta.aro === 29).length;
  console.log(`Quantidade de bikes com aro 29: ${aro29}`);

  console.log(`A bicicleta com o maior quadro: ${maiorQuadro}`);
}


principal(); // chama a função principal
// a minha variável principal é uma função
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
    // verificar se o código da novaFarmácia está no vetor
    // percorre o vetor vetFarmacias procurando por código já existente
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
    // ! é negação
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
    // percorre o vetor vetRemedios procurando pelo código
    // do remédio, e o nome do remédio
    let achou = false; // não encontrei o remédio
    for (let i = 0; i < vetRemedios.length; i++) {
      if (
        vetRemedios[i].codigoFarmacia == objVenda.codigo &&
        vetRemedios[i].nome == objVenda.nome
      ) {
        achou = true; // achei o remédio
        // vamos realizar a venda
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

