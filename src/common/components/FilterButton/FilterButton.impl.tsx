import { css } from "@emotion/react";

import { IFilterButton } from "./FilterButton.interface";

const FilterButton: React.FC<IFilterButton.IProps> = ({
    onClick,
    children,
}) => {
    return (
        <div css={buttonContainer}>
            <div css={buttonStyle} onClick={onClick}>
                {children}
            </div>
        </div>
    );
};

const buttonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const buttonStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #40e0d0;
    color: #000;
    font-size: 1.4vw;
    cursor: pointer;
    width: 10vw;
    height: 5vh;
    border: 2px solid;
    border-radius: 5px;
`;

export default FilterButton;
