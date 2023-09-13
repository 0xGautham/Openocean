import { useState } from "react";
import { MetaMask } from "@openocean.finance/wallet";

function WalletConnect() {
    const [isConnected, setIsConnected] = useState(false);

    const connectWallet = async (params: { chainId: number }) => {
        try {
            const myWallet = new MetaMask();
            const result = await myWallet.requestConnect(params.chainId);
            // Check the result and update the state accordingly
            if (result === "success") {
                setIsConnected(true);
            } else {
                setIsConnected(false);
            }
        } catch (error) {
            console.error("Error connecting wallet:", error);
            setIsConnected(false);
        }
    };

    return (
        <div>
            {isConnected ? (
                <p>Your wallet is connected!</p>
            ) : (
                <button onClick={() => connectWallet({ chainId: 1 })}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
}

export default WalletConnect;
