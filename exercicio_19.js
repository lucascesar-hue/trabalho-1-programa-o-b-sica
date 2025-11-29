
import { input } from '@inquirer/prompts'

// Declara variáveis para tempo (horas) e velocidade (km/h)
let tempo
let velocidade
// Loop para ler e validar o tempo gasto (deve ser número > 0)
while (true) {
  // Solicita ao usuário o tempo gasto na viagem 
  const Tempohoras = await input({ message: 'Digite o tempo gasto na viagem (em horas):' })

  // Converte o texto para número decimal
  tempo = parseFloat(Tempohoras) //parsefloat converte pra floating

  // Verifica se a conversão deu certo e se o valor é maior que zero
  if (!isNaN(tempo) && tempo > 0) { //!isNaN em é usado para verificar se um valor é um número válido, retorna true se n for numero e false se for um numero, 
    //&& Ele é usado para avaliar duas expressões so retorna true se ambas for verdadeira
    // se Valor válido sai do loop
    break;
  } else {
    // ser Valor inválido avisa e repete a pergunta
    console.log('Entrada inválida! Digite um número maior que zero.')
  }
}
// Loop para ler e validar a velocidade média (deve ser número > 0)
while (true) {
  // Solicita ao usuário a velocidade média em km/h (texto)
  const Vel = await input({ message: 'Digite a velocidade média (km/h):' })
  // Converte o texto para número decimal
  velocidade = parseFloat(Vel)

  // Verifica se a conversão deu certo e se o valor é maior que zero
  if (!isNaN(velocidade) && velocidade > 0) {
    //se Valor válido sai do loop
    break;
  } else {
    //se Valor inválido avisa e repete a pergunta
    console.log('Entrada inválida! Digite um número maior que zero.')
  }
}
// Calcula a distância percorrida: distância = tempo * velocidade
let distancia = tempo * velocidade
// consumo de 12 km/l, calcula o consumo total em litros
let consumo = distancia / 12
// Exibe os resultados formatados no console/ terminal
console.log(`Tempo gasto: ${tempo} horas`)
console.log(`Velocidade média: ${velocidade} km/h`)
console.log(`Distância percorrida: ${distancia} km`)
console.log(`Consumo estimado de combustível: ${consumo} litros`)
