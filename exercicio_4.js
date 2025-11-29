import { input } from '@inquirer/prompts'

let nome,x,y

nome = await input ({message:"qual seu nome"})

x=0

y = nome.length

for (x; x<y;x++){

    console.log(nome)
}

console.log("fim do codigo")