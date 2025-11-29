import { input } from '@inquirer/prompts';

// Solicita ao usuário o valor da hora/aula e armazena na variável 'valorh'
let valorh = await input({ message: 'Digite o valor da hora/aula do professor:' })
valorh = parseFloat(valorh) // Converte o valor digitado (string) para número decimal
// Solicita ao usuário o número de aulas dadas no mês e armazena na variável 'aulas'
let aulas = await input({ message: 'Digite o número de aulas dadas no mês:' })
aulas = parseFloat(aulas) // Converte o valor digitado (string) para número decimal
// Solicita ao usuário a porcentagem de desconto do INSS e armazena na variável 'inss'
let inss = await input({ message: 'Digite a porcentagem de desconto do INSS (%):' })
inss = parseFloat(inss) // Converte o valor digitado (string) para número decimal
// Calcula o salário bruto (valor da hora multiplicado pelo número de aulas)
let salariobruto = valorh * aulas
// Calcula o desconto do INSS (salário bruto multiplicado pela porcentagem do INSS dividida por 100)
let desconto = salariobruto * (inss / 100)
// Calcula o salário líquido subtraindo o desconto do salário bruto
let salarioLiquido = salariobruto - desconto

//exibe no terminal com dinheiro
console.log(`Salário Bruto: R$ ${salariobruto}`)
console.log(`Desconto do INSS: R$ ${desconto}`)
console.log(`Salário Líquido: R$ ${salarioLiquido}`)