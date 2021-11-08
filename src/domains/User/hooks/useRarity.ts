import { useState } from "react";

import { userService } from "@User/services";
import { useRecoilValue } from "recoil";
import { searchRarityNumberState } from "@/common/services/recoil/updateNameState";

export default function useRarity(
    background: string[],
    species: string[],
    head: string[],
    eyes: string[],
    mouth: string[],
    clothes: string[],
    accessory: string[]
): {
    onClick: any;
    onClickApName: any;
    imageUrlState: string;
    apNameState: string;
} {
    const [imageUrlState, setImageUrlState] = useState("");
    const [apNameState, setApNameState] = useState("");
    const searchRarityNumber = useRecoilValue(searchRarityNumberState);

    const onClick = async () => {
        const findRarityResult = await userService.findRarity({
            background: background[0].toLowerCase(),
            species: species[0].toLowerCase(),
            head: head[0].toLowerCase(),
            eyes: eyes[0].toLowerCase(),
            mouth: mouth[0].toLowerCase(),
            clothes: clothes[0].toLowerCase(),
            accessory: accessory[0].toLowerCase(),
        });

        if (findRarityResult === undefined) {
            alert("Please enter all items.");
            return;
        }
        if (findRarityResult === null) {
            alert("There is not have any animals punks.");
            return;
        }
        setImageUrlState(findRarityResult.imgUrl);
        setApNameState(findRarityResult.name);
    };

    const onClickApName = async () => {
        const findAp = await userService.getApByNumber(searchRarityNumber);

        if (findAp === undefined) {
            alert("Please enter all items.");
            return;
        }
        setImageUrlState(findAp.imgUrl);
        setApNameState(findAp.name);
    }

    return {
        onClick,
        onClickApName,
        imageUrlState,
        apNameState,
    };
}
