import { css } from "@emotion/react";

import { IInformationBox } from "./InformationBox.interface";
import logo from '../../../assets/images/headerImage.png'

const InformationBox: React.FC = ({
    // backgroundImage,
    children,
}) => {
    return (
        <div
            css={InformationBoxStyle}
            // style={{ backgroundImage: backgroundImage }}
        >
            {children}
        </div>
    );
};

const InformationBoxStyle = css`
    width: 100vw;
    height: 100vh;
    background-image: url("../../../assets/images/headerImage.png");
`;

export default InformationBox;
