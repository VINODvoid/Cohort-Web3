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
