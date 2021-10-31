import { css } from "@emotion/react";
import { IRoadMapElementBox } from "@common/components/RoadMapElementBox/RoadMapElementBox.interface";

const RoadMapElementBox: React.FC<IRoadMapElementBox.IProps> = ({
    title,
    children,
}) => {
    return (
        <div css={roadMapElementTextContatiner}>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=OpenSans"
            />
            <div css={elementTextStyle}>
                <div css={elementTitleTextStyle}>{title}</div>
                <div css={elementDiscriptionStyle}>{children}</div>
            </div>
        </div>
    );
};

const roadMapElementTextContatiner = css`
    font-family: "OpenSans", sans-serif;
    color: #000;
    height: 100%;
`;

const elementTextStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
`;

const elementTitleTextStyle = css`
    font-weight: bold;
    font-size: 2vh;
    color: #000;
`;

const elementDiscriptionStyle = css`
    text-align: center;
    margin-top: 8%;
    font-weight: normal;
    font-size: 1.5vh;
    color: #000;
`;

export default RoadMapElementBox;
