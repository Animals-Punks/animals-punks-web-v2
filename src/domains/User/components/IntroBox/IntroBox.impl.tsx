import Image from "next/image";
import { css, keyframes } from "@emotion/react";
import Link from "next/link";

import { BackgroundImage } from "@common/components";
import { PATH } from "@/constant";
import logo from "@assets/images/headerIcon.png";

const IntroBox: React.FC = () => {
    return (
        <>
            <div css={headerBox}>
                <div css={imageContainer}>
                    <Image src={logo} css={imageStyle} />
                </div>
                <div css={titleTextStyle}> AnimalsPunks</div>
                <Link href={PATH.main}>
                    <div css={teamTextStyle}>Home</div>
                </Link>
                <Link href={PATH.ticket}>
                    <div css={menuTextStyle}>Ticket</div>
                </Link>
            </div>
            <div css={barStyle}></div>
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

const headerBox = css`
    width: 100vw;
    /* padding: 12px 50px 18px 20px; */
    background-color: #fff;
    display: flex;
`;

const titleTextStyle = css`
    width: 259px;
    height: 53px;
    margin: 9px 462px 8px 20px;
    font-family: Roboto;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #000;
`;

const imageContainer = css`
    background-color: #fff;
    display: flex;
    margin: 5px;
`;

const imageStyle = css`
    display: flex;
`;

const barStyle = css`
    height: 0;
    border: solid 2px #000;
`;

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

const menuTextStyle = css`
    width: 54px;
    height: 26px;
    margin: 22px 40px 22px 462px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    cursor: pointer;
`;

const teamTextStyle = css`
    width: 54px;
    height: 26px;
    margin: 22px 40px 22px 462px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    cursor: pointer;
`;

export default IntroBox;
