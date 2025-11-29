import { input } from '@inquirer/prompts'

const meme = await input({ message: "Digite qualque coisa ai:" });

let num = 0;
const aio = "aeiou";

for (const letra of meme.toLowerCase()) {
  if (aio.includes(letra)) num++;
}

console.log(`A frase possui ${num} vogais.`);