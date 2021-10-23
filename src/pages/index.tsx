import { css } from "@emotion/react";
import type { NextPage } from "next";

import {
    IntroBox,
    IntroDuceBox,
    RoadMapBox,
    RarityBox,
    TeamMemberBox,
    MixTokenBox,
} from "../domains/User/components";

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
                    <MixTokenBox />
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
