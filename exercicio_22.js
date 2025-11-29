
import { input } from '@inquirer/prompts'
//Solicita ao usuário que digite um número
let num = await input({ message: "Digite um número:" })
//Converte a entrada (string) para número decimal
let numero = parseFloat(num);
//Verifica se o número é positivo ou zero
if (numero >= 0) {
    //Calcula a raiz quadrada se o número for positivo
    let raiz = Math.sqrt(numero);
    console.log(`A raiz quadrada de ${numero} é ${raiz}`)
} else {
    //Calcula o quadrado se o número for negativo
    let quadrado = numero ** 2 
    console.log(`O quadrado de ${numero} é ${quadrado}`)
}
