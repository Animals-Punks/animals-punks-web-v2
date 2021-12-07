import { css } from "@emotion/react";

const OwnApBox: React.FC = () => {
    return (
        <div css={apBackgroundBoxContainer}>
            <div css={apBackgroundBoxStyle}>
                <div css={apBoxContainer}>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                </div>
                <div css={apBoxContainer}>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                </div>
                <div css={apBoxContainer}>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                    <div css={apBoxStyle}></div>
                </div>
            </div>
        </div>
    );
};

const apBackgroundBoxContainer = css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

const apBackgroundBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 670px;
    height: 340px;
    padding: 10px;
    border-radius: 10px;
    border: solid 3px #fff;
    margin: 10px;
`;

const apBoxContainer = css`
    display: flex;
    flex-direction: row;
`;

const apBoxStyle = css`
    width: 100px;
    height: 100px;
    margin: 5px 5px 5px 5px;
    border-radius: 10px;
    border: solid 3px #fff;
`;

export default OwnApBox;
