const exe01 = () =>{
    let input = prompt("Entre uma string")
    let splitado = input.split("")
    let i = 0
    splitado.forEach(item => {
        i++
    })
    console.log(`Comprimento: ${i}`)
}

const exe02 = () =>{
    let input = prompt("Entre uma string").toLowerCase()
    let splitado = input.split("")

    if(splitado[0] === "a"){
        console.log(`O nome é ${input}`)
    } else {
        console.log("Não começa com 'a'")
    }
}

const exe03 = () =>{
    let input = prompt("Entre uma string")
    let splitado = input.split("")

    console.log(splitado[0], splitado[1], splitado[2], splitado[3])
}

function exe04(){
    let input = prompt("Entre uma string")
    let splitado = input.split(" ")
    let somado = ""
    splitado.forEach(e =>{
        somado = somado + e
    })
    console.log(somado.length)
}
function exe05(){
    let nome = prompt("Entre o nome")
    let sexo = prompt("Entre o sexo").toLowerCase()
    let idade = parseInt(prompt("Entre a idade"))

    sexo === "feminino" && idade < 25 ? alert("ACEITA") : alert("NÃO ACEITA")
    
}
function exe06(){
    let input = prompt("Entre uma string").toLowerCase()
    let input2 = prompt("Entre uma string").toLowerCase()

    input === input2 ? console.log("São iguais") : console.log("Não iguais")
}

function exe07(){
    let input = prompt("Entre um número inteiro")
    let splitado = input.split("1")
    let somado = ""
    splitado.forEach(e =>{
        somado = somado + e
    })
    let tamanho = input.length
    let tamanho2 = somado.length
    
    console.log("quantidade de 1 na string é de", tamanho - tamanho2)
}
