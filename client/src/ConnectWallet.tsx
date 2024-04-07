import { useAccount } from 'wagmi';

import { Account } from './Account';
import { Connect } from './Connect';

export function ConnectWallet() {
  const { isConnected } = useAccount();
  return (
    <div className="container mx-auto">
    <p className="text-white">Connect to a wallet</p>
    {isConnected ? <Account /> : <Connect />}
    </div>
  );
}
