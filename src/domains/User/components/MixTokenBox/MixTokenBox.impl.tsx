import { css, keyframes } from "@emotion/react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { modalAtom } from "@common/services/recoil/modalAtom";

import {
    InformationBox,
    CenterText,
    TitleText,
    Button,
    Modal,
    TextFieldBox,
} from "@common/components";
import { searchApNameState } from "@common/services/recoil/updateNameState";
import { userService } from "../../services";
import { useState } from "react";

const MixTokenBox: React.FC = () => {
    const [modalState, setModelState] = useRecoilState(modalAtom);
    const [searchApName, setSearchApName] = useRecoilState(searchApNameState);
    const [resultApName, setResultApName] = useState("");
    const [changeNameState, setChangeNameState] = useState("");

    const connectMetaMask = async () => {
        const metaMask: any | undefined = (window as any).ethereum;
        if (metaMask !== undefined) {
            metaMask.request({ method: "eth_requestAccounts" });
            metaMask.enable();
        }
    };

    const connectKaikas = () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            klaytn.enable();
        }
    };

    const onSubmitNaming = () => {
        setModelState(!modalState);
    };

    const onClickCloseModal = () => {
        setModelState(false);
        setChangeNameState("");
    }

    const onClickChangeApName = () => {
        setChangeNameState("Change");
    }

    const onClickRemoveApName = () => {
        setChangeNameState("Remove");
    }

    const onSearchAp = async () => {
        const apName = await userService.getApName({ apNumber: searchApName });
        if (apName === null) return;
        setResultApName(apName.nftName);
        return;
    }

    return (
        <>
            {modalState ? (
                <>
                    {
                        changeNameState === "" ? (
                            <div css={modalContainer}>
                                <Modal titleText="Change Animals Punks Name!">
                                    연동이 되어 있는 Kaikas 지갑에 있는
                                    Animals Punks의 이름을 변경해보세요! <br />
                                    Animals Punks의 이름은 여러분의 것입니다 😁
                                    <div style={{ display: "flex", marginTop: "10vh" }}>
                                        <Button
                                            width="10vw"
                                            height="4vh"
                                            fontSize="1vw"
                                            onClick={onClickChangeApName}
                                        >
                                            Change
                                        </Button>
                                        <Button
                                            width="10vw"
                                            height="4vh"
                                            fontSize="1vw"
                                            onClick={onClickRemoveApName}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "4vh" }}>
                                        <Button
                                            width="10vw"
                                            height="4vh"
                                            onClick={onClickCloseModal}
                                            fontSize="1vw"
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </Modal>
                            </div>
                        ) : (<>
                            {changeNameState === "Change" ? (
                                <>
                                    <div>
                                        <Modal titleText="Change name">
                                            이름이 없는 Animals Punks의 경우는 MIX 소모가 되지 않습니다 <br />
                                            이름이 이미 있을 경우 10 MIX가 소각이 되며 소량의 klay가 <br />
                                            트랜잭션 비용으로 소모 됩니다
                                            <div style={{ display: "flex", marginTop: "10vh" }}>
                                                <div style={{ display: "flex", marginLeft: "2vh" }}>
                                                    <TextFieldBox>AP Number</TextFieldBox>
                                                </div>
                                                <div style={{ display: "flex", marginLeft: "10vh" }}>
                                                    <TextFieldBox>Name</TextFieldBox>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", marginTop: "4vh" }}>
                                                <Button
                                                    width="20vw"
                                                    height="4vh"
                                                    onClick={onClickCloseModal}
                                                    fontSize="1vw"
                                                >
                                                    Change
                                                </Button>
                                            </div>
                                            <div style={{ display: "flex", marginTop: "4vh" }}>
                                                <Button
                                                    width="20vw"
                                                    height="4vh"
                                                    onClick={onClickCloseModal}
                                                    fontSize="1vw"
                                                >
                                                    Close
                                                </Button>
                                            </div>
                                        </Modal>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <Modal titleText="Remove name">
                                            이름을 삭제할 경우 20 MIX가 소각이 됩니다
                                            <div style={{ display: "flex", marginTop: "10vh" }}>
                                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                                    <TextFieldBox>AP Number</TextFieldBox>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", marginTop: "4vh" }}>
                                                <Button
                                                    width="20vw"
                                                    height="4vh"
                                                    onClick={onClickCloseModal}
                                                    fontSize="1vw"
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                            <div style={{ display: "flex", marginTop: "4vh" }}>
                                                <Button
                                                    width="20vw"
                                                    height="4vh"
                                                    onClick={onClickCloseModal}
                                                    fontSize="1vw"
                                                >
                                                    Close
                                                </Button>
                                            </div>
                                        </Modal>
                                    </div>
                                </>
                            )}
                        </>)

                    }
                </>
            ) : (
                <></>
            )}
            <InformationBox backgroundColor="#FFFA96">
                <CenterText>
                    <TitleText textColor="#000">MIX TOKEN</TitleText>
                    <div css={discriptionTextStyle}>
                        Connect your wallet first
                    </div>
                    <div css={buttonsContainer}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div css={connectionButtonContainer}>
                                <Button
                                    width="20vw"
                                    height="10vh"
                                    onClick={connectMetaMask}
                                >
                                    {"CONNECT METAMASK"}
                                </Button>

                                <Button
                                    width="20vw"
                                    height="10vh"
                                    onClick={connectKaikas}
                                >
                                    {"CONNECT KAIKAS"}
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
        </>
    );
};

const modalKeyFrame = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const modalContainer = css`
    animation-name: ${modalKeyFrame};
    animation-duration: 1s;
`;

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
