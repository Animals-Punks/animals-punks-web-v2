import { css } from "@emotion/react";
import type { NextPage } from "next";

import { IntroBox, IntroDescriptionBox } from "../domains/User/components";

const Home: NextPage = () => {
    return (
        <>
            <div css={headerContainterStyle}>
                <IntroBox />
            </div>
            <div css={elementContainerStyle}>
                <IntroDescriptionBox />
            </div>
        </>
    );
};

const headerContainterStyle = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
`;

const elementContainerStyle = css`
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
`

export default Home;
