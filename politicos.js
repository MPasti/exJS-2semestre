function cadastrarPartido(partidos) {
  const codigo = Number(prompt("Informe o código do partido"));
  const nome = prompt("Informe o nome do partido");
  const sigla = prompt("Informe a sigla do partido").toUpperCase();
  const presidente = prompt("Informe o nome do presidente do partido");
  const numeroPoliticos = Number(
    prompt("Informe o número de políticos do partido")
  );

  const partidoExiste = partidos.find((partido) => partido.codigo === codigo);
  if (partidoExiste) {
    alert("Já existe um partido com este código.");
    return;
  }

  partidos.push({
    codigo,
    nome,
    sigla,
    presidente,
    numeroPoliticos,
  });

  alert("Partido cadastrado com sucesso!");
}

function cadastrarPolitico(partidos, candidatos) {
  const codigoPartido = Number(
    prompt("Informe o código do partido do político")
  );
  const partido = partidos.find((partido) => partido.codigo === codigoPartido);

  if (!partido) {
    alert(`Partido não cadastrado`);
    return;
  }

  const nome = prompt("Informe o nome do político");
  const qtdeVotos = 0;
  const cargo = prompt("Informe o cargo do político");

  candidatos.push({
    codigoPartido,
    nome,
    qtdeVotos,
    cargo,
  });

  alert("Político cadastrado");
}

function realizarVotacao(candidatos) {
  for (let i = 0; i < 10; i++) {
    const codigoPolitico = Number(
      prompt("Informe o código do político que deseja votar")
    );
    const politico = candidatos.find(
      (candidato) => candidato.codigoPartido === codigoPolitico
    );

    if (!politico) {
      alert("Político não encontrado. Voto inválido.");
      continue;
    }

    politico.qtdeVotos++;
    alert("Voto registrado com sucesso!");
  }
}

function encontrarPoliticoMaisVotado(candidatos) {
  let politicoMaisVotado = candidatos[0];
  for (const politico of candidatos) {
    if (politico.qtdeVotos > politicoMaisVotado.qtdeVotos) {
      politicoMaisVotado = politico;
    }
  }
  return politicoMaisVotado;
}

function ex04() {
  const partidos = [];
  const candidatos = [];

  do {
    const opcao = Number(
      prompt(
        `Digite:
          \n 1. Para cadastrar um partido
          \n 2. Para cadastrar um político
          \n 3. Para realizar a votação
          \n 4. Para sair`
      )
    );

    switch (opcao) {
      case 1:
        cadastrarPartido(partidos);
        break;
      case 2:
        cadastrarPolitico(partidos, candidatos);
        break;
      case 3:
        realizarVotacao(candidatos);
        break;
      case 4:
        break;
      default:
        alert("Opção inválida");
    }
  } while (opcao !== 4);

  const politicoMaisVotado = encontrarPoliticoMaisVotado(candidatos);

  console.log(
    `Candidato mais votado: ${politicoMaisVotado.nome}
    \nSeu partido: ${politicoMaisVotado.codigoPartido}
    \nCom a quantidade de ${politicoMaisVotado.qtdeVotos} votos`
  );
}

ex04();
