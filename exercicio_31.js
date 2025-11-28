import { input, number } from '@inquirer/prompts'
let valor; // inicia a Variável para guardar o valor digitado pelo usuario

// Loop infinito para continuar pedindo até que a entrada seja válida
while (true) {

    // Solicita que o usuário digite um número
    valor = await number({ message: 'Digite um número entre 1 e 4:' })

    // Verifica se o número está dentro da faixa válida
    if (valor >= 1 && valor <= 4) { //&& garante que todas as condições precisam ser verdadeiras para o bloco if ser executado
        //se o Número for válido, encerra do loop
        break;
    } else {
        // Número inválido, exibe mensagem e continua pedindo
        console.log("Entrada inválida")
    }
}

// Exibe o número digitado corretamente no terminal
console.log(`Número digitado corretamente: ${valor}`)