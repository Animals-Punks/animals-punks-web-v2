import { css, keyframes } from "@emotion/react";
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

    const onClickChangeApName = () => {
        setChangeNameState("Change");
    };

    const onClickRemoveApName = () => {
        setChangeNameState("Remove");
    };

    return (
        <div css={modalContainer}>
            <Modal titleText="Change Animals Punks Name!">
                연동 되어 있는 Kaikas 지갑 속 Animals Punks의 이름을
                변경해보세요!
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
    animation-duration: 0.7s;
`;

export default SelectNameLogicModal;
