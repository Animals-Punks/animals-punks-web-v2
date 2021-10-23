import { css } from "@emotion/react";
import Image from "next/image";

import logo from "../../../assets/images/headerImage.png";

const InformationBox: React.FC = ({ children }) => {
    return <div css={informationBoxStyle}>{children}</div>;
};

const informationBoxStyle = css`
    width: 100vw;
    height: 100vh;
`;

export default InformationBox;
