import { css } from "@emotion/react";

const DescriptionText: React.FC = ({ children }) => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=OpenSans"
            />
            <div css={DescriptionTextStyle}>{children}</div>
        </>
    );
};

const DescriptionTextStyle = css`
    font-family: 'OpenSans', sans-serif;
    font-weight: regular;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 2%;
`;

export default DescriptionText;
