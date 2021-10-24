import { css } from "@emotion/react";
import { ElementBox, CenterText } from "@common/components";

const IntroDuceBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#000">
            <CenterText>
                <div css={titleTextStyle}>INTRODUCE</div>
                <div css={descriptionTextStyle}>
                    클레이튼(KLAY)기반 NFT <br /> 무작위로 생성된 10,000개의
                    카툰풍
                    <br /> ANIMALS PUNKS
                </div>
            </CenterText>
        </ElementBox>
    );
};

const titleTextStyle = css`
    font-weight: bold;
    font-size: 4vw;
`;

const descriptionTextStyle = css`
    font-weight: regular;
    font-size: 1.7vw;
    text-align: center;
`;

export default IntroDuceBox;
