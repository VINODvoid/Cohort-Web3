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
  

  const byteArray = new Uint8Array([72, 101, 108, 108, 111]); 
  const asciiCharacters = bytesToAscii(bytes);
  console.log(asciiString);



// ascii to uin8Array
  function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
 
  const asciicharacter  = "hello";
  const byte = asciiToBytes(asciicharacter);
  console.log(byte); 
  
//   bytes to hexa
  function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
      hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
  }
  
 
  const byteArray1 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const hexString = arrayToHex(byteArray1);
  console.log(hexString); // Output: "48656c6c6f"
  
//   hexa to bytes
function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
  }
  

  const hex = "48656c6c6f";
  const byteArrayFromHex = hexToArray(hex);
  console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  

//   BASE 64 - 6 bites
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);