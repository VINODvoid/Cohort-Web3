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

// uin8Array to ascii
function bytesToAscii(byteArray) {
    return new TextDecoder().decode(new Uint8Array(byteArray));
  }
  
  // Example usage:
  const byteArray = new Uint8Array([72, 101, 108, 108, 111]); 
  const asciiCharacters = bytesToAscii(bytes);
  console.log(asciiString);



// ascii to uin8Array
  function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
  // Example usage:
  const asciicharacter  = "hello";
  const byte = asciiToBytes(asciicharacter);
  console.log(byte); 
  