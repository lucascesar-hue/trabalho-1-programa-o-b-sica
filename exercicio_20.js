
import { input, number } from '@inquirer/prompts'
// Solicita ao usuário que digite a temperatura em Celsius
let celsius = await input ({ message: 'Digite a temperatura em graus Celsius' });
// Converte a entrada do usuário que é uma string para um número decimal
celsius = parseFloat(celsius)
//  Calcula a temperatura em Fahrenheit com a fórmula F = C × 1.8 + 32
let fahrenheit = celsius * 1.8 + 32
// Exibe o resultado no console,tanto a temperatura em Celsius quanto em Fahrenheit
console.log(celsius + "°C correspondem a " + fahrenheit + "°F")
