const exe01 = () => {
  let input = prompt('Entre uma string');
  let splitado = input.split('');
  let i = 0;
  splitado.forEach((item) => {
    i++;
  });
  console.log(`Comprimento: ${i}`);
};

const exe02 = () => {
  let input = prompt('Entre uma string').toLowerCase();
  let splitado = input.split('');

  if (splitado[0] === 'a') {
    console.log(`O nome é ${input}`);
  } else {
    console.log("Não começa com 'a'");
  }
};

const exe03 = () => {
  let input = prompt('Entre uma string');
  let splitado = input.split('');

  console.log(splitado[0], splitado[1], splitado[2], splitado[3]);
};

function exe04() {
  let input = prompt('Entre uma string');
  let splitado = input.split(' ');
  let somado = '';
  splitado.forEach((e) => {
    somado = somado + e;
  });
  console.log(somado.length);
}
function exe05() {
  let nome = prompt('Entre o nome');
  let sexo = prompt('Entre o sexo').toLowerCase();
  let idade = parseInt(prompt('Entre a idade'));

  sexo === 'feminino' && idade < 25 ? alert('ACEITA') : alert('NÃO ACEITA');
}
function exe06() {
  let input = prompt('Entre uma string').toLowerCase();
  let input2 = prompt('Entre uma string').toLowerCase();

  input === input2 ? console.log('São iguais') : console.log('Não iguais');
}

function exe07() {
  let input = prompt('Entre um valor');
  let splitado = input.split('1');
  let somado = '';
  splitado.forEach((e) => {
    somado = somado + e;
  });
  let tamanho = input.length;
  let tamanho2 = somado.length;

  console.log('quantidade de 1 na string é de', tamanho - tamanho2);
}

function exe08() {
  let input = prompt('Entre um número');
  let splitado = input.split('');
  let valor = '';
  for (let i = 0; i < splitado.length; i++) {
    if (splitado[i] === '0') {
      valor = valor + '1';
    } else {
      valor = valor + splitado[i];
    }
  }
  console.log(valor);
}
function exe09() {
  let input = prompt('Entre um valor');
  let splitado = input.split('');
  let valor = '';
  for (let i = splitado.length - 1; i > -1; i--) {
    valor = valor + splitado[i];
  }
  console.log(valor);
}

function exe092() {
  let input = prompt('Entre um valor');
  let splitado = input.split('');
  let reverter = splitado.reverse();
  let juntado = reverter.join('');
  console.log(juntado);
}
(function exe10() {
  let input = prompt('Entre um valor');
  let teste = input
    .replace(/a/g, '')
    .replace(/e/g, '')
    .replace(/i/g, '')
    .replace(/o/g, '')
    .replace(/u/g, '');
  console.log(teste);
})();

const exe11 = () => {
  let input = prompt('Entre um valor');
  let x = 0;
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === 'a' ||
      input[i] === 'e' ||
      input[i] === 'i' ||
      input[i] === 'o' ||
      input[i] === 'u'
    ) {
      x++;
    }
  }
  console.log(`Esta string possui ${x} vogais`);
  let input2 = prompt('Entre uma letra para substituir as vogais');
  let teste = input
    .replace(/a/g, input2)
    .replace(/e/g, input2)
    .replace(/i/g, input2)
    .replace(/o/g, input2)
    .replace(/u/g, input2);
  console.log(teste);
};

function ex12() {
  let str = prompt('Entre com uma frase');
  let str2 = str.split(' ');
  let resposta = str2.length;
  console.log(resposta - 1);
}

function ex13() {
  let vetor = ['t', 'e', 's', 't', 'e', ' ', 'e', 's', 'p', 'a', 'ç', 'o'];

  function removerEspacos(frase) {
    let vetorSemEspacos = frase.filter((letra) => letra !== ' ');
    return vetorSemEspacos;
  }
  let resultado = removerEspacos(vetor);
  console.log(resultado);
}

function ex14() {
  str = prompt('Insira um caractere');
  l1 = prompt('Insira a letra que será substituida');
  l2 = prompt('Insira a letra que a substituirá');
  novaStr = str.replaceAll(l1, l2);
  console.log(novaStr);
}

function exe15() {
  let pessoas = [];
  let nome, idade;

  for (let i = 0; i < 10; i++) {
    nome = prompt(`Entre com o nome da ${i + 1}° pessoa`);
    idade = parseInt(prompt(`Entre com a idade da ${i + 1}° pessoa`));
    if (idade < 0) {
      break;
    }
    pessoas.push({ nome, idade });
  }

  if (pessoas.length > 0) {
    let maisJovem = pessoas.reduce((pessoaAtual, pessoaSeguinte) => {
      return pessoaAtual.idade < pessoaSeguinte.idade
        ? pessoaAtual
        : pessoaSeguinte;
    });

    let maisVelha = pessoas.reduce((pessoaAtual, pessoaSeguinte) => {
      return pessoaAtual.idade > pessoaSeguinte.idade
        ? pessoaAtual
        : pessoaSeguinte;
    });

    console.log(
      `A pessoa mais jovem é ${maisJovem.nome}, com ${maisJovem.idade} anos.`
    );
    console.log(
      `A pessoa mais velha é ${maisVelha.nome}, com ${maisVelha.idade} anos.`
    );
  } else {
    console.log('Nenhuma pessoa inserida.');
  }
}

function exe16() {
  let frase1 = prompt('Digite a primeira frase:');
  let frase2 = prompt('Digite a segunda frase:');

  let frase1Invertida = frase1
    .split('')
    .reverse()
    .map((letra) => (letra === 'A' ? '*' : letra))
    .join('');

  let frase2Invertida = frase2
    .split('')
    .reverse()
    .map((letra) => (letra === 'A' ? '*' : letra))
    .join('');

  console.log(`Resultado da primeira frase: ${frase1Invertida}`);
  console.log(`Resultado da segunda frase: ${frase2Invertida}`);
}

function exe17() {
  let caractere = prompt('Entre com um caractere:');
  let i = parseInt(prompt('Entre com o primeiro corte:'));
  let j = ParseInt(prompt('Entre com o segundo corte:'));

  if (i < 0 || j < 0 || j >= caractere.length || i > j) {
    console.log('Índices inválidos.');
    return;
  }

  let segmento = caractere.substring(i, j + 1);

  console.log(`O segmento S[${i}..${j}] é: ${segmento}`);
}

function exe18() {
  let caractere = prompt('Entre com um caractere:');
  let c = parseInt(prompt('Entre a letra:'));
  let posicao = ParseInt(prompt('Entre com a posição:'));

  if (posicao < 0 || posicao >= caractere.length) {
    console.log('Posição inicial inválida.');
    return;
  }

  for (let i = posicao; i < caractere.length; i++) {
    if (caractere[i] === c) {
      console.log(`O caractere ${c} foi encontrado na posição ${i}.`);
      return;
    }
  }

  console.log(
    `O caractere ${c} não foi encontrado a partir da posição ${posicao}.`
  );
}
