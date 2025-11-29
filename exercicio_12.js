// Entrada
const idadeEleitor = Number(await pergunta("Digite sua idade para verificação eleitoral: "));

// Validação
if (isNaN(idadeEleitor) || idadeEleitor < 0) {
    console.log("Idade inválida! Tente novamente.");
    process.exit();
}

// Faixas eleitorais
if (idadeEleitor < 16) {
    console.log("Proibido Votar");
} else if ((idadeEleitor >= 16 && idadeEleitor < 18) || idadeEleitor > 70) {
    console.log("Voto Facultativo");
} else {
    console.log("Voto Obrigatório");
}