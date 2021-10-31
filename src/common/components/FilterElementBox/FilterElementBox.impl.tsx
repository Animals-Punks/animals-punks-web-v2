import { css } from "@emotion/react";

import { IFilterElementBox } from "./FilterElementBox.interface";

const FilterElementBox: React.FC<IFilterElementBox.IProps> = ({
    onClick,
    children,
}) => {
    return (
        <div css={elementBoxContainer}>
            <div css={elementStyle} onClick={onClick}>
                {children}
            </div>
        </div>
    );
};

const elementBoxContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const elementStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #acffef;
    color: #000;
    font-size: 1.5vh;
    cursor: pointer;
    width: 5vw;
    height: 4vh;
    border: 2px solid #00d7ff;
    margin-bottom: 0.6vh;
    border-radius: 10px;
`;

export default FilterElementBox;
