import { css } from "@emotion/react";

import { IModal } from "./Modal.interface";

const Modal: React.FC<IModal.IProps> = ({ children, titleText }) => {
    return (
        <div css={modalContrainer}>
            <div css={backgroundColorStyle} />
            <div css={modalStyle}>
                <div css={modalContextStyle}>
                    <div css={modalTitleText}>{titleText}</div>
                    {children}
                </div>
            </div>
        </div>
    );
};

const modalContrainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const backgroundColorStyle = css`
    position: absolute;
    margin-top: 100vh;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 75%;
`;

const modalStyle = css`
    position: absolute;
    margin-top: 50%;
    background-color: #fff;
    border-radius: 15px;
`;

const modalContextStyle = css`
    display: flex;
    margin: 5vw;
    flex-direction: column;
`;

const modalTitleText = css`
    font-weight: bold;
    font-size: 4vh;
`;

export default Modal;
