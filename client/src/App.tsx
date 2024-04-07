import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { ConnectWallet } from './ConnectWallet';
import DeployContract from "./deployContract";

import { Input } from "./components/ui/input"

// 2. Set up a React Query client.
const queryClient = new QueryClient()

function App() {
    const [nftName, setNftName] = useState<string>('');
    const [nftSymbol, setNftSymbol] = useState<string>('');

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <section className="min-h-screen bg-stone-900 text-white">
                    <ConnectWallet />
                    <div className="mx-auto flex mt-4 gap-5 ">

                        <Input className="max-w-96" type="text" placeholder="NFT Collection Name" value={nftName} onChange={(e) => setNftName(e.target.value)} />
                        <Input className="max-w-96" type="text" placeholder="NFT Symbol" value={nftSymbol} onChange={(e) => setNftSymbol(e.target.value)} />
                    </div>
                    <DeployContract
                        contractArg1={nftName}
                        contractArg2={nftSymbol}
                        className="mt-3"
                    />
                </section>
            </QueryClientProvider>
        </WagmiProvider>
    );
}


export default App;
