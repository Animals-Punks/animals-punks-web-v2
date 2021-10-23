import { ElementBox, CenterText, TitleText } from "@/common/components";

const TeamMemberBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#828282">
            <CenterText>
                <TitleText textColor="#000">
                    TEAM MEMBERS
                </TitleText>
            </CenterText>
        </ElementBox>
    );
};

export default TeamMemberBox;
