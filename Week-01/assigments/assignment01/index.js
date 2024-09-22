// Give me an input string that outputs a SHA-256 hash that starts with 00000 

const crypto = require('crypto');

function getHash(prefix){
    let input = 0;
    while (true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix))
        {
            return {
                input:inputStr,
                hash:hash,
            }
        }
        input++;
    }

}
const value = getHash('00000')
console.log(value.hash);
console.log(value.input);

