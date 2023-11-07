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

function exe12() {}
