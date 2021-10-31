import { css } from "@emotion/react";

import { IFilterItem } from "./FilterItem.interface";

const FilterItem: React.FC<IFilterItem.IProps> = ({ itemName, itemList }) => {
    const itemOnClick = (item: string) => {
        localStorage.setItem(itemName, item.toLowerCase());
    };

    const sortItemList = itemList.sort();

    const items = sortItemList.map(item => (
        // eslint-disable-next-line react/jsx-key
        <div>
            {item !== "" ? (
                <div
                    css={itemStyle}
                    key={item}
                    onClick={() => itemOnClick(item)}
                >
                    {item}
                </div>
            ) : (
                <div style={{ width: "100%", height: "100%" }}></div>
            )}
        </div>
    ));
    return (
        <>
            <div css={itemsContainer}>{items.slice(0, 7)}</div>{" "}
            <div css={itemsContainer}>{items.slice(7, 14)}</div>{" "}
            <div css={itemsContainer}>{items.slice(14, 21)}</div>{" "}
            <div css={itemsContainer}>{items.slice(21, 28)}</div>{" "}
            <div css={itemsContainer}>{items.slice(28, 35)}</div>{" "}
            <div css={itemsContainer}>{items.slice(35, 42)}</div>{" "}
        </>
    );
};

const itemsContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const itemStyle = css`
    background-color: #fff;
    color: #000;
    width: 100%;
    text-align: center;
    border: 2px solid #000;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 40px;
    cursor: pointer;
    font-size: 1vw;
`;

export default FilterItem;
