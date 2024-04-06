import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { ConnectWallet } from './ConnectWallet';
import DeployContract from "./deployContract";

// 2. Set up a React Query client.
const queryClient = new QueryClient()

function App() {
  const [nftName, setNftName] = useState<string>('');
  const [nftSymbol, setNftSymbol] = useState<string>('');

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
        <div>
          <input
            type="text"
            value={nftName}
            onChange={(e) => setNftName(e.target.value)}
            placeholder="NFT Collection Name"
          />
          <input
            type="text"
            value={nftSymbol}
            onChange={(e) => setNftSymbol(e.target.value)}
            placeholder="NFT Symbol"
          />
        </div>
        <DeployContract
          contractArg1={nftName} 
          contractArg2={nftSymbol}
        />
      </QueryClientProvider> 
    </WagmiProvider>
  );
}


export default App;
