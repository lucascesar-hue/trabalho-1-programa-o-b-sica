import { input, number } from '@inquirer/prompts';//Importa a função "input" da biblioteca @inquirer/prompts,
let resposta = await number({ message: 'digite valores positivos para continuar e negativos para sair' }); // O input retorna string, e Number para converter para número. declara a variavel resposta que recebe os valores digitados
// Verifica se o primeiro número digitado é negativo.
if(resposta<0){ 
// Se for, nenhum número positivo foi informado 
    console.log(`nenhum valor positivo foi digitado`) // Exibe mensagem no terminal e encerra
// Se o primeiro número é positivo
}else{
    //declara variavel maior e menor
    let maior = resposta
    let menor = resposta
     // inicia um Loop infinito só vai parar quando o usuário digitar número negativo
    while(true){resposta = await number({ message: 'digite valores positivos para continuar e negativos para sair' }) // Lê o próximo número do usuário e converte para Number
    if(resposta <0)break;// Se o usuário digitar um número negativo, encerramos
    if(resposta >maior) maior= resposta  // Atualiza o maior valor, caso o número atual seja maior do que o já registrado
    if(resposta <menor) menor= resposta  // Atualiza o menor valor, caso o número atual seja menor do que o já registrado

}
console.log(`maior:${maior}\nmenor:${menor}`) // Exibe mensagem no terminal o maior e o menor número fornecidos.
}
