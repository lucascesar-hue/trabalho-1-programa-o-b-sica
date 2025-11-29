import { input } from "@inquirer/prompts";

const meme = await input({ message: "fala um nome daora:" });
const parça = meme.length;
let borge = 0;


const aio = "aeiou";
for (const letra of meme.toLowerCase()) {
  if (aio.includes(letra)) borge++;
}
const pucento = (borge / parça) * 100;

console.log(`tem essaas letras: ${parça}`);

console.log(` essas vogais: ${borge}`);

console.log(`isso ai e a pucentagem: ${pucento.toFixed(2)}%`);