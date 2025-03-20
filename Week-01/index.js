const crypto = require('crypto')


const findHash = (prefix) =>{
    let input = 0;
    while(true)
    {
    let inputstr = input.toString();
    let hash = crypto.createHash('sha256').update(inputstr).digest('hex');
    if(hash.startsWith(prefix))
    {
        return {
            inputstr:inputstr,
            hash:hash,
        }
    }
    input++;
}

}


const result = findHash('000000');
console.log(result.hash);
console.log(result.inputstr);

console.log(+true);
console.log(+false);

