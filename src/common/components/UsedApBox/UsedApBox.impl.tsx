import { css } from "@emotion/react";

const UsedApBox: React.FC = () => {
    return (
        <>
            <div css={usedApBoxStyle}>
                <div css={itemContainer}>
                    <div css={buttonContiner}>
                        <div css={buttonStyle}>
                            <div css={buttonTextStyle}>Number</div>
                        </div>
                        <div css={buttonStyle}>
                            <div css={buttonTextStyle}>Search</div>
                        </div>
                    </div>
                    <div css={apBoxContainer}>
                        <div css={apBoxStyle}></div>
                        <div css={apBoxStyle}></div>
                    </div>
                    <div css={apBoxContainer}>
                        <div css={apBoxStyle}></div>
                        <div css={apBoxStyle}></div>
                    </div>
                    <div css={apBoxContainer}>
                        <div css={apBoxStyle}></div>
                        <div css={apBoxStyle}></div>
                    </div>
                    <div css={apBoxContainer}>
                        <div css={apBoxStyle}></div>
                        <div css={apBoxStyle}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

const usedApBoxStyle = css`
    display: flex;
    height: 410px;
    padding: 20px;
    border-radius: 10px;
    border: solid 3px #fff;
    overflow: hidden scroll;
`;

const itemContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const buttonContiner = css`
    display: flex;
    flex-direction: row;
`;

const buttonStyle = css`
    display: flex;
    width: 100px;
    height: 40px;
    margin: 0 14px 14px 14px;
    padding: 10.5px 25px;
    border-radius: 10px;
    border: solid 3px #fff;
`;

const buttonTextStyle = css`
    display: flex;
    width: 50px;
    height: 19px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    color: #fff;
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

export default UsedApBox;
