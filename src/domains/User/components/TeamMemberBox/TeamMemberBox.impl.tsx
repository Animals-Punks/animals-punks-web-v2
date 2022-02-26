import Image from "next/image";
import Slider from "react-awesome-slider";
import withAutoPlay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { css } from "@emotion/react";

import { ElementBox, CenterText } from "@common/components";
import po0 from "@assets/images/Po0.png";
import pix from "@assets/images/Pix.png";
import depp from "@assets/images/depp.png";
import wow from "@assets/images/wow.png";

const TeamMemberBox: React.FC = () => {
    const AutoPlaySlider = withAutoPlay(Slider);

    return (
        <ElementBox backgroundColor="#000">
            <CenterText>
                <div css={titleTextStyle}>AP CREW</div>
                <div css={sliderContainer}>
                    <AutoPlaySlider
                        play={true}
                        cancelOnInteraction={false}
                        interval={6000}
                        buttons={false}
                    >
                        <div>
                            <Image src={po0} width="200vw" height="200vh" />
                            <div css={teamNameStyle}>Po0</div>
                            <div css={memberHelloTextStyle}>
                                I'm a Founder of AnimalsPunks, I will make AnimalsPunks the World Best Project
                            </div>
                        </div>
                        <div>
                            <Image src={pix} width="200vw" height="200vh" />
                            <div css={teamNameStyle}>Pix</div>
                            <div css={memberHelloTextStyle}>
                                I painted Sexy V1 and Cute V2
                            </div>
                        </div>
                        <div>
                            <Image src={depp} width="200vw" height="200vh" />
                            <div css={teamNameStyle}>Depp</div>
                            <div css={memberHelloTextStyle}>
                                Marketing Specialist, Community Manager, General Manager of AnimalsPunks
                            </div>
                        </div>
                        <div>
                            <Image src={wow} width="200vw" height="200vh" />
                            <div css={teamNameStyle}>Wow</div>
                            <div css={memberHelloTextStyle}>
                                I got AnimalsPunks back concerning the developments
                            </div>
                        </div>
                    </AutoPlaySlider>
                </div>
            </CenterText>
        </ElementBox>
    );
};

const titleTextStyle = css`
    font-weight: bold;
    font-size: 4vh;
    color: #fff;
`;

const sliderContainer = css`
    display: flex;
    width: 80vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const teamNameStyle = css`
    margin-top: 10px;
    font-weight: bold;
    font-size: 4vh;
`;

const memberHelloTextStyle = css`
    margin-top: 5%;
    font-size: 2.2vh;
    text-align: center;
`;

export default TeamMemberBox;
