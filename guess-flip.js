import { countFlips, coinFlips, flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";
import { createRequire } from "module";

let require = createRequire(import.meta.url);

try{
    let myArgs = minimist(process.argv.slice(2));
    let call = myArgs["call"];
    if (!call || (call != "heads" && call != "tails")){
        throw err;
    }
    console.log(flipACoin(call));
}
catch(err){
    console.log("Error: no input. \nUsage: node guess-flip --call=[heads|tails]");
}


