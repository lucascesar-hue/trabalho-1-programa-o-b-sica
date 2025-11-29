const nome = await pergunta("Digite seu nome: ");
const sexo = await pergunta("Digite seu sexo (F/M): ");
const idade = Number(await pergunta("Digite sua idade: "));

// Validação básica
if (isNaN(idade)) {
    console.log("Idade inválida. Tente novamente.");
    process.exit();
}

// Normaliza o sexo
const sexoNormalizado = sexo.toUpperCase();

// Regra do exercício
if (sexoNormalizado === "F" && idade < 25) {
    console.log(`${nome} ACEITA`);
} else {
    console.log("NÃO ACEITA");
}