import { InformationBox, CenterText, TitleText } from "@common/components";

const RarityBox: React.FC = () => {
    return (
        <InformationBox backgroundColor="white">
            <CenterText>
                <TitleText textColor="#000">RARITY</TitleText>
            </CenterText>
        </InformationBox>
    );
};

export default RarityBox;
