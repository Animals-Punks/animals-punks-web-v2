import { css } from "@emotion/react";
import { useSetRecoilState } from "recoil";

import {
    InformationBox,
    TitleText,
    ImageBox,
    Button,
    TextFieldBox,
} from "@common/components";
import { useRarity } from "@User/hooks";
import { searchRarityNumberState } from "@common/services/recoil/updateNameState";

const RarityBox: React.FC = () => {
    const setSearchRarityNumberState = useSetRecoilState(
        searchRarityNumberState
    );

    const { onClickApName, imageUrlState, apNameState } = useRarity();

    const onChangeNumber = (event: any) => {
        setSearchRarityNumberState(event.target.value);
    };

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
                                        width="200px"
                                        height="35px"
                                        onClick={onClickApName}
                                        fontSize="1.5vw"
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginTop: "2vh" }}>
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

export default RarityBox;
