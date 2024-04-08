import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { ConnectWallet } from './ConnectWallet';
import DeployContract from "./deployContract";

import { Input } from "./components/ui/input"
import EntryTile from './components/my/EntryTile';
import { Toaster } from "./components/ui/toaster"

// 2. Set up a React Query client.
const queryClient = new QueryClient()

function App() {
    const [nftName, setNftName] = useState<string>('');
    const [nftSymbol, setNftSymbol] = useState<string>('');


    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <section className="min-h-screen bg-stone-900 text-white content-center">
                    <div className="flex flex-col justify-between mx-auto max-w-96 min-h-96">
                        <EntryTile title="Drop a collection" />
                        <EntryTile title="Browse NFT collections" />
                    </div>
                </section>
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
                <Toaster />
            </QueryClientProvider>
        </WagmiProvider>
    );
}


export default App;
