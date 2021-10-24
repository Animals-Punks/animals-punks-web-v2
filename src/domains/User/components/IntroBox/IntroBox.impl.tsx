import { css } from "@emotion/react";
import Image from "next/image";

import { InformationBox } from "@common/components";
import logo from "@assets/images/doge.png";
import backgroundImage from "@assets/images/headerImage.png";

const IntroBox: React.FC = () => {
    return (
        <div css={headerStyle}>
            <div style={{ position: "absolute", zIndex: 11 }}>
                <Image src={logo} css={partnerImage} />
            </div>
            {/* <div style={{ position: "absolute", zIndex: 10 }}> */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Chewy"
            />
            <div css={welcomTextStyle}>ANIMALS PUNKS</div>
            {/* </div> */}
        </div>
    );
};

const welcomTextStyle = css`
    font-family: "Chewy", sans-seri;
    font-size: 7vw;
    text-shadow: 5px 5px 5px #000;
    color: white;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const partnerImage = css`
    position: absolute;
    z-index: 10;
    display: flex;
`;

const backgroundImageStyle = css`
    position: absolute;
    z-index: -1;
`;

const headerStyle = css`
    background-image: url("./assets/images/headerImage.png");
    width: 100vw;
    height: 49vh;
`;

export default IntroBox;
