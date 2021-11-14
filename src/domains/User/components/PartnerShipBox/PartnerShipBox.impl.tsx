import Image from "next/image";
import { css } from "@emotion/react";

import nftzLogo from "@assets/images/nftz.png";
import dogeLogo from "@assets/images/doge.png";
import ecoverseLogo from "@assets/images/ecoverse.png";
import {
    ElementBox,
    CenterText,
    TitleText,
    LinkNewTap,
} from "@common/components";

const PartnerShipBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#fff">
            <CenterText>
                <TitleText textColor="#000">PARTNERSHIP</TitleText>
                <div css={imageContainer}>
                    <LinkNewTap url="https://nftz.co.in/">
                        <Image src={nftzLogo} />
                    </LinkNewTap>
                    <LinkNewTap url="https://dogesound.club/">
                        <Image src={dogeLogo} />
                    </LinkNewTap>
                    <LinkNewTap url="https://www.ecoversekorea.com/">
                        <Image src={ecoverseLogo} width="150px" height="150px" />
                    </LinkNewTap>
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
