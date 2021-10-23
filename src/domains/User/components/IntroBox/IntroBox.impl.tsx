import { css } from "@emotion/react";

import { InformationBox } from "../../../../common/components";

const IntroBox: React.FC = () => {
    return (
            <InformationBox>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Chewy"
                />
                <div css={welcomTextStyle}>ANIMALS PUNKS</div>
            </InformationBox>
    );
};

const welcomTextStyle = css`
    font-family: 'Chewy', sans-seri;
    font-size: 80px;
    text-shadow: 5px 5px 5px #000;
    color: white;
    display: flex;
    margin-top: 35%;
    justify-content: center;
`;

export default IntroBox;
