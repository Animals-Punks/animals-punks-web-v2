import { useSetRecoilState } from "recoil";
import Link from "next/link";

import { Modal, Button } from "@common/components";
import {
    changeNameStateAtom,
    modalAtom,
} from "@common/services/recoil/modalAtom";
import { ITransactionResult } from "./TransactionResult.interface";

const TransactionResultModal: React.FC<ITransactionResult.IProps> = ({
    titleText,
    subText,
}) => {
    const setModalState = useSetRecoilState(modalAtom);
    const setChangeNameState = useSetRecoilState(changeNameStateAtom);

    const onClickCloseModal = () => {
        setModalState(false);
        setChangeNameState("");
    };

    const onClickRedirection = () => {

        setModalState(false);
        setChangeNameState("");
    }

    return (
        <div>
            <Modal titleText={titleText}>
                {subText}
                <div style={{ display: "flex", marginTop: "4vh" }}>
                    <Link href="https://dogesound.club/">
                        <Button
                            width="20vw"
                            height="4vh"
                            onClick={onClickRedirection}
                            fontSize="1vw"
                        >
                            Go to DSC
                        </Button>
                    </Link>
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

export default TransactionResultModal;
