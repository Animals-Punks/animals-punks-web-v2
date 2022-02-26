import { CaverJsService } from "@/common/services/caverJs/caverJs.service";
import React, { useEffect, useState } from "react";

export default function useMintBabyPunks(): {
    extraList: Record<any, any>[];
    ownedV2ImageList: string[];
    setOwnedV2ImageList: React.Dispatch<React.SetStateAction<string[]>>;
    selectedFirstAp: any[];
    setselectedFirstAp: React.Dispatch<React.SetStateAction<any[]>>;
    selectedSecoundAp: any[];
    setselectedSecoundAp: React.Dispatch<React.SetStateAction<any[]>>;
    ownedV2Metadata: Record<any, any>[];
    setownedV2Metadata: any;
    kaikasAddress: string;
    setKaikasAddress: React.Dispatch<React.SetStateAction<string>>;
    usedApList: string[];
    setUsedApList: React.Dispatch<React.SetStateAction<string[]>>;
    searchApNumber: string;
    setSearchApNumber: React.Dispatch<React.SetStateAction<string>>;
    mix: string;
    limitSupply: number;
} {
    const [ownedV2ImageList, setOwnedV2ImageList] = useState([""]);
    const [selectedFirstAp, setselectedFirstAp] = useState([
        { string: "test" },
    ]);
    const [selectedSecoundAp, setselectedSecoundAp] = useState([
        { string: "test" },
    ]);
    const [ownedV2Metadata, setownedV2Metadata] = useState([
        { string: "test" },
    ]);
    const [kaikasAddress, setKaikasAddress] = useState("");
    const [usedApList, setUsedApList] = useState([""]);
    const [searchApNumber, setSearchApNumber] = useState("0");
    const [mix, setMix] = useState("0");
    const [limitSupply, setLimitSupply] = useState(880);
    const [extraList, setExtraList] = useState([
        {
            species: "Tiger",
            extra: 0,
        },
        {
            species: "Cat",
            extra: 0,
        },
        {
            species: "Ape",
            extra: 0,
        },
        {
            species: "Rabbit",
            extra: 0,
        },
        {
            species: "Tuttle",
            extra: 0,
        },
        {
            species: "Seal",
            extra: 0,
        },
        {
            species: "Pig",
            extra: 0,
        },
        {
            species: "Dog",
            extra: 0,
        },
    ]);

    const getExtraAndMixBalance = async () => {
        const extra = await new CaverJsService().getExtraBabyPunks();
        const mixBalance = await new CaverJsService().getMixBalance();
        const totalSupply = await new CaverJsService().getBabyPunksTotalSupply();
        const calculateTotalSupply = limitSupply - Number(totalSupply);
        setLimitSupply(calculateTotalSupply);
        setMix(mixBalance);
        setExtraList(extra);
    };

    useEffect(() => {
        getExtraAndMixBalance();
    }, []);

    return {
        extraList,
        ownedV2ImageList,
        setOwnedV2ImageList,
        selectedFirstAp,
        setselectedFirstAp,
        selectedSecoundAp,
        setselectedSecoundAp,
        ownedV2Metadata,
        setownedV2Metadata,
        kaikasAddress,
        setKaikasAddress,
        usedApList,
        setUsedApList,
        searchApNumber,
        setSearchApNumber,
        mix,
        limitSupply,
    };
}
