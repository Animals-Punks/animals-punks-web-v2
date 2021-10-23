import { css } from "@emotion/react";
import { ITitleText } from "./TitleText.interface";

const TitleText: React.FC<ITitleText.IProps> = ({ children, textColor }) => {
    return (
        <div css={textStyle}>
            <div css={titleTextStyle} style={{ color: textColor }}>
                {children}
            </div>
        </div>
    );
};

const textStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
`;

const titleTextStyle = css`
    font-weight: bold;
    font-size: 60px;
    color: black;
`;

export default TitleText;
