import { css } from "@emotion/react";

import { IMintInfoBox } from "./MintInfoBox.interface";

const MintInfoBox: React.FC<IMintInfoBox.IProps> = ({ children }) => {
    return <div css={boxStyle}>{children}</div>;
};

const boxStyle = css`
    display: flex;
    width: 35vw;
    height: 30vw;
    padding: 10px 10px 10px;
    border-radius: 20px;
    border: solid 5px #fff;
    color: #fff;
    margin: 3vw;
    align-items: baseline;
    /* justify-content: center; */
    overflow: scroll;
`;

export default MintInfoBox;
