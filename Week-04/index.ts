import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey
} from "@solana/web3.js";

/**
 * Confirms a transaction in a way that's compatible with both old & new web3.js
 */
async function confirmSignature(
  connection: Connection,
  signature: string
) {
  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();

  try {
    // ✅ Preferred way (new API)
    return await connection.confirmTransaction({
      signature,
      blockhash,
      lastValidBlockHeight
    });
  } catch (err) {
    // 🔄 Old fallback
    console.warn("Falling back to deprecated confirmation:", (err as Error).message);
    // @ts-ignore — allow deprecated API
    return await connection.confirmTransaction(signature);
  }
}

/**
 * Attempts to airdrop SOL, falling back to localnet if Devnet faucet fails
 */
async function safeAirdrop(publicKey: string, amountSOL: number) {
  const amountLamports = amountSOL * LAMPORTS_PER_SOL;

  // 1️⃣ Try Devnet
  let connection = new Connection(clusterApiUrl("devnet"));
  try {
    console.log("💧 Requesting airdrop from Devnet...");
    const sig = await connection.requestAirdrop(new PublicKey(publicKey), amountLamports);
    await confirmSignature(connection, sig);
    console.log("✅ Airdrop successful on Devnet:", sig);
    return;
  } catch (err) {
    const message = (err as Error).message || "";
    console.error("❌ Devnet airdrop failed:", message);

    if (message.includes("429") || message.includes("airdrop limit") || message.includes("faucet has run dry")) {
      console.log("⚠️ Switching to Localnet...");
    } else {
      throw err;
    }
  }

  // 2️⃣ Fallback to Localnet
  connection = new Connection("http://127.0.0.1:8899");
  try {
    console.log("💧 Requesting airdrop from Localnet...");
    const sig = await connection.requestAirdrop(new PublicKey(publicKey), amountLamports);
    await confirmSignature(connection, sig);
    console.log("✅ Airdrop successful on Localnet:", sig);
  } catch (err) {
    console.error("❌ Localnet airdrop failed:", (err as Error).message);
  }
}

// Example usage
(async () => {
  const publicKey = "AacVSNd9QZAP2HycvpqcAGqkC6s2DbXd7FEuGSgsKREb"; // replace with your wallet address
  await safeAirdrop(publicKey, 1); // 1 SOL
})();
