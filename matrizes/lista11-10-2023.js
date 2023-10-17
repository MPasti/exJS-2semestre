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
    console.log(matriz)
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
    console.log(qntd)
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
    console.log(matriz)
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
    console.log(vet)
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
        console.log(media)
    }
    else{
        media = 0
        console.log(media)
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
    console.log(matriz)
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
    console.log(`Maior valor = ${maior} nos índices i = ${indice1}, j = ${indice2}`)
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
    console.log(`Menor valor = ${menor} nos índices i = ${indice1}, j = ${indice2}`)
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
    console.log(notas)
}

let resultados4 = (vetor, notas) => {
    for(i=0;i<15;i++){
        let situacao = ''
        console.log(`Aluno ${i+1}:\nNome: ${vetor[i]}\nNota: ${notas[i]}`)
        if(notas[i]>6){
            situacao = 'Aprovado'
        }
        else{
            situacao = 'Reprovado'
        }
        console.log(`Situação: ${situacao}`)
    }
}

let media4 = (notas) => {
    let m = 0
    for(i=0;i<15;i++){
        m = m + notas[i]
    }
    m = m / 15
    console.log(`Média da turma = ${m}`)
}
