import { css } from "@emotion/react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
    InformationBox,
    TitleText,
    ImageBox,
    SelectBox,
    Button,
    TextFieldBox,
} from "@common/components";
import { useRarity } from "@User/hooks";
import {
    backgroundState,
    speciesState,
    headState,
    eyesState,
    mouthState,
    clothesState,
    accessoryState,
} from "@common/services/recoil/itemAtom";
import { searchRarityNumberState } from "@common/services/recoil/updateNameState";

const RarityBox: React.FC = () => {
    const background = useRecoilValue(backgroundState);
    const species = useRecoilValue(speciesState);
    const head = useRecoilValue(headState);
    const eyes = useRecoilValue(eyesState);
    const mouth = useRecoilValue(mouthState);
    const clothes = useRecoilValue(clothesState);
    const accessory = useRecoilValue(accessoryState);
    const setSearchRarityNumberState = useSetRecoilState(
        searchRarityNumberState
    );

    const { onClick, onClickApName, imageUrlState, apNameState } = useRarity(
        background,
        species,
        head,
        eyes,
        mouth,
        clothes,
        accessory
    );

    const onChangeNumber = (event: any) => {
        setSearchRarityNumberState(event.target.value);
    }

    return (
        <InformationBox backgroundColor="#45EF8B">
            <div css={rarityContiner}>
                <div style={{ marginTop: "15vh" }}>
                    <TitleText textColor="#000">AP COLLECTION</TitleText>
                </div>
                <div css={filterBackgroundStyle}>
                    <div style={{ marginTop: "5vh" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div>
                                <ImageBox imageUrl={imageUrlState}>
                                    {apNameState}
                                </ImageBox>
                                <div style={{ display: "flex" }}>
                                    <Button
                                        width="150px"
                                        height="35px"
                                        onClick={onClick}
                                        fontSize="1.5vw"
                                    >
                                        Search
                                </Button>
                                    <Button
                                        width="200px"
                                        height="35px"
                                        onClick={onClickApName}
                                        fontSize="1.5vw"
                                    >
                                        Search Number
                                </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '2vh' }}>
                        <TextFieldBox onChange={onChangeNumber}>
                            Ap Number
                        </TextFieldBox>
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
    justify-content: center;
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
