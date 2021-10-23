import { css } from "@emotion/react";

const TitleText: React.FC = ({ children }) => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=OpenSans"
            />
            <div css={TitleTextStyle}>{children}</div>
        </>
    );
};

const TitleTextStyle = css`
    font-family: 'OpenSans', sans-serif;
    font-weight: bold;
    font-size: 60px;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 11%;
`;

export default TitleText;
