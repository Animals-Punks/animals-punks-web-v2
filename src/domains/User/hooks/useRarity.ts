import { useState } from "react";

import { userService } from "@User/services";

export default function useRarity(): {
    onClick: any;
    imageUrlState: string;
    apNameState: string;
} {
    const [imageUrlState, setImageUrlState] = useState("");
    const [apNameState, setApNameState] = useState("");

    const onClick = async () => {
        const findRarityResult = await userService.findRarity();
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
    return {
        onClick,
        imageUrlState,
        apNameState,
    };
}
