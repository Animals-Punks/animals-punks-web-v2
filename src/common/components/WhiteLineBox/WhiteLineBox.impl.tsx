import { css } from "@emotion/react";

import { IWhiteLineBox } from "./WhiteLineBox.interface";

const WhiteLineBox: React.FC<IWhiteLineBox.IProps> = ({
    children,
    width,
    height,
    isButton,
}) => {
    return (
        <div
            css={whiteLineBoxStyle}
            style={
                isButton === true
                    ? { width: width, height: height, cursor: "pointer" }
                    : { width: width, height: height }
            }
        >
            {children}
        </div>
    );
};

const whiteLineBoxStyle = css`
    display: flex;
    padding: 12px;
    border-radius: 20px;
    border: solid 5px #fff;
    margin: 0.4vw;
    align-items: center;
    justify-content: center;
`;

export default WhiteLineBox;
