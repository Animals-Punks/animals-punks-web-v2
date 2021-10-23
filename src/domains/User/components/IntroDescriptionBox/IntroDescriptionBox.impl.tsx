import {
    ElementBox,
    TitleText,
    DescriptionText,
} from "../../../../common/components";

const IntroDescriptionBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#000">
            <TitleText>INTRODUCE</TitleText>
            <DescriptionText>
                <div style={{textAlign: 'center'}}>
                    클레이튼(KLAY)기반 NFT <br /> 무작위로 생성된 10,000개의
                    카툰풍
                    <br /> ANIMALS PUNKS
                </div>
            </DescriptionText>
        </ElementBox>
    );
};

export default IntroDescriptionBox;
