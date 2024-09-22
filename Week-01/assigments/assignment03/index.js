// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10


const crypto = require('crypto');

function customHash(prefix){
    let input = 0;
    while (true){
        let inputStr = `harkirat => Raman | Rs 100 Ram => Ankit | Rs 10` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix))
        {
            return {
                hash:hash,
                input:inputStr,
            }
        }
        input++;
    }
}

let hashValue = customHash('000000');
console.log(hashValue.hash);
console.log(hashValue.input);
