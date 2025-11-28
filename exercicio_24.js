// 24.Intervalo e Quadrados: Apresente na tela o quadrado de todos os números inteiros que estão no intervalo de 15 até 200.
for(let x=15; x<=200; x++) //laço que inicia a variavel x =15,(x++) aumenta x de 1 em 1 a cada interaçao, continua enquanto x <= 200
    {
        const K = x*x; //inicia a constante k que calcula o quadrado do número atual x
        console.log(`${x}² = ${K}`) // mostra no console o valor das variaveis, (${aqui dentro td será avaliado como código JavaScript})
    }
