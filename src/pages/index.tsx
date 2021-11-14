import type { NextPage } from "next";
import { css } from "@emotion/react";
import Head from "next/head";
import { RecoilRoot } from "recoil";

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
        <>
            <RecoilRoot>
                <Head>
                    <link rel="header icon" href="/headerIcon.png" />
                    <title>Animals Punks V2</title>
                </Head>
                <div css={containerWraper}>
                    <div css={headerContainterStyle}>
                        <IntroBox />
                        <div css={elementContainerStyle}>
                            <IntroDuceBox />
                            <TeamMemberBox />
                            <RoadMapBox />
                            <RarityBox />
                            <MixTokenBox />
                            <PartnerShipBox />
                            <ConnectUsBox />
                        </div>
                    </div>
                </div>
            </RecoilRoot>
        </>
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
