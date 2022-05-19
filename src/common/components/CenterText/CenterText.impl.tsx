import { css } from "@emotion/react";

const CenterText: React.FC = ({ children }) => {
    return (
        <>
            <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css2?family=OpenSans`}
            />
            <div css={centerTextContainer}>
                <div css={centerTextStyle}>{children}</div>
            </div>
        </>
    );
};

const centerTextContainer = css`
    font-family: "OpenSans", sans-serif;
    color: white;
    height: 100%;
`;

const centerTextStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export default CenterText;
