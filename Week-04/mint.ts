import { createMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";




const payer = Keypair.fromSecretKey(Uint8Array.from([166, 219, 234, 149, 147, 191, 87, 9, 132, 205, 77, 248, 49, 113, 92, 177, 2, 142, 153, 105, 94, 7, 144, 220, 43, 14, 102, 183, 150, 216, 235, 148, 142, 85, 122, 97, 90, 166, 113, 184, 8, 166, 156, 235, 157, 224, 38, 4, 209, 192, 246, 53, 255, 232, 246, 62, 31, 95, 174, 63, 153, 60, 213, 132]));

const mintAuthority = payer;
const connection = new Connection(clusterApiUrl("devnet"));




const createMintForToken = async (
    payer: Keypair,
    mintAuthority: Keypair
) => {
    const mint = await createMint(
        connection,
        payer,
        mintAuthority.publicKey,
        null,
        6
    );
    console.log("mint created at",mint.toBase58());
    return mint;
}


const main = async () =>{
    const mint = await createMintForToken(payer,mintAuthority);
}
main();