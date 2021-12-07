import { useEffect, useState } from "react";
import { UserService } from "../services/user.service";

function useTicketMint(): {
    connectKaikasWallet: any;
    connectMetamaskWallet: any;
    kaikasSelectAddress: string;
    metaSelectAddress: string;
} {
    const [kaikasSelectAddress, setKaikasSelectAddress] = useState("");
    const [metaSelectAddress, setMetaSelectAddress] = useState("");
    const userService = new UserService();

    const connectKaikasWallet = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            klaytn.enable();
        }
        const address = klaytn.selectedAddress;
        const sliceAddress = `${address.slice(0, 5)}...${address.slice(-5)}`;
        setKaikasSelectAddress(sliceAddress);
    };

    const checkWalletConnection = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            const isKaikasUnlocked = await klaytn._kaikas.isUnlocked();
            if (isKaikasUnlocked === true) {
                const address = klaytn.selectedAddress;
                const sliceAddress = `${address.slice(0, 5)}...${address.slice(
                    -5
                )}`;
                setKaikasSelectAddress(sliceAddress);
            }
        }

        const meta: any | undefined = (window as any).ethereum;
        if (meta !== undefined) {
            const isMEtaUnlocked = await meta._metamask.isUnlocked();
            if (isMEtaUnlocked === true) {
                const address = meta.selectedAddress;
                const sliceAddress = `${address.slice(0, 5)}...${address.slice(
                    -5
                )}`;
                setMetaSelectAddress(sliceAddress);
            }
        }
    };

    const connectMetamaskWallet = async () => {
        const meta: any | undefined = (window as any).ethereum;
        if (meta !== undefined) {
            meta.enable();
        }
        const address = meta.selectedAddress;
        const sliceAddress = `${address.slice(0, 5)}...${address.slice(-5)}`;
        setMetaSelectAddress(sliceAddress);
        await userService.getV1Ap(address);
        // const v1Balance = await userService.getV1Ap(metaSelectAddress);
        // console.log(v1Balance);
    };

    useEffect(() => {
        checkWalletConnection();
    });

    return {
        connectKaikasWallet,
        connectMetamaskWallet,
        kaikasSelectAddress,
        metaSelectAddress,
    };
}

export default useTicketMint;
