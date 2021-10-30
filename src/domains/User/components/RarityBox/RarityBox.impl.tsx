import { css } from "@emotion/react";

import {
    InformationBox,
    CenterText,
    TitleText,
    FilterButton,
    FilterElementBox,
    ImageBox,
} from "@common/components";
import { useRarity } from "@User/hooks";

const RarityBox: React.FC = () => {
    const {
        setBackgroundState,
        setSpeciesState,
        setHeadState,
        setEyesState,
        setMouthState,
        setClothesState,
        setAccessoriesState,
        onClick,
        imageUrlState,
        apNameState,
    } = useRarity();

    return (
        <InformationBox backgroundColor="#fff">
            <CenterText>
                <TitleText textColor="#000">RARITY</TitleText>
                <div css={filterBackgroundStyle}>
                    <div style={{ display: "fix", marginRight: "15vw" }}>
                        <FilterElementBox onClick={onClick}>
                            배경
                        </FilterElementBox>
                        <FilterElementBox onClick={onClick}>
                            동물
                        </FilterElementBox>
                        <FilterElementBox onClick={onClick}>
                            머리
                        </FilterElementBox>
                        <FilterElementBox onClick={onClick}>
                            눈
                        </FilterElementBox>
                        <FilterElementBox onClick={onClick}>
                            입
                        </FilterElementBox>
                        <FilterElementBox onClick={onClick}>
                            옷
                        </FilterElementBox>
                        <FilterElementBox onClick={onClick}>
                            악세사리
                        </FilterElementBox>
                        <FilterElementBox onClick={onClick}>
                            히든
                        </FilterElementBox>
                        <FilterButton onClick={onClick}>Search</FilterButton>
                    </div>
                    <ImageBox imageUrl={imageUrlState}>{apNameState}</ImageBox>
                </div>
            </CenterText>
        </InformationBox>
    );
};

const filterBackgroundStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 70%;
    background-color: #9bf5ff;
    border-radius: 30px;
    border: 3px solid #000;
`;

export default RarityBox;
