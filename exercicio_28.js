import { input, number } from '@inquirer/prompts';//Importa a função "input" da biblioteca @inquirer/prompts,
let resposta = await number({ message: 'digite valores positivos para continuar e negativos para sair' }); // O input retorna string, e Number para converter para número. declara a variavel resposta que recebe os valores digitados
// Verifica se o primeiro número digitado é negativo.
if(resposta<0){ 
// Se for, nenhum número positivo foi informado 
    console.log(`nenhum valor positivo foi digitado`) // Exibe mensagem no terminal e encerra
// Se o primeiro número é positivo
}else{
    let soma = resposta
    let contador= 1

while (true) { // inicia um Loop infinito só vai parar quando o usuário digitar número negativo

        // le o proximo numero número
        resposta = Number(await input({
            message: 'Digite valores positivos para continuar e negativos para sair:'
        }))

        // encerra o loop se for negativo
        if (resposta < 0) break

        // Atualiza a veriavel soma e contador
        soma += resposta
        contador++
    }

    // Calcula a média soma total/quantidade
    let media = soma / contador

    // Mostra os resultados no terminal
    console.log(`Somatório: ${soma}`)
    console.log(`Quantidade de valores: ${contador}`)
    console.log(`Média: ${media}`)}