const salarioBruto = Number(await pergunta("Informe o Salário Bruto: "));
const valorPrestacao = Number(await pergunta("Informe o valor da Prestação: "));

// Validação de entrada
if (isNaN(salarioBruto) || isNaN(valorPrestacao) || salarioBruto <= 0 || valorPrestacao < 0) {
    console.log("Valores inválidos! Por favor, insira números válidos.");
    process.exit();
}

// Cálculo do limite
const limite = salarioBruto * 0.20;

// Condicional
if (valorPrestacao > limite) {
    console.log("Empréstimo não pode ser concedido");
} else {
    console.log("Empréstimo pode ser concedido");
}