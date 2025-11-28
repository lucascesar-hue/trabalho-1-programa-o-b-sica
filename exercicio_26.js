// Apresente na tela todos os números inteiros que são divisíveis por 4 e que são menores que 200.
for(let x=1; x<=200; x++) //laço que inicia a variavel x =1,(x++) aumenta x de 1 em 1 a cada interaçao, continua enquanto x <= 200
    {
        if (x % 4 === 0) console.log(x); //mostra no console se a condiçao for cumprida, (x % 4 === 0 verifica se o resto da divisão por 4 é zero)
    }