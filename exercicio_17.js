import { input, number } from '@inquirer/prompts'


let valor // declara a variavel 

while (true) { //inicia um loop infinito ate o usuario digitar um valor valido
    // pede um numero para o usuario, le como string
    let texto = await input({ message: 'Digite um valor numérico:' })

    // Converte a string para número 
    valor = parseFloat(texto)

    // Verifica se é número válido, Se digitar: abc mostra erro e pergunta de novo
    if (!isNaN(valor)) { //!isNaN em é usado para verificar se um valor é um número válido, retorna true se n for numero e false se for um numero
        break; // se válido sai do loop
    } else {
        console.log("Digite um número válido.")
    }
}

// Calcula reajuste
let reajuste = valor * 1.10// equivalente a valor + (valor * 0.10)
// mostra no terminal o valor original e reajustado
console.log(`Valor original: ${valor}`)
console.log(`Valor com reajuste de 10%: ${reajuste}`)