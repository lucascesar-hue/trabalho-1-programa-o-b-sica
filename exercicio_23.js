
import { number } from '@inquirer/prompts';

// Solicita ao usuário que digite um número inteiro
let numero = await number({ message: "Digite um número inteiro:" })

//Verifica se o número é maior, igual ou menor que 20
if (numero > 20) {
    console.log(`O número ${numero} é maior que 20.`);
} else if (numero === 20) {
    console.log(`O número ${numero} é igual a 20.`);
} else {
    console.log(`O número ${numero} é menor que 20.`);
}
