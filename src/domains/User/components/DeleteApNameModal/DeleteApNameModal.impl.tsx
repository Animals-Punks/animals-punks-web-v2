import { useSetRecoilState } from "recoil";
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
} from "@common/services/recoil/modalAtom";
import { userService } from "@User/services";

const DeleteApNameModal: React.FC = () => {
    const setModalState = useSetRecoilState(modalAtom);
    const setChangeNameState = useSetRecoilState(changeNameStateAtom);
    const [transactionState, setTransactionState] = useState(false);
    const [removeNumber, setRemoveNumber] = useState(0);

    const onClickCloseModal = () => {
        setModalState(false);
        setChangeNameState("");
    };

    const onClickRemoveName = async () => {
        const result = await userService.removeApName(removeNumber);
        setTransactionState(result);
    };

    const onChangeName = (evnet: any) => {
        setRemoveNumber(Number(evnet.target.value));
    };

    return (
        <>
            {transactionState ? (
                <TransactionResultModal
                    titleText="Remove Animals Punks Name Success!"
                    subText="이름 삭제가 완료되었습니다!"
                />
            ) : (
                <div>
                    <Modal titleText="Remove name">
                        이름을 삭제할 경우 20 MIX가 소각이 됩니다.
                        <div style={{ display: "flex", marginTop: "10vh" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <TextFieldBox onChange={onChangeName}>
                                    AP Number
                                </TextFieldBox>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "4vh" }}>
                            <Button
                                width="20vw"
                                height="4vh"
                                onClick={onClickRemoveName}
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
            )}
        </>
    );
};

export default DeleteApNameModal;
