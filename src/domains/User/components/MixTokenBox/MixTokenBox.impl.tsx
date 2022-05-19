import { css } from "@emotion/react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
    changeNameStateAtom,
    modalAtom,
} from "@common/services/recoil/modalAtom";

import {
    InformationBox,
    CenterText,
    TitleText,
    Button,
} from "@common/components";
import {
    SelectNameLogicModal,
    ChangeApNameModal,
    DeleteApNameModal,
} from "@User/components";

const MixTokenBox: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(modalAtom);
    const changeNameState = useRecoilValue(changeNameStateAtom);

    const onSubmitNaming = () => {
        setModalState(!modalState);
    };

    return (
        <>
            {modalState ? (
                <>
                    {changeNameState === "" ? (
                        <SelectNameLogicModal />
                    ) : (
                        <>
                            {changeNameState === "Change" ? (
                                <ChangeApNameModal />
                            ) : (
                                <DeleteApNameModal />
                            )}
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
            <InformationBox backgroundColor="#FFFA96">
                <CenterText>
                    <div style={{ display: 'flex', marginBottom: '10vh' }}>
                        <TitleText textColor="#000">MIX TOKEN</TitleText>
                    </div>
                    <div css={buttonContainer}>
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

const discriptionTextStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 1.8vw;
    height: 8vh;
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

const buttonContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
`

const processButtonContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    align-items: center;
    text-align: center;
`;

export default MixTokenBox;
