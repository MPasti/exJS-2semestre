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


function farmacia(){
        let farmacias = [] // declara vetor
        for(let i=0;i<3;i++){
            let objeto = {
                codigo: Number(prompt(`Informe cÃ³digo`)),
                nome: prompt(`Informe nome`),
                endereco: prompt(`Informe endereÃ§o`),
            }
            // verifica se o cÃ³digo jÃ¡ existe
            let achou = false // ainda nÃ£o encontramos farmÃ¡cia com o cÃ³digo
            for(let j=0;j<farmacias.length;j++){
                if (objeto.codigo == farmacias[j].codigo){
                    achou = true // encontrei
                    break // pÃ¡ra de procurar
                }
            }
            if (!achou) {  // nÃ£o achou
                farmacias.push(objeto) // insere no vetor
            }
            else {
                alert(`JÃ¡ existe farmÃ¡cia com este cÃ³digo. Tente novamente`)
                i-- // nÃ£o conta a tentativa com falha
            }
        }
        // cria vetor de remedios
        let remedios = []
        for(let i=0;i<3; i++){
            let objeto = {
                codigoFarmacia: Number(prompt(`CÃ³digo da farmÃ¡cia`)),
                nome: prompt('Nome do remÃ©dio'),
                qtde: Number(prompt('Qtde do remÃ©dio')),
                preco: Number(prompt('PreÃ§o do remÃ©dio'))
            }
            // procura se a farmÃ¡cia existe
            let achou = false
            for(let j=0; j<farmacias.length;j++){
                if (objeto.codigoFarmacia == farmacias[j].codigo){
                    achou = true
                    break
                }
            }
            if (achou){
                remedios.push(objeto)
            }
            else {
                alert('FarmÃ¡cia nÃ£o existe')
                i--
            }
            
        }
        // realiza compras
        for(let i=0;i<3;i++){
            let compra = {
                codigoFarmacia: Number(prompt(`CÃ³digo da farmÃ¡cia para compra`)),
                nome: prompt('Nome do remÃ©dio para compra' ),
                qtde: Number(prompt('Qtde do remÃ©dio para compra')),
            }
            // verifica se o remÃ©dio existe
            let achou = false
            for(let j=0;j<remedios.length;j++){
                if ((compra.codigoFarmacia == remedios[j].codigoFarmacia) && 
                    (compra.nome == remedios[j].nome)){ // remÃ©dio e farmÃ¡cia OK
                      if (compra.qtde <= remedios[j].qtde){ // estoque suficiente
                            remedios[j].qtde = remedios[j].qtde - compra.qtde
                            alert('Compra com sucesso')
                            achou = true
                            break
                      }      
                      else {
                        alert('Estoque insuficiente')
                        i--
                      }
                }
            }    
            if (!achou){
                alert('RemÃ©dio ou farmÃ¡cia nÃ£o existe')
                i--
            }   
        }
    
    
}
