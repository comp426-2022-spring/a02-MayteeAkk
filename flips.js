import { countFlips, coinFlips } from "./modules/coin.mjs";
import minimist from "minimist";
import { createRequire } from "module";

let require = createRequire(import.meta.url);
let myArgs = minimist(process.argv.slice(2));
let flips = myArgs['number'] || 1;

console.log(coinFlips(flips));