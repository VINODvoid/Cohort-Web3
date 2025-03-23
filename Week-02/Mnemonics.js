import {generateMnemonic,mnemonicToSeedSync} from 'bip39'

const words = generateMnemonic(128);
console.log(words);
const seed = mnemonicToSeedSync(words);
console.log(seed);

