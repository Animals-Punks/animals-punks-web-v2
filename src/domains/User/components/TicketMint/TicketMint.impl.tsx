import { css, keyframes } from "@emotion/react";
import Link from "next/link";

import { OwnApBox, SelectApBox, UsedApBox } from "@common/components";
import { useTicketMint } from "../../hooks";
import { PATH } from "@/constant";

const TicketMint: React.FC = () => {
    const {
        connectKaikasWallet,
        connectMetamaskWallet,
        kaikasSelectAddress,
        metaSelectAddress,
    } = useTicketMint();

    return (
        <div css={defaultBackground}>
            <Link href={PATH.main}>
                <div css={teamTextStyle}>Home</div>
            </Link>
            <div css={namingTextStyle}>Naming</div>
            <Link href={PATH.ticket}>
                <div css={menuTextStyle}>Ticket</div>
            </Link>
            <div css={ticketTitleStyle}>Zoo Ticket</div>
            <div css={bodyContainer}>
                <div css={walletConnectContainer}>
                    <div css={ticketContainer}>
                        <div css={buttonStyle} onClick={connectMetamaskWallet}>
                            <div css={buttonTextStyle}>
                                {metaSelectAddress === ""
                                    ? "Metamask wallet connect"
                                    : metaSelectAddress}
                            </div>
                        </div>
                    </div>
                    <div css={ticketContainer}>
                        <div css={buttonStyle} onClick={connectKaikasWallet}>
                            <div css={buttonTextStyle}>
                                {kaikasSelectAddress === ""
                                    ? "Kaikas wallet connect"
                                    : kaikasSelectAddress}
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
    cursor: pointer;
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

const hoverKeyFrame = keyframes`
    0% {
        /* font-size: 2vw; */
    }
    100% {
        font-size: 2.3vw;
        color: #FFFA96;
    }
`;

const menuTextStyle = css`
    font-family: Roboto;
    font-weight: bold;
    text-shadow: 5px 5px 5px #000;
    font-size: 2vw;
    color: white;
    position: absolute;
    z-index: 48;
    text-align: right;
    width: 90vw;
    cursor: pointer;
    &:hover {
        animation-name: ${hoverKeyFrame};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

const namingTextStyle = css`
    font-family: Roboto;
    font-weight: bold;
    text-shadow: 5px 5px 5px #000;
    font-size: 2vw;
    color: white;
    position: absolute;
    z-index: 49;
    text-align: right;
    width: 82.5vw;
    cursor: pointer;
    &:hover {
        animation-name: ${hoverKeyFrame};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

const teamTextStyle = css`
    font-family: Roboto;
    font-weight: bold;
    text-shadow: 5px 5px 5px #000;
    font-size: 2vw;
    color: white;
    position: absolute;
    z-index: 50;
    text-align: right;
    width: 73vw;
    cursor: pointer;
    &:hover {
        animation-name: ${hoverKeyFrame};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }
`;

export default TicketMint;
