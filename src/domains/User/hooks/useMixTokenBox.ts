import { useEffect, useState } from "react";

export default function useMixTokenBox(): {
    isConnectedMetaMask: boolean;
    isConnectedKaikas: boolean;
} {
    const [isConnectedMetaMask, setIsconnectMetaMask] = useState(false);
    const [isConnectedKaikas, setIsconnectKaikas] = useState(false);

    useEffect(() => {
        const metaMask: any | undefined = (window as any).ethereum;
        const klaytn: any | undefined = (window as any).klaytn;
        if (metaMask !== undefined) {
            setIsconnectMetaMask(metaMask.isConnected());
        }
        if (klaytn !== undefined) {
            console.log(klaytn.isConnected());
            setIsconnectKaikas(klaytn.isConnected());
        }
    });

    return { isConnectedMetaMask, isConnectedKaikas };
}
