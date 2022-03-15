
import { css } from "@emotion/react";

import { BackgroundImage, HeaderBox } from "@common/components";

const IntroBox: React.FC = () => {
    return (
        <>
            {/* <HeaderBox /> */}
            <BackgroundImage>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Chewy"
                />
                <div css={welcomTextStyle}>ANIMALS PUNKS</div>
            </BackgroundImage>
        </>
    );
};

const welcomTextStyle = css`
    font-family: "Chewy", sans-seri;
    font-size: 7vw;
    text-shadow: 5px 5px 5px #000;
    color: white;
    position: absolute;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100vw;
    text-align: center;
    margin-top: 7vw;
`;

export default IntroBox;
