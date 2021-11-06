import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";

import {
    InformationBox,
    TitleText,
    ImageBox,
    SelectBox,
    Button,
} from "@common/components";
import { useRarity } from "@User/hooks";
import {
    mouthItemList,
    backgroundList,
    accessoryList,
    clothesList,
    headList,
    speciesList,
    eyeslist,
} from "@assets/metaDatas/items";
import {
    backgroundState,
    speciesState,
    headState,
    eyesState,
    mouthState,
    clothesState,
    accessoryState,
} from "@common/services/recoil/itemAtom";

const RarityBox: React.FC = () => {
    const background = useRecoilValue(backgroundState);
    const species = useRecoilValue(speciesState);
    const head = useRecoilValue(headState);
    const eyes = useRecoilValue(eyesState);
    const mouth = useRecoilValue(mouthState);
    const clothes = useRecoilValue(clothesState);
    const accessory = useRecoilValue(accessoryState);

    const { onClick, imageUrlState, apNameState } = useRarity(
        background,
        species,
        head,
        eyes,
        mouth,
        clothes,
        accessory
    );

    return (
        <InformationBox backgroundColor="#9bf5ff">
            <div css={rarityContiner}>
                <div style={{ marginTop: "5vh" }}>
                    <TitleText textColor="#000">SEARCH ANIMALS</TitleText>
                </div>
                <div css={filterBackgroundStyle}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                            <ImageBox imageUrl={imageUrlState}>
                                {apNameState}
                            </ImageBox>
                            <Button
                                width="100px"
                                height="35px"
                                onClick={onClick}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div css={filterElementContainer}>
                            <SelectBox
                                itemList={backgroundList}
                                itemAtom={backgroundState}
                            >
                                배경
                            </SelectBox>
                            <SelectBox
                                itemList={speciesList}
                                itemAtom={speciesState}
                            >
                                동물
                            </SelectBox>
                            <SelectBox itemList={headList} itemAtom={headState}>
                                머리
                            </SelectBox>
                            <SelectBox itemList={eyeslist} itemAtom={eyesState}>
                                눈
                            </SelectBox>
                        </div>
                        <div css={filterElementContainer}>
                            <SelectBox
                                itemList={mouthItemList}
                                itemAtom={mouthState}
                            >
                                입
                            </SelectBox>
                            <SelectBox
                                itemList={clothesList}
                                itemAtom={clothesState}
                            >
                                옷
                            </SelectBox>
                            <SelectBox
                                itemList={accessoryList}
                                itemAtom={accessoryState}
                            >
                                악세사리
                            </SelectBox>
                        </div>
                    </div>
                </div>
            </div>
        </InformationBox>
    );
};

const rarityContiner = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const filterBackgroundStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 70%;
`;

const filterElementContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 70vw;
    margin-top: 2vh;
`;

export default RarityBox;
