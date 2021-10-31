import { css } from "@emotion/react";
import { useState } from "react";

import {
    InformationBox,
    TitleText,
    FilterElementBox,
    ImageBox,
    FilterItem,
    Button,
} from "@common/components";
import { useRarity } from "@User/hooks";
import { rowsList } from "@assets/metaDatas/rows";
import {
    mouthItemList,
    backgroundList,
    accessoryList,
    clothesList,
    headList,
    speciesList,
    eyeslist,
} from "@assets/metaDatas/items";

const RarityBox: React.FC = () => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([""]);

    const onClickItem = (itemName: string) => {
        if (itemName === "배경") setItemList(backgroundList);
        if (itemName === "동물") setItemList(speciesList);
        if (itemName === "머리") setItemList(headList);
        if (itemName === "눈") setItemList(eyeslist);
        if (itemName === "입") setItemList(mouthItemList);
        if (itemName === "옷") setItemList(clothesList);
        if (itemName === "악세사리") setItemList(accessoryList);
        setItem(itemName);
    };
    const { onClick, imageUrlState, apNameState } = useRarity();

    const filterRows = rowsList.map(row => (
        <FilterElementBox key={row} onClick={() => onClickItem(row)}>
            {row}
        </FilterElementBox>
    ));

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
                    <div css={filterElementContainer}>{filterRows}</div>
                    <FilterItem itemList={itemList} itemName={item} />
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
