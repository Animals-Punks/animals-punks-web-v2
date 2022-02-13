import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";

import { PATH } from "@/constant";
import logo from "@assets/images/headerIcon.png";

const HeaderBox: React.FC = () => {
    return (
        <>
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
                        // style={{ margin: "22px 462px 22px 40px" }}
                        style={{ margin: "22px" }}
                    >
                        Ticket
                    </div>
                </Link>
                <Link href={PATH.babyPunks}>
                    <div
                        css={menuTextStyle}
                        style={{
                            margin: "23px 100px 20px 40px",
                            width: "100%",
                        }}
                    >
                        Baby Punks
                    </div>
                </Link>
            </div>
            <div css={barStyle}></div>
        </>
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

const menuTextStyle = css`
    width: 54px;
    height: 26px;
    margin: 22px 40px 22px 400px;
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

const barStyle = css`
    height: 0;
    border: solid 2px #000;
`;

export default HeaderBox;
