import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { useState } from "react";

import {
    Modal,
    TextFieldBox,
    Button,
    TransactionResultModal,
} from "@common/components";
import {
    changeNameStateAtom,
    modalAtom,
    resultApNameStateAtom,
} from "@common/services/recoil/modalAtom";
import {
    apNameStateAtom,
    searchApNameState,
} from "@common/services/recoil/updateNameState";
import { userService } from "@User/services";

const ChangeApNameModal: React.FC = () => {
    const setModalState = useSetRecoilState(modalAtom);
    const setChangeNameState = useSetRecoilState(changeNameStateAtom);
    const setResultApName = useSetRecoilState(resultApNameStateAtom);
    const searchApName = useRecoilValue(searchApNameState);
    const setSearchApName = useSetRecoilState(searchApNameState);
    const [apNameState, setApNameState] = useRecoilState(apNameStateAtom);
    const [resultState, setResultState] = useState("false");

    const onClickCloseModal = () => {
        setModalState(false);
        setChangeNameState("");
    };

    const onSearchAp = async () => {
        const apName = await userService.getApName({ apNumber: searchApName });
        if (apName.nftName === "") {
            const result = await userService.createApName(
                false,
                searchApName,
                apNameState
            );
            if (result === true) setResultState("true");
        } else {
            const result = await userService.createApName(
                true,
                searchApName,
                apNameState
            );
            if (result === true) setResultState("true");
        }
        setResultApName(apName.nftName);
    };

    const onChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchApName(Number(event.target.value));
    };

    const onSubmitName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApNameState(event.target.value);
    };

    if (resultState === "true") {
        return (
            <>
                <TransactionResultModal
                    titleText="Change Animals Punks Name Success!"
                    subText="?????? ????????? ?????????????????????!"
                />
            </>
        );
    } else {
        return (
            <div>
                <Modal titleText="Change name">
                    ????????? ?????? Animals Punks??? ????????? MIX ????????? ??????
                    ????????????. <br />
                    ????????? ?????? ?????? ?????? 10 MIX??? ????????? ?????? ?????????
                    klay??? <br /> ???????????? ???????????? ?????? ?????????.
                    <div style={{ display: "flex", marginTop: "10vh" }}>
                        <div style={{ display: "flex", marginLeft: "2vh" }}>
                            <TextFieldBox onChange={onChangeNumber}>
                                AP Number
                            </TextFieldBox>
                        </div>
                        <div style={{ display: "flex", marginLeft: "10vh" }}>
                            <TextFieldBox onChange={onSubmitName}>
                                Name
                            </TextFieldBox>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginTop: "4vh" }}>
                        <Button
                            width="20vw"
                            height="4vh"
                            onClick={onSearchAp}
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
        )
    }
};

export default ChangeApNameModal;
