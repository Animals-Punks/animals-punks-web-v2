import { css } from "@emotion/react";
import {
    ElementBox,
    CenterText,
} from "../../../../common/components";

const IntroDuceBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#000">
            <CenterText>
                <div css={textStyle}>
                    <div css={titleTextStyle}>INTRODUCE</div>
                    <div css={descriptionTextStyle}>
                        클레이튼(KLAY)기반 NFT <br /> 무작위로 생성된 10,000개의
                        카툰풍
                        <br /> ANIMALS PUNKS
                    </div>
                </div>
            </CenterText>
        </ElementBox>
    );
};

const textStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const titleTextStyle = css`
    font-weight: bold;
    font-size: 60px;
`

const descriptionTextStyle = css`
    font-weight: regular;
    font-size: 20px;
    text-align: center;
`

export default IntroDuceBox;
