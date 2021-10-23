import { css } from "@emotion/react";

const CenterText: React.FC = ({ children }) => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=OpenSans"
            />
            <div css={centerTextStyle}>{children}</div>
        </>
    );
};

const centerTextStyle = css`
    font-family: 'OpenSans', sans-serif;
    color: white;
    height: 100%;
`;

export default CenterText;
