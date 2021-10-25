import Image from "next/image";
import { css } from "@emotion/react";

import { CenterText, LinkNewTap } from "@common/components";
import discodeLogo from "@assets/images/discode.png";
import kakaoLogo from "@assets/images/kakao.png";
import twitterLogo from "@assets/images/twitter.png";
import openSeaLogo from "@assets/images/openSea.png";
import mediumLogo from "@assets/images/medium.png";

const ConnectUsBox: React.FC = () => {
    return (
        <div css={connectUsBoxContainer}>
            <CenterText>
                <div css={connectUsTextStyle}>ConnectUs</div>
                <div css={imageContainer}>
                    <LinkNewTap url="https://discord.gg/Wvyeasb9">
                        <Image src={discodeLogo} height="80%" width="80%" />
                    </LinkNewTap>
                    <LinkNewTap url="https://open.kakao.com/o/gnaiJczd">
                        <Image src={kakaoLogo} height="80%" width="80%" />
                    </LinkNewTap>
                    <LinkNewTap url="https://twitter.com/AnimalsPunks">
                        <Image src={twitterLogo} height="80%" width="80%" />
                    </LinkNewTap>
                    <LinkNewTap url="https://opensea.io/collection/animalspunks-v2">
                        <Image src={openSeaLogo} height="80%" width="80%" />
                    </LinkNewTap>
                    <LinkNewTap url="https://medium.com/@animalspunks">
                        <Image src={mediumLogo} height="80%" width="80%" />
                    </LinkNewTap>
                </div>
            </CenterText>
        </div>
    );
};

const connectUsBoxContainer = css`
    width: 100vw;
    height: 35vh;
    background-color: #82beff;
`;

const connectUsTextStyle = css`
    color: #000;
    font-weight: bold;
    font-size: 2.5vw;
`;

const imageContainer = css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 60vw;
    margin-top: 5%;
`;

export default ConnectUsBox;
