import { css } from "@emotion/react";
import type { NextPage } from "next";

import { IntroBox } from '../domains/User/components';

const Main: NextPage = () => {
    return (
        <div css={templateStyle}>
            <div>
                <IntroBox />
            </div>
        </div>
    );
};

const templateStyle = css`
    max-width: 762px;
    height: 400px;
    margin: auto;
    background: #fafafa;
    display: flex;
    flex-wrap: wrap;
    & > div {
        flex: 1 1 40%;
        border: 1px solid #000;
        height: 50%;
    }
`;

export default Main;
