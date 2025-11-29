import { input } from '@inquirer/prompts'

const borge = await input({ message: "Digite um nome:" });

const muitosa = borge.toLowerCase().split("a").length - 1;

console.log(`O nome "${borge}" possui ${muitosa} letras 'A ou a'.`);