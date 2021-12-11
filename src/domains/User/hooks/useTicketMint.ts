import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { UserService } from "../services/user.service";
import {
    usedV1ApAtom,
    usedV2ApAtom,
    seletedV1IdAtom,
    seletedV2IdAtom,
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
    const selectedV1IdList = useRecoilValue(seletedV1IdAtom);
    const selectedV2IdList = useRecoilValue(seletedV2IdAtom);
    const userService = new UserService();

    const connectMetamaskWallet = async () => {
        const meta: any | undefined = (window as any).ethereum;
        if (meta !== undefined) {
            const result = await meta.enable();
            const address = result[0];
            const sliceAddress = `${address.slice(0, 5)}...${address.slice(
                -5
            )}`;
            setMetaSelectAddress(sliceAddress);
            const v1Images = await userService.getV1Ap(address);
            setV1ImageList(v1Images);
        }
    };

    const connectKaikasWallet = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            const result = await klaytn.enable();
            const address = result[0];
            const sliceAddress = `${address.slice(0, 5)}...${address.slice(
                -5
            )}`;
            setKaikasSelectAddress(sliceAddress);
            const v2Images = await userService.getV2ApImageUrl(address);
            setV2ImageList(v2Images);
        }
    };

    const getUsedAp = async () => {
        const v1ImageList = await userService.getUsedV1ImageUrl();
        const v2ImageList = await userService.getUsedV2ImageUrl();
        setUsedV1ApImageList(v1ImageList);
        setUsedV2ApImageList(v2ImageList);
    };

    const goldTicketMint = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        const address = klaytn.selectedAddress;
        const ticketType = "gold";
        const ticketNumber = 0;
        const property = [];
        if (selectedV2IdList.length < 8) {
            alert("Please select 8 V2 item");
        } else {
            for (const selected of selectedV2IdList) {
                const parseSelected = JSON.parse(selected);
                const itemProperty = {
                    trait_type: "V2",
                    value: Number(parseSelected.apNumber),
                };
                property.push(itemProperty);
            }
            const ticketTypeProperty = {
                trait_type: "type",
                value: ticketType,
            };
            property.push(ticketTypeProperty);
            const result = await userService.mintTicket(
                ticketType,
                address,
                ticketNumber,
                property
            );
            if (result === true) {
                alert("Gold Ticket Minting Success");
            }
        }
    };

    const diamondTicketMint = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        const address = klaytn.selectedAddress;
        const ticketType = "diamond";
        const ticketNumber = 0;
        const property = [];
        if (selectedV2IdList.length < 8 || selectedV1IdList.length < 4) {
            alert("Please select item enough");
        } else {
            for (const v1Selected of selectedV1IdList) {
                const parseSelected = JSON.parse(v1Selected);
                const itemProperty = {
                    trait_type: "V1",
                    value: parseSelected.apNumber,
                };
                property.push(itemProperty);
            }
            for (const v2Selected of selectedV2IdList) {
                const parseSelected = JSON.parse(v2Selected);
                const itemProperty = {
                    trait_type: "V2",
                    value: Number(parseSelected.apNumber),
                };
                property.push(itemProperty);
            }
            const result = await userService.mintTicket(
                ticketType,
                address,
                ticketNumber,
                property
            );
            const ticketTypeProperty = {
                trait_type: "type",
                value: ticketType,
            };
            property.push(ticketTypeProperty);
            if (result === true) {
                alert("Diamond Ticket Minting Success");
            }
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
