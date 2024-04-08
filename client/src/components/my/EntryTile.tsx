import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer"
import { Button } from "../ui/button"
import { Connect } from "../../Connect";
import { useToast } from "../ui/use-toast"
import { useAccount } from 'wagmi'
import { useEffect }  from 'react'

interface EntryTitleProps {
    className?: string;
    title: string;
    url: string;
}

export default function({ className, title, url }: EntryTitleProps) {
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

    return <a href={url}><button className={`bg-gray-500 min-h-36 min-w-full rounded-md transition hover:scale-105 ${className}`}>{title}</button></a>
    /*return (
        <Drawer>
            <DrawerTrigger><button className={`bg-gray-500 min-h-36 min-w-full rounded-md transition hover:scale-105 ${className}`}>{title}</button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Before you dive in, please connect a web3 wallet</DrawerTitle>
                    <DrawerDescription>To browse or deploy NFTs a valid connection to a web3 wallet is crucial.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Connect status={isConnecting}/>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )*/
}
