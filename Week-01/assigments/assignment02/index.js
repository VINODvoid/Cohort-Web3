// Give me an input string that outputs a SHA-256 hash that starts with 00000
// What if I ask you that the input string should start with 100xdevs ? How would the code change?

const crypto = require("crypto");

function customHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr = "vinod" + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return {
        input: inputStr,
        hash: hash,
      };
    }
    input++;
  }
}

const value = customHashWithPrefix("00000");
console.log(value.hash);
console.log(value.input);
