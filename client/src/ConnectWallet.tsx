import { useEffect } from 'react'
import { useAccount } from 'wagmi';

import { Account } from './Account';
import { Connect } from './Connect';
import { useToast } from "./components/ui/use-toast"
import StatusBanner from './components/my/StatusBanner';

export function ConnectWallet() {
    const { address, isConnecting, isConnected } = useAccount();
    const { toast } = useToast();

    useEffect(() => {
        if (isConnected) {
            toast({
                title: `Connected to wallet with address ${address}`,
                variant: 'default'
            })
        }
        else {
            toast({
                title: `Disconnected from wallet`,
                description: "",
            })
        }

    }, [isConnected])

    return (
        <div className="">
            <StatusBanner className="" status={isConnected}/>
            <p className="text-white">Connect to a wallet</p>
            {isConnected ? <Account /> : <Connect status={isConnecting}/>}
        </div>
    );
}
