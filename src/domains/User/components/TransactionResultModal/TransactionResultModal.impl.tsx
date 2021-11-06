import { useSetRecoilState } from "recoil";

import { Modal, Button } from "@common/components";
import {
    changeNameStateAtom,
    modalAtom,
} from "@common/services/recoil/modalAtom";

const SelectNameLogicModal: React.FC = () => {
    const setModalState = useSetRecoilState(modalAtom);
    const setChangeNameState = useSetRecoilState(changeNameStateAtom);

    const onClickCloseModal = () => {
        setModalState(false);
        setChangeNameState("");
    };

    return (
        <div>
            <Modal titleText="Transaction successful!!">
                성공된 트랜잭션을 확인하세요!
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
    );
};

export default SelectNameLogicModal;
