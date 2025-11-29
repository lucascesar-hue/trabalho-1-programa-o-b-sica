import { input } from '@inquirer/prompts'

let nome,casa,num

console.log("digite suas informações")

nome = await input({message:"nome?"})

casa = await input({message:"local de residencia"})

num = await input({message:"seu numero"})

console.log (nome,casa,num)