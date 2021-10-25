import { css } from "@emotion/react";

import { ElementBox, CenterText, TitleText } from "@common/components";

const IntroDuceBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#000">
            <CenterText>
                <TitleText textColor="#fff">INTRODUCE</TitleText>
                <div css={descriptionTextStyle}>
                    클레이튼(KLAY)기반 NFT <br /> 무작위로 생성된 10,000개의
                    카툰풍
                    <br /> ANIMALS PUNKS
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
