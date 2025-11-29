
import { number } from '@inquirer/prompts'
// Solicita que o usuário digite um número inteiro
let n = await number({ message: 'Digite um número inteiro:' })
//declara as variaveis e Calcula o antecessor e o sucessor
let antecessor = n - 1// número anterior
let sucessor = n + 1 // número seguinte
// Exibe os resultados no terminal
console.log(`Número digitado: ${n}`)
console.log(`Antecessor: ${antecessor}`)
console.log(`Sucessor: ${sucessor}`)