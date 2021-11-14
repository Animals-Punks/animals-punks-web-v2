import { useState } from "react";

import { userService } from "@User/services";
import { useRecoilValue } from "recoil";
import { searchRarityNumberState } from "@/common/services/recoil/updateNameState";

export default function useRarity(): {
    onClickApName: any;
    imageUrlState: string;
    apNameState: string;
} {
    const [imageUrlState, setImageUrlState] = useState("");
    const [apNameState, setApNameState] = useState("");
    const searchRarityNumber = useRecoilValue(searchRarityNumberState);

    const onClickApName = async () => {
        const findAp = await userService.getApByNumber(searchRarityNumber);

        if (findAp === undefined) {
            alert("Please enter all items.");
            return;
        }
        setImageUrlState(findAp.imgUrl);
        setApNameState(findAp.name);
    };

    return {
        onClickApName,
        imageUrlState,
        apNameState,
    };
}
