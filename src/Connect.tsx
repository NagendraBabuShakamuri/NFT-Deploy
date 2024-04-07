import * as React from 'react';
import { Connector, useChainId, useConnect } from 'wagmi';
import { Button } from "./components/ui/button"

export function Connect() {
    const chainId = useChainId();
    const { connectors, connect } = useConnect();

    return (
        <div className="buttons">
            {connectors.map((connector) => {
                return (
                <ConnectorButton
                    key={connector.uid}
                    connector={connector}
                    onClick={() => connect({ connector, chainId })}
                />
            )})}
        </div>
    );
}

function ConnectorButton({
    connector,
    onClick,
}: {
    connector: Connector;
    onClick: () => void;
}) {
    const [ready, setReady] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            const provider = await connector.getProvider();
            setReady(!!provider);
        })();
    }, [connector, setReady]);

    return (
        <Button className="mx-2" variant="outline" disabled={!ready} onClick={onClick}>{connector.name === 'Injected' ? 'Already existing wallet' : connector.name}</Button>
    );
}
