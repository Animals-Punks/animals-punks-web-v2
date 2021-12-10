import { useEffect, useState } from "react";

import { UserService } from "../services/user.service";

function useTicketMint(): {
    connectKaikasWallet: any;
    connectMetamaskWallet: any;
    kaikasSelectAddress: string;
    metaSelectAddress: string;
    v1ImageList: string[];
    v2ImageList: string[];
} {
    const [kaikasSelectAddress, setKaikasSelectAddress] = useState("");
    const [metaSelectAddress, setMetaSelectAddress] = useState("");
    const [v1ImageList, setV1ImageList] = useState([""]);
    const [v2ImageList, setV2ImageList] = useState([""]);
    const userService = new UserService();

    const connectMetamaskWallet = async () => {
        const meta: any | undefined = (window as any).ethereum;
        if (meta !== undefined) {
            await meta.enable();
        }
        const address = meta.selectedAddress;
        const sliceAddress = `${address.slice(0, 5)}...${address.slice(-5)}`;
        setMetaSelectAddress(sliceAddress);
        const v1Images = await userService.getV1Ap(address);
        setV1ImageList(v1Images);
    };

    const connectKaikasWallet = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            klaytn.enable();
        }
        const address = klaytn.selectedAddress;
        const sliceAddress = `${address.slice(0, 5)}...${address.slice(-5)}`;
        setKaikasSelectAddress(sliceAddress);
        const v2Images = await userService.getV2ApImageUrl(address);
        setV2ImageList(v2Images);
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

        // const meta: any | undefined = (window as any).ethereum;
        // if (meta !== undefined) {
        //     const isMetaUnlocked = await meta._metamask.isUnlocked();
        //     if (isMetaUnlocked === true) {
        //         const address = meta.selectedAddress;
        //         const sliceAddress = `${address.slice(0, 5)}...${address.slice(
        //             -5
        //         )}`;
        //         setMetaSelectAddress(sliceAddress);
        //     }
        // }
    };

    useEffect(() => {
        checkWalletConnection();
    });

    return {
        connectKaikasWallet,
        connectMetamaskWallet,
        kaikasSelectAddress,
        metaSelectAddress,
        v1ImageList,
        v2ImageList,
    };
}

export default useTicketMint;
