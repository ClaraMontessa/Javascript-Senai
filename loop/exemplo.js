// For - loop contado

// for (inicializador; condição; contador)

// for (let num = 0; num <= 10; num++) {
//     console.log("Eu vim barganhar" + num)
// }


// let salario = 1000
// while (salario < 5000) {
//     // salario = 100 + salario
//     salario += 100

//     console.log("O salário é de R$: " + salario)
// }

// // Do While - condicional
// let aumento = 1000

// do {

//     console.log("Esse é o seu saldo: " + aumento)
//     aumento += 100

// } while (aumento < 5000)

//Array

let panacas = ["Ana Paula", "LZ", "Machado", "Emilly", "Sol", "Murilo"]

// console.log(fruta[3])
// console.log(fruta[5])

//ForEach => percorre uma lista

// panacas.forEach(bandana => {
//     console.log(" A pessoa de hoje é: " + bandana)
// })

// Percorrer uma lista com for
for (let indice = 0; indice < panacas.length; indice++) {
    console.log(panacas[indice])

    if (panacas[indice] == "Murilo") {
        console.log("Eu gosto de " + panacas[indice])
    }
}
