import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { useState } from "react";

import { Modal, TextFieldBox, Button } from "@common/components";
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
    const [transactionState, setTransactionState] = useState(false);

    const onClickCloseModal = () => {
        setModalState(false);
        setChangeNameState("");
    };

    const onSearchAp = async () => {
        const apName = await userService.getApName({ apNumber: searchApName });
        if (apName === null) {
            const result = await userService.createApName(
                false,
                searchApName,
                apNameState
            );
            setTransactionState(result);
        } else {
            const result = await userService.createApName(
                true,
                searchApName,
                apNameState
            );
            setTransactionState(result);
        }
        setResultApName(apName.nftName);
    };

    const onChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchApName(Number(event.target.value));
    };

    const onSubmitName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApNameState(event.target.value);
    };

    return (
        <div>
            <Modal titleText="Change name">
                이름이 없는 Animals Punks의 경우는 MIX 소모가 되지 않습니다.{" "}
                <br />
                이름이 이미 있을 경우 10 MIX가 소각이 되며 소량의 klay가 <br />
                트랜잭션 비용으로 소모 됩니다.
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
    );
};

export default ChangeApNameModal;
