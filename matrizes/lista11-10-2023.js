let principal = () => {

    do {
        opcao = Number(
          prompt(
            "Digite:\n1-Rodar Exercicio 1.\n2-Rodar Exercicio 2.\n3-Rodar Exercicio 3.\n4-Rodar Exercicio 4.\n5-Rodar Exercicio 5.\n6-Sair do programa"
          )
        );
        switch (opcao) {
          case 1:
            exe01();
            break;
          case 2:
            exe01();
            break;
          case 3:
            exe01();
            break;
          case 4:
            exe01();
            break;
          case 5:
            exe01();
            break;
          case 6:
            alert("Encerrando programa");
            break;
          default:
            alert("Opção inválida");
        }
      } while (opcao != 6);
}


function exe01(){
    let matriz = []
    leitura_matriz(matriz)
    calculo_matriz(matriz)
}

let leitura_matriz = (matriz) => {
    for(i=0;i<3;i++){
        matriz[i] = []
        for(j=0;j<5;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
    alert(matriz)
}

let calculo_matriz = (matriz) => {
    let qntd = 0
    for(i=0;i<3;i++){
        for(j=0;j<5;j++){
            if(matriz[i][j] > 15 && matriz[i][j] < 20){
                qntd++
            }
        }
    }
    alert(qntd)
}


function exe02(){
    let matriz = []
    leitura_matriz2(matriz)
    calculo_matriz2(matriz)
    media_matriz2(matriz)
}

let leitura_matriz2 = (matriz) => {
    for(i=0;i<2;i++){
        matriz[i] = []
        for(j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
    alert(matriz)
}

let calculo_matriz2 = (matriz) => {
    let vet = []
    for(i=0;i<2;i++){
        let qntd = 0
        for(j=0;j<4;j++){
            if(matriz[i][j] > 12 && matriz[i][j] < 20){
               qntd++
            }
        }
        vet.push(qntd)
    }
    alert(vet)
}

let media_matriz2 = (matriz) => {
    let media = 0
    let qntd = 0
    for(i=0;i<2;i++){
        for(j=0;j<4;j++){
            if(matriz[i][j] % 2 == 0){
                media = media + matriz[i][j]
                qntd++
            }
        }
    }

    if(qntd != 0){
        media = media/qntd
        alert(media)
    }
    else{
        media = 0
        alert(media)
    }
}


function exe03(){
    let matriz = []
    leitura_matriz3(matriz)
    maior_matriz3(matriz)
    menor_matriz3(matriz)
}

let leitura_matriz3 = (matriz) => {
    for(i=0;i<6;i++){
        matriz[i] = []
        for(j=0;j<3;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
    alert(matriz)
}

let maior_matriz3 = (matriz) => {
    let maior = matriz[0][0]
    let indice1 
    let indice2
    for(i=0;i<6;i++){
        for(j=0;j<3;j++){
            if(maior < matriz[i][j]){
                maior = matriz[i][j]
                indice1 = i
                indice2 = j
            }
        }
    }
    alert(`Maior valor = ${maior} nos índices i = ${indice1}, j = ${indice2}`)
}

let menor_matriz3 = (matriz) => {
    menor = matriz[0][0]
    let indice1 
    let indice2
    for(i=0;i<6;i++){
        for(j=0;j<3;j++){
            if(menor > matriz[i][j]){
                menor = matriz[i][j]
                indice1 = i
                indice2 = j
            }
        }
    }
    alert(`Menor valor = ${menor} nos índices i = ${indice1}, j = ${indice2}`)
}

function exe04(){
    let matriz = []
    let notas = []
    let vetor = []
    leitura_matriz4(matriz)
    leitura_vetor4(vetor)
    calculos4(matriz, notas)
    media4(notas)
    resultados4(vetor, notas)
}

let leitura_matriz4 = (matriz) => {
    for(i=0;i<15;i++){
        matriz[i] = []
        for(j=0;j<5;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]: `))
        }
    }
}

let leitura_vetor4 = (vetor) => {
    for(i=0;i<15;i++){
        vetor[i] = prompt(`Informe o valor do vetor ${i}: `)
    }
}

let calculos4 = (matriz, notas) => {
    for(i=0;i<15;i++){
        let soma = 0
        for(j=0;j<5;j++){
            soma = soma + matriz[i][j]
        }
        soma = soma / 5
        notas.push(soma)
    }
    alert(notas)
}

let resultados4 = (vetor, notas) => {
    for(i=0;i<15;i++){
        let situacao = ''
        alert(`Aluno ${i+1}:\nNome: ${vetor[i]}\nNota: ${notas[i]}`)
        if(notas[i]>6){
            situacao = 'Aprovado'
        }
        else{
            situacao = 'Reprovado'
        }
        alert(`Situação: ${situacao}`)
    }
}

let media4 = (notas) => {
    let m = 0
    for(i=0;i<15;i++){
        m = m + notas[i]
    }
    m = m / 15
    alert(`Média da turma = ${m}`)
}

function exe05() {
    const matrizVendas = preencherMatrizVendas();
    calcularTotalPorMes5(matrizVendas);
    calcularTotalPorSemana5(matrizVendas);
    calcularTotalAnual5(matrizVendas);
}

function preencherMatrizVendas() {
    let matriz = new Array(12);

    for (let i = 0; i < 12; i++) {
        matriz[i] = new Array(4);
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Number(prompt(`Informe o valor de vendas para o mês ${i + 1}, semana ${j + 1}: `));
        }
    }

    return matriz;
}

function calcularTotalPorMes5(matriz) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    for (let i = 0; i < 12; i++) {
        let totalMes = 0;
        for (let j = 0; j < 4; j++) {
            totalMes += matriz[i][j];
        }
        alert(`Total de vendas em ${meses[i]}: R$${totalMes}`);
    }
}

function calcularTotalPorSemana5(matriz) {
    for (let j = 0; j < 4; j++) {
        let totalSemana = 0;
        for (let i = 0; i < 12; i++) {
            totalSemana += matriz[i][j];
        }
        alert(`Total de vendas na semana ${j + 1}: R$${totalSemana}`);
    }
}

function calcularTotalAnual5(matriz) {
    let totalAno = 0;
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 4; j++) {
            totalAno += matriz[i][j];
        }
    }
    alert(`Total de vendas no ano: R$${totalAno}`);
}

principal();
