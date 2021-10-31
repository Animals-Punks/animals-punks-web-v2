import { css } from "@emotion/react";

import {
    InformationBox,
    CenterText,
    TitleText,
    Button,
} from "@common/components";
import { useMixTokenBox } from "@User/hooks";

const MixTokenBox: React.FC = () => {
    const { isConnectedMetaMask, isConnectedKaikas } = useMixTokenBox();

    const connectMetaMask = async () => {
        const metaMask: any | undefined = (window as any).ethereum;
        if (metaMask === undefined) alert("Please install metamask first.");
        await metaMask.enable();
    };

    const connectKaikas = () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn === undefined) alert("Please install kaikas first.");
        klaytn.enable();
    };

    const onSubmitNaming = () => {
        alert("comming soon");
    };

    return (
        <InformationBox backgroundColor="#FFFA96">
            <CenterText>
                <TitleText textColor="#000">MIX TOKEN</TitleText>
                <div css={discriptionTextStyle}>
                    Please connect your wallet first
                </div>
                <div css={buttonsContainer}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div css={connectionButtonContainer}>
                            <Button
                                width="20vw"
                                height="10vh"
                                onClick={
                                    isConnectedMetaMask
                                        ? undefined
                                        : connectMetaMask
                                }
                            >
                                {isConnectedMetaMask
                                    ? "V1 WALLET CONNECTION"
                                    : "CONNECT V1 WALLET"}
                            </Button>

                            <Button
                                width="20vw"
                                height="10vh"
                                onClick={
                                    isConnectedKaikas
                                        ? undefined
                                        : connectKaikas
                                }
                            >
                                {isConnectedKaikas
                                    ? "V2 WALLET CONNECTION"
                                    : "CONNECT V2 WALLET"}
                            </Button>
                        </div>
                    </div>
                    <div css={processButtonContainer}>
                        <Button
                            width="20vw"
                            height="8vh"
                            onClick={onSubmitNaming}
                        >
                            NAMING AP
                        </Button>
                        {/* <Button width="20vw" height="8vh">
                            CHECK TRANSACTIONS
                        </Button> */}
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

const connectionButtonContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 50vw;
`;

const processButtonContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    align-items: center;
    text-align: center;
`;

export default MixTokenBox;
