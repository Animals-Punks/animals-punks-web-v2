import { css } from "@emotion/react";

import { ElementBox, CenterText, TitleText } from "@common/components";
import { useEffect } from "react";

const IntroDuceBox: React.FC = () => {
    useEffect(() => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            klaytn.enable();
        }
    });

    return (
        <ElementBox backgroundColor="#000">
            <CenterText>
                <TitleText textColor="#fff">INTRODUCE</TitleText>
                <div css={descriptionTextStyle}>
                    Klaytn(Klay) based NFT Generative Project.
                    <br />
                    Randomly generated 10,000 Cartoon Style,
                    <br /> "ANIMALS PUNKS"
                </div>
            </CenterText>
        </ElementBox>
    );
};

const descriptionTextStyle = css`
    font-weight: regular;
    font-size: 1.7vw;
    text-align: center;
`;

export default IntroDuceBox;
