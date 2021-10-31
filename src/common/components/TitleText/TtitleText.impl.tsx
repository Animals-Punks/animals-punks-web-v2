import { css } from "@emotion/react";
import { ITitleText } from "@common/components/TitleText/TitleText.interface";

const TitleText: React.FC<ITitleText.IProps> = ({ children, textColor }) => {
    return (
        <div css={titleTextStyle} style={{ color: textColor }}>
            {children}
        </div>
    );
};

const titleTextStyle = css`
    font-weight: bold;
    font-size: 4vh;
`;

export default TitleText;
