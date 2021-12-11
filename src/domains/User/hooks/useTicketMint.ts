import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { UserService } from "../services/user.service";
import {
    usedV1ApAtom,
    usedV2ApAtom,
} from "@/common/services/recoil/selectItemAtom";

function useTicketMint(): {
    connectKaikasWallet: any;
    connectMetamaskWallet: any;
    kaikasSelectAddress: string;
    metaSelectAddress: string;
    v1ImageList: string[];
    v2ImageList: string[];
    goldTicketMint: any;
    diamondTicketMint: any;
} {
    const [kaikasSelectAddress, setKaikasSelectAddress] = useState("");
    const [metaSelectAddress, setMetaSelectAddress] = useState("");
    const [v1ImageList, setV1ImageList] = useState([""]);
    const [v2ImageList, setV2ImageList] = useState([""]);
    const [usedV1ApImageList, setUsedV1ApImageList] =
        useRecoilState(usedV1ApAtom);
    const [usedV2ApImageList, setUsedV2ApImageList] =
        useRecoilState(usedV2ApAtom);
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

    const getUsedAp = async () => {
        // const v1ImageList = await userService.getUsedV1ImageUrl();
        const v2ImageList = await userService.getUsedV2ImageUrl();
        // setUsedV1ApImageList(v1ImageList);
        setUsedV2ApImageList(v2ImageList);
    };

    const goldTicketMint = async () => {
        const ticketType = "gold";
        const address = kaikasSelectAddress;
        const ticketNumber = 0;
        const property = [];
        for (const selected of usedV2ApImageList) {
            const parseSelected = JSON.parse(selected);
            const itemProperty = {
                trait_type: "V2",
                value: parseSelected.apNumber,
            };
            property.push(itemProperty);
        }
        const result = await userService.mintTicket(
            ticketType,
            address,
            ticketNumber,
            property
        );
        if (result === false) {
            alert("minting failed");
        }
    };

    const diamondTicketMint = async () => {
        const ticketType = "diamond";
        const address = kaikasSelectAddress;
        const ticketNumber = 0;
        const property = [];
        for (const v1Selected of usedV1ApImageList) {
            const parseSelected = JSON.parse(v1Selected);
            const itemProperty = {
                trait_type: "V1",
                value: parseSelected.apNumber,
            };
            property.push(itemProperty);
        }
        for (const v2Selected of usedV2ApImageList) {
            const parseSelected = JSON.parse(v2Selected);
            const itemProperty = {
                trait_type: "V1",
                value: parseSelected.apNumber,
            };
            property.push(itemProperty);
        }
        const result = await userService.mintTicket(
            ticketType,
            address,
            ticketNumber,
            property
        );
        if (result === false) {
            alert("minting failed");
        }
    };

    useEffect(() => {
        getUsedAp();
    }, []);

    return {
        connectKaikasWallet,
        connectMetamaskWallet,
        kaikasSelectAddress,
        metaSelectAddress,
        v1ImageList,
        v2ImageList,
        goldTicketMint,
        diamondTicketMint,
    };
}

export default useTicketMint;
