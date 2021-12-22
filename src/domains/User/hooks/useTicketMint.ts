import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { UserService } from "../services/user.service";
import {
    usedV1ApAtom,
    usedV2ApAtom,
    seletedV1IdAtom,
    seletedV2IdAtom,
} from "@common/services/recoil/selectItemAtom";
import { graphqlService } from "@/common/services";

function useTicketMint(): {
    connectKaikasWallet: any;
    connectMetamaskWallet: any;
    kaikasSelectAddress: string;
    metaSelectAddress: string;
    v1ImageList: string[];
    v2ImageList: string[];
    goldTicketMint: any;
    diamondTicketMint: any;
    onChangeV1: any;
    onChangeV2: any;
    onClickV1: any;
    onClickV2: any;
} {
    const [kaikasSelectAddress, setKaikasSelectAddress] = useState("");
    const [metaSelectAddress, setMetaSelectAddress] = useState("");
    const [v1ImageList, setV1ImageList] = useState([""]);
    const [v2ImageList, setV2ImageList] = useState([""]);
    const [usedV1ApImageList, setUsedV1ApImageList] =
        useRecoilState(usedV1ApAtom);
    const [usedV2ApImageList, setUsedV2ApImageList] =
        useRecoilState(usedV2ApAtom);
    const [searchV1Ap, setSearchV1Ap] = useState("");
    const [searchV2Ap, setSearchV2Ap] = useState(0);
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
        const property = [];
        const ticketNumber = await graphqlService.getTicketCurrnetNumber(
            ticketType
        );
        if (ticketNumber[0].currentTicketNumber > 295) {
            alert("골드 티켓 민팅이 종료되었습니다!");
        } else {
            if (selectedV2IdList.length < 8) {
                alert("Please select 8 V2 item");
            } else {
                const requestV2NumberList = [];
                for (const selected of selectedV2IdList) {
                    const parseSelected = JSON.parse(selected);
                    const itemProperty = {
                        trait_type: "V2",
                        value: Number(parseSelected.apNumber),
                    };
                    property.push(itemProperty);
                    requestV2NumberList.push(Number(parseSelected.apNumber));
                }
                try {
                    const validateResult = await userService.usedV2Validate(
                        requestV2NumberList
                    );
                    if (validateResult === true) {
                        const ticketTypeProperty = {
                            trait_type: "type",
                            value: ticketType,
                        };
                        property.push(ticketTypeProperty);
                        const result = await userService.mintTicket(
                            ticketType,
                            address,
                            property
                        );
                        if (result === true) {
                            alert("Gold Ticket Minting Success");
                        }
                    }
                } catch (error) {
                    alert(error.message);
                }
            }
        }
    };

    const diamondTicketMint = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        const address = klaytn.selectedAddress;
        const ticketType = "diamond";
        const property = [];
        const ticketNumber = await graphqlService.getTicketCurrnetNumber(
            ticketType
        );
        if (ticketNumber[0].currentTicketNumber > 196) {
            alert("다이아 티켓 민팅이 종료되었습니다!");
        } else {
            if (selectedV2IdList.length < 8 || selectedV1IdList.length < 4) {
                alert("Please select item enough");
            } else {
                const requestV1NumberList = [];
                const requestV2NumberList = [];
                for (const v1Selected of selectedV1IdList) {
                    const parseSelected = JSON.parse(v1Selected);
                    const itemProperty = {
                        trait_type: "V1",
                        value: parseSelected.apNumber,
                    };
                    property.push(itemProperty);
                    requestV1NumberList.push(parseSelected.apNumber);
                }
                for (const v2Selected of selectedV2IdList) {
                    const parseSelected = JSON.parse(v2Selected);
                    const itemProperty = {
                        trait_type: "V2",
                        value: Number(parseSelected.apNumber),
                    };
                    property.push(itemProperty);
                    requestV2NumberList.push(Number(parseSelected.apNumber));
                }
                try {
                    const v1ValidateResult = await userService.usedV1Validate(
                        requestV1NumberList
                    );
                    const v2ValidateResult = await userService.usedV2Validate(
                        requestV2NumberList
                    );
                    if (
                        v1ValidateResult === true &&
                        v2ValidateResult === true
                    ) {
                        const result = await userService.mintTicket(
                            ticketType,
                            address,
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
                } catch (error) {
                    alert(error.message);
                }
            }
        }
    };

    const onChangeV1 = async (event: any) => {
        if (!event.target.value) {
            const v1ImageList = await userService.getUsedV1ImageUrl();
            setUsedV1ApImageList(v1ImageList);
        } else {
            setSearchV1Ap(event.target.value);
        }
    };
    const onChangeV2 = async (event: any) => {
        if (!event.target.value) {
            const v2ImageList = await userService.getUsedV2ImageUrl();
            setUsedV2ApImageList(v2ImageList);
        } else {
            setSearchV2Ap(event.target.value);
        }
    };

    const onClickV1 = async () => {
        if (!searchV1Ap) {
            const v1ImageList = await userService.getUsedV1ImageUrl();
            setUsedV1ApImageList(v1ImageList);
        } else {
            const searchUsedAp = await graphqlService.searchUsedV1Ap(
                searchV1Ap
            );
            const imageUrlList = await userService.seachOneV1ImageUrl(
                searchUsedAp[0].apNumber
            );
            setUsedV1ApImageList(imageUrlList);
        }
    };
    const onClickV2 = async () => {
        if (!searchV2Ap) {
            const v2ImageList = await userService.getUsedV2ImageUrl();
            setUsedV2ApImageList(v2ImageList);
        } else {
            const searchUsedAp = await graphqlService.searchUsedV2Ap(
                searchV2Ap
            );
            const imageUrlList = await userService.seachOneV2ImageUrl(
                searchUsedAp[0].apNumber
            );
            setUsedV2ApImageList(imageUrlList);
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
        onChangeV1,
        onChangeV2,
        onClickV1,
        onClickV2,
    };
}

export default useTicketMint;
