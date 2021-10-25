import Image from "next/image";
import { css } from "@emotion/react";

import backgroundImage from "@assets/images/headerImage.png";

const BackgroundImage: React.FC = ({ children }) => {
    return (
        <div css={backgroundImageStyle}>
            <Image src={backgroundImage} />
            <div css={childrenStyle}>{children}</div>
        </div>
    );
};

const backgroundImageStyle = css`
    display: flex;
`;

const childrenStyle = css`
    position: absolute;
    z-index: 100;
    margin-top: 0;
`;

export default BackgroundImage;
