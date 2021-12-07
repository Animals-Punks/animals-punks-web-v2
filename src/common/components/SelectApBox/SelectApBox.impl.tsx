import { css } from "@emotion/react";

const SelectApBox: React.FC = () => {
    return (
        <>
            <div css={selectBoxStyle}>
                <div css={headerStyle}>
                    <div css={selectApCountBoxStyle}>
                        <div css={selectApTextStyle}>V1 : 0/4</div>
                    </div>
                    <div css={selectApCountBoxStyle}>
                        <div css={selectApTextStyle}>V2 : 0/8</div>
                    </div>
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
                <div css={buttonContainer}>
                    <div
                        css={ticketButtonStyle}
                        style={{ backgroundColor: "#ffc94b" }}
                    >
                        <div css={buttonTextStyle}>GOLD TICKET</div>
                    </div>
                    <div
                        css={ticketButtonStyle}
                        style={{ backgroundColor: "#78e3ff" }}
                    >
                        <div css={buttonTextStyle}>DIAMOND TICKET</div>
                    </div>
                </div>
            </div>
        </>
    );
};

const headerStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const selectBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 740px;
    height: 410px;
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
    border: solid 3px #fff;
`;

const selectApCountBoxStyle = css`
    width: 120px;
    height: 40px;
    margin: 0 0 20px;
    padding: 7.5px 18.5px 6.5px 20.5px;
    border-radius: 10px;
    border: solid 3px #fff;
`;

const selectApTextStyle = css`
    width: 81px;
    height: 26px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
`;

const apBoxContainer = css`
    display: flex;
    flex-direction: row;
`;

const apBoxStyle = css`
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 10px;
    border: solid 3px #fff;
`;

const buttonContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ticketButtonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 340px;
    height: 70px;
    margin: 20px 20px 0 0;
    padding: 8px 8px 8px;
    border: solid 3px #fff;
    cursor: pointer;
    border-radius: 10px;
`;

const buttonTextStyle = css`
    width: 340px;
    height: 33px;
    font-family: Roboto;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    color: #fff;
`;

export default SelectApBox;
