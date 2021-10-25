import Image from "next/image";
import { css } from "@emotion/react";

import nftzLogo from "@assets/images/nftz.png";
import dogeLogo from "@assets/images/doge.png";
import { ElementBox, CenterText, TitleText } from "@common/components";

const PartnerShipBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#fff">
            <CenterText>
                <TitleText textColor="#000">PARTNERSHIP</TitleText>
                <div css={imageContainer}>
                    <Image src={nftzLogo} />
                    <Image src={dogeLogo} />
                </div>
            </CenterText>
        </ElementBox>
    );
};

const imageContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6%;
    width: 50vw;
`;

export default PartnerShipBox;
