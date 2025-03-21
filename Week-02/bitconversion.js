// bytes to ascii

function convertToAscii(bytes)
{
    return bytes.map((byte)=>{
        return String.fromCharCode(byte);
    }).join("");
}

const bytes = [104 ,101 ,108 ,108 ,111]
const asciiString = convertToAscii(bytes);
console.log(asciiString);

// ascii to bytes
function convertToByte(ascii)
{
    let byteArray = [];
    for(let i=0;i<ascii.length;i++)
    {
        byteArray.push(ascii.charCodeAt(i));
    }
    return byteArray;
}
const ascii = "hello";
const bytecode = convertToByte(ascii);
console.log(bytecode);