import { css, keyframes } from "@emotion/react";
import Link from "next/link";

import { BackgroundImage } from "@common/components";
import { PATH } from "@/constant";

const IntroBox: React.FC = () => {
    return (
        <>
            <BackgroundImage>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Chewy"
                />
                <div css={teamTextStyle}>Team</div>
                <div css={namingTextStyle}>Naming</div>
                <Link href={PATH.ticket}>
                <div css={menuTextStyle}>Ticket</div>
                </Link>
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

const hoverKeyFrame = keyframes`
    0% {
        /* font-size: 2vw; */
    }
    100% {
        font-size: 2.3vw;
        color: #FFFA96;
    }
`;

const menuTextStyle = css`
    font-family: "Chewy", sans-seri;
    text-shadow: 5px 5px 5px #000;
    font-size: 2vw;
    color: white;
    position: absolute;
    z-index: 48;
    text-align: right;
    width: 90vw;
    cursor: pointer;
    &:hover {
        animation-name: ${hoverKeyFrame};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

const namingTextStyle = css`
    font-family: "Chewy", sans-seri;
    text-shadow: 5px 5px 5px #000;
    font-size: 2vw;
    color: white;
    position: absolute;
    z-index: 49;
    text-align: right;
    width: 82.5vw;
    cursor: pointer;
    &:hover {
        animation-name: ${hoverKeyFrame};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

const teamTextStyle = css`
    font-family: "Chewy", sans-seri;
    text-shadow: 5px 5px 5px #000;
    font-size: 2vw;
    color: white;
    position: absolute;
    z-index: 50;
    text-align: right;
    width: 73vw;
    cursor: pointer;
    &:hover {
        animation-name: ${hoverKeyFrame};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

export default IntroBox;
