import {
    InformationBox,
    CenterText,
    TitleText,
    Button,
} from "@common/components";
import { css } from "@emotion/react";

const MixTokenBox: React.FC = () => {
    return (
        <InformationBox backgroundColor="#f2f27d">
            <CenterText>
                <TitleText textColor="#000">MIX TOKEN</TitleText>
                <div css={discriptionTextStyle}>
                    Please connect your wallet first
                </div>
                <div css={buttonsContainer}>
                    <div css={connectWalletButtonStyle}>
                        <Button width="20vw" height="10vh">
                            CONNECT WALLET
                        </Button>
                    </div>
                    <div css={processButtonContainer}>
                        <Button width="20vw" height="8vh">
                            NAMING AP
                        </Button>
                        <Button width="20vw" height="8vh">
                            CHECK TRANSACTIONS
                        </Button>
                        <Button width="20vw" height="8vh">
                            GOODS
                        </Button>
                        <Button width="20vw" height="8vh">
                            COMMING SOON
                        </Button>
                    </div>
                </div>
            </CenterText>
        </InformationBox>
    );
};

const discriptionTextStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 1.8vw;
    height: 15vh;
`;

const buttonsContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
`;

const connectWalletButtonStyle = css`
    display: flex;
    align-items: center;
    height: 35%;
`;
const processButtonContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    align-items: center;
`;

export default MixTokenBox;
