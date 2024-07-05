// Exercicio 01
let nome = 'Joao'
console.log(nome)

// Exercicio 02
let a =5, b = 10, soma
soma = a + b
console.log (soma)

// Exercicio 03
let primeironome = 'Josefa', segundonome = 'Silva'
console.log(primeironome, segundonome)

// Exercicio 04
let pessoa = {
    nome : 'Cleiton',
    idade : '18',
    endereço : 'Ararangua',
    telefone : 40028922,
}

// Exercicio 04b
let frutas = ['maçã', 'banana', 'laranja']
frutas.push('açaí')
console.log(frutas)

// Exercicio 05
let numeros = [1,2,3,4,5]
console.log(numeros[0],numeros[4])

// Exercicio 06
let cores = ['vermelho', 'verde', 'azul']
console.log(cores)
cores.loop

// Exercio 07
let idade = 18
if (idade < 18){
    console.log('menor')
}else{
    console.log('maior')
}

// Exercio 08
let nota = 8
if (nota >= 7){
    console.log('Aprovado')
}else if (nota > 5){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}

// Exercio 09
let diaDeSemana = 7

switch (diaDeSemana) {

    case 1: {
        console.log('Domingo');
    }
    break
    case 2: {
        console.log('Segunda');
    }
    break
    case 3: {
        console.log('Terça');
    }
    break
    case 4: {
        console.log('Quarta');
    }
    break
    case 5: {
        console.log('Quinta');
    }
    break
    case 6: {
        console.log('Sexta');
    }
    break
    case 7: {
        console.log('Sabado');
    }
}

// Exercicio 10
let vetor = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < 10; i++){
    console.log(vetor [i])
}

// Exercio 11
let contador = 1

while(contador <= 5) {
    console.log(contador)
    contador++
}

// Exercicio 12
let numero = 0
while(numero <= 30){
    console.log(numero)
    numero = numero + 2
}

// Exercicio 13
vetor = [10, 20, 30, 40, 50]
for (let i = 0; i < 5; i++){
    console.log(vetor [i])
}

// Exercicio 14
let numeross = [75,39,24,60,10]
let maior = 0
for (let i = 0; i < numeross.length; i++){
    if (numeross[i] > maior)
        {
            maior = numeross[i]
        }
}
console.log(maior);

// Exercicio 15
let numeros2 = [75,39,24,60,10]
let menor = 10
for (let i = 0; i > numeros2.length; i++){
    if (numeros2[i] > menor)
        {
            menor = numeross[i]
        }
}
console.log(menor);

// Exercicio 16
n = 10
let fatorial = 1
for (let i = 1; i<=n; i++){
    fatorial *= i
}
console.log(fatorial);

// Exercicio 17
n = 10
for (i=1; i<=n; i++){
    if(i % 2 == 0){
        console.log(i, ' é par ');
      } else {
    console.log(i, ' é impar ');
}
}

// Exercicio 18
let texto = "Fala pessoal do partido bolsonaro", fala = 0, vogais = ["a", "e", "i", "o",  "u"]
for (i=0; i < texto.length; i++) {
    if(vogais.includes(texto[i])){
        fala++
    }
}
console.log(fala)

// Exercicio 19
let textto = "Fortnite é o melhor jogo", resultado = ""
for(i = texto.length-1; i>0; i--){
    resultado += (texto[i])
}
console.log('Texto invertido: ', resultado);