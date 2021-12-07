import { css } from "@emotion/react";

import { OwnApBox, SelectApBox, UsedApBox } from "@common/components";

const TicketMint: React.FC = () => {
    return (
        <div css={defaultBackground}>
            <div css={ticketTitleStyle}>AnimalsPunks Ticket</div>
            <div css={bodyContainer}>
                <div css={walletConnectContainer}>
                    <div css={ticketContainer}>
                        <div css={buttonStyle}>
                            <div css={buttonTextStyle}>
                                Metamask wallet connect
                            </div>
                        </div>
                    </div>
                    <div css={ticketContainer}>
                        <div css={buttonStyle}>
                            <div css={buttonTextStyle}>
                                Kaikas wallet connect
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div css={itemContainer}>
                <div css={defaultContainer}>
                    <OwnApBox />
                    <OwnApBox />
                </div>
                <div css={defaultContainer}>
                    <UsedApBox />
                    <SelectApBox />
                    <UsedApBox />
                </div>
            </div>
        </div>
    );
};

const defaultBackground = css`
    background-color: #94bbff;
    width: 100vw;
    height: 100vh;
`;

const ticketTitleStyle = css`
    font-family: Roboto;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    display: flex;
    /* width: 100vw; */
    height: 10vh;
    align-items: center;
    justify-content: center;
`;

const bodyContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const walletConnectContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 81vw;
`;

const itemContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const defaultContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ticketContainer = css`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const buttonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    height: 40px;
    padding: 7.5px 29.5px 6.5px 19.5px;
    border-radius: 10px;
    border: solid 3px #fff;
`;

const buttonTextStyle = css`
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

export default TicketMint;
