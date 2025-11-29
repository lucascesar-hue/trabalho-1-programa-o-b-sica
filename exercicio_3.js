import { input } from '@inquirer/prompts'

let nome

nome = await input ({message:"qual seu nome"})


console.log("seu nome tem",nome.length , "letras" )