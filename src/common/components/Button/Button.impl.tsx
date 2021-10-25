import { IButton } from "@common/components/Button/Button.interface";
import { css } from "@emotion/react";

const Button: React.FC<IButton.IProps> = ({
    children,
    width,
    height,
    onClick,
}) => {
    return (
        <div css={buttonContainer} onClick={onClick}>
            <div css={buttonStyle} style={{ width, height }}>
                {children}
            </div>
        </div>
    );
};

const buttonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const buttonStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    border-radius: 15px;
    color: #fff;
    font-size: 1.4vw;
    width: 100%;
    cursor: pointer;
`;
export default Button;
