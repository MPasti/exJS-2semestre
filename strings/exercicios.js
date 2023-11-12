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
function exe10() {
  let input = prompt('Entre um valor');
  let teste = input
    .replace(/a/g, '')
    .replace(/e/g, '')
    .replace(/i/g, '')
    .replace(/o/g, '')
    .replace(/u/g, '');
  console.log(teste);
}

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

function exe12() {
  let str = prompt('Entre com uma frase');
  let str2 = str.split(' ');
  let resposta = str2.length;
  console.log(resposta - 1);
}

function exe13() {
  str = prompt('Insira um caractere');
  let vetor = str.split('');

  let vetorSemEspacos = vetor.filter((letra) => letra !== ' ');

  console.log(vetorSemEspacos);
}

function exe14() {
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
      `A pessoa mais jovem é ${maisJovem.nome}, e tem ${maisJovem.idade} anos`
    );
    console.log(
      `A pessoa mais velha é ${maisVelha.nome}, e tem ${maisVelha.idade} anos`
    );
  } else {
    console.log('Nenhuma pessoa inserida');
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
    console.log('Índices inválidos');
    return;
  }

  let segmento = caractere.substring(i, j + 1);

  console.log(`O segmento S[${i}..${j}] é: ${segmento}`);
}

function exe18() {
  let caractere = prompt('Entre com um caractere:');
  let c = parseInt(prompt('Entre com a letra:'));
  let posicao = parseInt(prompt('Entre com a posição:'));

  if (posicao < 0 || posicao >= caractere.length) {
    console.log('Posição inicial inválida');
  } else {
    let encontrado = false;

    for (let i = posicao; i < caractere.length; i++) {
      if (caractere[i] === c) {
        console.log(`O caractere ${c} foi encontrado na posição ${i}`);
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      console.log(
        `O caractere ${c} não foi encontrado a partir da posição ${posicao}`
      );
    }
  }
}

function exe19() {
  let p1 = prompt('Entre com a primeira palavra:');
  let p2 = prompt('Entre com a segunda palavra:');

  if (p1.toLowerCase() < p2.toLowerCase()) {
    console.log(`'${p1}' vem antes de '${p2}' na ordem alfabética`);
  } else if (p1.toLowerCase() > p2.toLowerCase()) {
    console.log(`'${p2}' vem antes de '${p1}' na ordem alfabética`);
  } else {
    console.log(`'${p1}' e '${p2}' são iguais`);
  }
}

function exe20() {
  let textoOriginal = prompt('Entre com uma frase:');
  let textoCodificado = '';
  for (let i = 0; i < textoOriginal.length; i++) {
    let charAtual = textoOriginal[i];
    if (charAtual.match(/[A-Z]/)) {
      let codigoAscii = charAtual.charCodeAt(0);
      let codigoAsciiCodificado = ((codigoAscii - 65 + 3) % 26) + 65;
      let charCodificado = String.fromCharCode(codigoAsciiCodificado);
      textoCodificado += charCodificado;
    } else if (charAtual.match(/[a-z]/)) {
      let codigoAscii = charAtual.charCodeAt(0);
      let codigoAsciiCodificado = ((codigoAscii - 97 + 3) % 26) + 97;
      let charCodificado = String.fromCharCode(codigoAsciiCodificado);
      textoCodificado += charCodificado;
    } else {
      textoCodificado += charAtual;
    }
  }

  console.log(`Texto Original: ${textoOriginal}`);
  console.log(`Texto Codificado: ${textoCodificado}`);
}

function exe21() {
  let valor = prompt('Entre com o primeiro caractere:');
  let valor2 = toLowerCase();
  let invertido = valor2.split('').reverse().join('');

  if (valor2 === invertido) {
    console.log(`${valor} é um palíndromo!`);
  } else {
    console.log(`${valor} não é um palíndromo`);
  }
}

function exe22() {
  let valor = prompt('Entre com a primeira string:');
  let valor2 = prompt('Entre com a segunda string:');

  let resultado = valor.endsWith(valor2);

  if (resultado) {
    console.log('A segunda string está contida no final da primeira');
  } else {
    console.log('A segunda string não está contida no final da primeira');
  }
}

function exe23() {
  let str1 = prompt('Entre com o primeiro caractere:');
  let str2 = prompt('Entre com o segundo caractere:');
  let N = parseInt(prompt('Entre com um valor inteiro:'));

  while (N <= 0) {
    N = parseInt(prompt('Entre com um valor inteiro:'));
  }

  str1 = str1.concat(str2.substring(0, N));

  str1 = str1.concat('\0');

  console.log(`Resultado: ${str1}`);
}

function exe24() {
  let cadeiaA = prompt('Entre com a cadeia A:');
  let cadeiaB = prompt('Entre com a cadeia B:');

  let contador = 0;
  let indice = cadeiaB.indexOf(cadeiaA);

  while (indice !== -1) {
    contador++;
    indice = cadeiaB.indexOf(cadeiaA, indice + 1);
  }
  console.log(
    `A cadeia "${cadeiaA}" ocorre ${contador} vezes na cadeia "${cadeiaB}".`
  );
}

function exe25() {
  let data = prompt('Entre com uma data no formato "DD/MM/AAAA":');

  const padraoFormato = /^\d{2}\/\d{2}\/\d{4}$/;
  while (!padraoFormato.test(data)) {
    data = prompt('Formato inválido. Utilize o formato "DD/MM/AAAA".');
  }

  const partes = data.split('/');
  const dia = parseInt(partes[0]);
  const mes = parseInt(partes[1]);
  const ano = parseInt(partes[2]);

  while (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    data = prompt('Entre com uma data no formato "DD/MM/AAAA":');
  }

  let dataFormatada = { dia, mes, ano };

  if (dataFormatada) {
    console.log('Data Formatada:');
    console.log(`Dia: ${dataFormatada.dia}`);
    console.log(`Mês: ${dataFormatada.mes}`);
    console.log(`Ano: ${dataFormatada.ano}`);
  }
}
