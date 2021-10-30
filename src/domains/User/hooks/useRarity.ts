import { useState } from "react";

import { userService } from "@User/services";
import { FindRarityParams } from "@User/services/user-service.interface";

export default function useRarity(): {
    setBackgroundState: React.Dispatch<React.SetStateAction<string>>;
    setSpeciesState: React.Dispatch<React.SetStateAction<string>>;
    setHeadState: React.Dispatch<React.SetStateAction<string>>;
    setEyesState: React.Dispatch<React.SetStateAction<string>>;
    setMouthState: React.Dispatch<React.SetStateAction<string>>;
    setClothesState: React.Dispatch<React.SetStateAction<string>>;
    setAccessoryState: React.Dispatch<React.SetStateAction<string>>;
    onClick: any;
    imageUrlState: string;
    apNameState: string;
} {
    const [backgroundState, setBackgroundState] = useState("");
    const [speciesState, setSpeciesState] = useState("");
    const [headState, setHeadState] = useState("");
    const [eyesState, setEyesState] = useState("");
    const [mouthState, setMouthState] = useState("");
    const [clothesState, setClothesState] = useState("");
    const [accessoryState, setAccessoryState] = useState("");
    const [imageUrlState, setImageUrlState] = useState("");
    const [apNameState, setApNameState] = useState("");

    const findRarityParams: FindRarityParams = {
        background: backgroundState,
        species: speciesState,
        head: headState,
        eyes: eyesState,
        mouth: mouthState,
        clothes: clothesState,
        accessory: accessoryState,
    };
    const onClick = async () => {
        setBackgroundState("darksea");
        setSpeciesState("ape");
        setHeadState("faint");
        setEyesState("odd eye");
        setMouthState("drooling");
        setClothesState("sweater heart");
        setAccessoryState("monocle");

        const findRarityResult = await userService.findRarity(findRarityParams);
        setImageUrlState(findRarityResult.imgUrl);
        setApNameState(findRarityResult.name);
        // setFindRerityResult(findRarityResult);
    };
    return {
        setBackgroundState,
        setSpeciesState,
        setHeadState,
        setEyesState,
        setMouthState,
        setClothesState,
        setAccessoryState,
        onClick,
        imageUrlState,
        apNameState,
    };
}
