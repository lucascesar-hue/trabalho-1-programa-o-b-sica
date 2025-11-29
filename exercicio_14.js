const tipoCarro = (await pergunta("Tipo de carro (A, B ou C): ")).toUpperCase();
const km = Number(await pergunta("Percurso em Km: "));

// Validação da distância
if (isNaN(km) || km <= 0) {
    console.log("Distância inválida! Tente novamente.");
    process.exit();
}

let consumo;

// Consumo por tipo de carro
if (tipoCarro === 'A') {
    consumo = 8;
} else if (tipoCarro === 'B') {
    consumo = 9;
} else if (tipoCarro === 'C') {
    consumo = 12;
} else {
    console.log("Tipo de carro inválido!");
    process.exit();
}

// Cálculo final
const litros = km / consumo;
console.log(`Consumo estimado: ${litros.toFixed(2)} litros.`);