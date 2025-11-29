import { input } from "@inquirer/prompts";

const pew = await input({ message: "Digite uma palavra ai:" });

console.log("mudando pra MAIÚSCULASSSSSSS:");
console.log(pew.toUpperCase());