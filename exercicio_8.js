import { input } from "@inquirer/prompts";

const meme = await input({ message: "fala o primeiro nome:" });
const meme2 = await input({ message: "fala ai o segundo nome:" });

console.log(`trem 1: ${meme} | Caracteres: ${meme.length}`);
console.log(`trem2 2: ${meme2} | Caracteres: ${meme2.length}`);
