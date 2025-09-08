import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState("");

    async function requestAirdrop() {
        if (!wallet.publicKey) {
            alert("Please connect your wallet first!");
            return;
        }

        const sol = Number(amount);
        if (isNaN(sol) || sol <= 0) {
            alert("Enter a valid amount!");
            return;
        }

        try {
            const sig = await connection.requestAirdrop(
                wallet.publicKey,
                sol * LAMPORTS_PER_SOL
            );
            alert(
                `✅ Airdropped ${sol} SOL to ${wallet.publicKey.toBase58()}\nTx Signature: ${sig}`
            );
        } catch (err) {
            console.error(err);
            alert("Airdrop failed: " + err.message);
        }
    }

    return (
        <div>
            <br /><br />
            <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={requestAirdrop}>Request Airdrop</button>
            {wallet.publicKey && (
                <p>Connected wallet: {wallet.publicKey.toBase58()}</p>
            )}
        </div>
    );
}
