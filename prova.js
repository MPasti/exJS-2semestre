let prova = () => {
  let albums = [];
  let figurinhas = [];
  let opcao;
  do {
    opcao = Number(
      prompt(
        "Digite:\n1-Cadastrar álbum.\n2-Cadastrar figurinha.\n3-Comprar figurinha.\n4-Trocar figurinha.\n5-Calcular figurinhas para troca.\n6-Maior quantidade de figurinhas.\n7-Sair do programa"
      )
    );
    switch (opcao) {
      case 1:
        cadastrarAlbum(albums);
        break;
      case 2:
        cadastrarFigurinha(albums, figurinhas);
        break;
      case 3:
        comprarFigurinha(figurinhas);
        break;
      case 4:
        resultado(politicos);
        break;
      case 5:
        trocaFigurinhas(figurinhas);
        break;
      case 6:
        alert("Encerrando programa");
        break;
      case 7:
        alert("Encerrando programa");
        break;
      default:
        alert("Opção inválida");
    }
  } while (opcao != 7);
};

let cadastrarAlbum = (albums) => {
  let album = {
    id: Number(prompt("Informe o id do album: ")),
    nome: prompt("Informe o nome do album: "),
    empresa: prompt("Informe a empresa que produziu o album: "),
  };
  while (albums.some((e) => e.id === album.id)) {
    album.id = Number(prompt("Informe um id que não seja repetido: "));
  }
  while (
    albums.some((e) => e.nome.toUpperCase() === album.nome.toUpperCase())
  ) {
    album.nome = prompt(
      "Informe o nome de um album que já não tenha sido cadastrado"
    );
  }
  albums.push(album);
};

let cadastrarFigurinha = (albums, figurinhas) => {
  if (albums.length == 0) {
    alert("Não há albums cadastrados...");
  } else {
    let figurinha = {
      numero: Number(prompt("Informe o número")),
      nome: prompt("Informe o nome: "),
      time: prompt("Informe o time: "),
      quantidade: 0,
      id: Number(prompt("Entre o id do album")),
    };
    while (!albums.some((e) => e.id == figurinha.id)) {
      figurinha.id = Number(prompt("Informe o id de um album que exista!"));
    }
    figurinhas.push(figurinha);
  }
};

let comprarFigurinha = (figurinhas) => {
  if (figurinhas.length == 0) {
    alert("Não há figurinhas cadastradas...");
  } else {
    let nome = prompt("Informe o nome do candidato: ").toUpperCase();
    let id = Number(prompt("Informe o codigo do partido: "));
    let achouNome = figurinhas.includes(nome);
    let achouId = figurinhas.includes(id);
    while (achouNome) {
      nome = prompt("Nome não encontrado, por favor entre um nome cadastrado");
      achouNome = figurinhas.includes(nome);
    }
    while (achouId) {
      id = prompt("Id não encontrado, por favor entre um id cadastrado");
      achouId = figurinhas.includes(id);
    }
    let indexOfid = figurinhas.findIndex((item) => {
      return item.id === id;
    });
    let indexOf = figurinhas.findIndex((item) => {
      return item.nome === nome;
    });
    while (indexOf != indexOfid) {
      id = prompt("Entre um id que seja igual ao do album do jogador");
      indexOfid = figurinhas.findIndex((item) => {
        return item.id === id;
      });
    }
    figurinhas[indexOf].quantidade = figurinhas[indexOf].quantidade + 1;
    alert(
      "Figurinha comprada!\nAgora temos o total de: ",
      figurinhas[indexOf].quantidade
    );
  }
};

let resultado = (politicos) => {
  if (politicos.length == 0) {
    console.log("Não há politicos cadastrados.");
  } else {
    let candidato_mais_votdo = politicos[0].quantidade_de_votos;
    let partido_mais_votado = politicos[0].nome_politico;
    for (i = 0; i < politicos.length; i++) {
      if (politicos[i].quantidade_de_votos > candidato_mais_votdo) {
        candidato_mais_votdo = politicos[i];
        partido_mais_votado = politicos[i];
      }
    }
    alert(
      `O candidato com maior quantidade de votos foi: ${partido_mais_votado} com ${candidato_mais_votdo} votos.`
    );
  }
};

let trocaFigurinhas = (figurinhas) => {
  var filtrado = figurinhas.filter(function (obj) {
    return obj.quantidade > 0;
  });

  for (let index = 0; index < filtrado.length; index++) {
    console.log(
      "Figurinhas disponíveis para troca: ",
      filtrado[index].nome,
      " Quantidade: ",
      filtrado[index].quantidade
    );
  }
};

let maiorQuantidade = (figurinhas) => {
    
}
prova();
