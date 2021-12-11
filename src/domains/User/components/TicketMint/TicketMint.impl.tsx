import Image from "next/image";
import { css } from "@emotion/react";
import Link from "next/link";

import { OwnApBox, SelectApBox, UsedApBox } from "@common/components";
import { useTicketMint } from "../../hooks";
import { PATH } from "@/constant";
import logo from "@assets/images/headerIcon.png";
import { RouteV1Button } from "@common/components";

const TicketMint: React.FC = () => {
    const {
        connectKaikasWallet,
        connectMetamaskWallet,
        kaikasSelectAddress,
        metaSelectAddress,
        v1ImageList,
        v2ImageList,
        goldTicketMint,
        diamondTicketMint,
    } = useTicketMint();

    return (
        <div css={defaultBackground}>
            <RouteV1Button />
            <div css={headerBox}>
                <div css={imageContainer}>
                    <Image src={logo} css={imageStyle} />
                </div>
                <div css={titleTextStyle}> AnimalsPunks</div>
                <Link href={PATH.main}>
                    <div css={menuTextStyle}>Home</div>
                </Link>
                <Link href={PATH.ticket}>
                    <div
                        css={menuTextStyle}
                        style={{ margin: "22px 462px 22px 40px" }}
                    >
                        Ticket
                    </div>
                </Link>
            </div>
            <div css={barStyle}></div>
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
                    <OwnApBox apImage={v1ImageList} type="V1" />
                    <OwnApBox apImage={v2ImageList} type="V2" />
                </div>
                <div css={defaultContainer}>
                    <UsedApBox type="V1" />
                    <SelectApBox
                        goldOnClick={goldTicketMint}
                        diamondOnClick={diamondTicketMint}
                    />
                    <UsedApBox type="V2" />
                </div>
            </div>
        </div>
    );
};

const headerBox = css`
    width: 100vw;
    /* padding: 12px 50px 18px 20px; */
    background-color: #fff;
    display: flex;
`;

const imageContainer = css`
    background-color: #fff;
    display: flex;
    margin: 5px;
`;

const imageStyle = css`
    display: flex;
`;

const titleTextStyle = css`
    width: 259px;
    height: 53px;
    margin: 9px 462px 8px 20px;
    font-family: Roboto;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #000;
`;

const barStyle = css`
    height: 0;
    border: solid 2px #000;
`;

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

const menuTextStyle = css`
    width: 54px;
    height: 26px;
    margin: 22px 40px 22px 462px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    cursor: pointer;
`;

export default TicketMint;
