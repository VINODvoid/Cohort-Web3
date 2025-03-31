import React from 'react'
import { useState } from 'react'
import {generateMnemonic,  mnemonicToSeedSync} from 'bip39'
import { Keypair } from '@solana/web3.js'
import { derivePath } from 'ed25519-hd-key'
import nacl from 'tweetnacl';
import {Buffer} from 'buffer';
import  {ethers}  from 'ethers'


const WalletGenerator = () => {

  const [currentIndex,setCurrentIndex] = useState(0);
  const [privateKeys , setPrivateKeys] = useState([]);
  const [publicKeys , setPublicKeys] = useState([]);
  const WalletGeneration =(event)=>{
    const coin_type = event.target.value;
    const mnemonic = generateMnemonic();
    const seed = mnemonicToSeedSync(mnemonic);
    if(coin_type == "501")
    {
    const path = `m/44'/${coin_type}'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path,seed.toString('hex')).key;



    const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey.slice(0,32);
    const keypair = Keypair.fromSecretKey(secretKey)
    setPublicKeys([...publicKeys,keypair.publicKey.toBase58()]);
    setPrivateKeys([...privateKeys,Buffer.from(secretKey).toString('hex')]);
    setCurrentIndex(currentIndex+1);
    }
    if(coin_type == "60")
    {
      setCurrentIndex(0);
      const path = `m/44'/${coin_type}'/${currentIndex}'/0'`;
      const hdNode = ethers.utils.HDNodeWallet.fromMnemonic(mnemonic).derivePath(path);
      setPublicKeys([...publicKeys,hdNode.address]);
      setPrivateKeys(...privateKeys,hdNode.privateKey);
      setCurrentIndex(currentIndex+1);
    }
  }
  return (
    <div>
      <div>
        <button onClick={WalletGeneration} value={"501"}>Solona
        </button>
        <button onClick={WalletGeneration} value={"60"}>Ethereum</button>

        {
          <div>
            {privateKeys}
            {publicKeys}
          </div>
          
        }
      </div>
    </div>

  )
}

export default WalletGenerator