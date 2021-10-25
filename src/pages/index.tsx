import type { NextPage } from "next";
import { css } from "@emotion/react";

import {
    IntroBox,
    IntroDuceBox,
    MixTokenBox,
    RarityBox,
    RoadMapBox,
    TeamMemberBox,
    PartnerShipBox,
    ConnectUsBox,
} from "@User/components";

const Home: NextPage = () => {
    return (
        <div css={containerWraper}>
            <div css={headerContainterStyle}>
                <IntroBox />
                <div css={elementContainerStyle}>
                    <IntroDuceBox />
                    <RoadMapBox />
                    <RarityBox />
                    <TeamMemberBox />
                    <PartnerShipBox />
                    <MixTokenBox />
                    <ConnectUsBox />
                </div>
            </div>
        </div>
    );
};

const containerWraper = css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const headerContainterStyle = css`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`;

const elementContainerStyle = css`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`;

export default Home;
