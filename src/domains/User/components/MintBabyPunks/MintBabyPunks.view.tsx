import { css } from "@emotion/react";

import { IMintBabyPunks } from "./MintBabyPunks.interface";
import { HeaderBox, MintInfoBox, WhiteLineBox } from "@common/components";

const VMintBabyPunks: React.FC<IMintBabyPunks.IVMintBabyPunks> = ({
    gifSource,
    mixBalance,
    extraList,
    owndApList,
    usedApList,
}) => {
    const extra = extraList.map((key, vaule) => {
        return (
            <WhiteLineBox>
                {key.species}: {key.extra}/125
            </WhiteLineBox>
        );
    });

    const owndAp = owndApList.map((key, vaule) => {
        return <WhiteLineBox height="7vw" width="7vw">{key.image}</WhiteLineBox>;
    });

    const useedAp = usedApList.map((key, vaule) => {
        return <WhiteLineBox height="7vw" width="7vw">{key.image}</WhiteLineBox>;
    })

    return (
        <>
            <div css={defaultBackground}>
                <HeaderBox />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Chewy"
                />
                <div css={titleStyle}>Baby AnimalsPunks</div>
                <div css={boxColumnContainer}>
                    <div css={boxRowContainer}>
                        <MintInfoBox>
                            <div css={boxColumnContainer}>
                                <div css={boxRowBeetweenContinaer}>
                                    <WhiteLineBox isButton={true}>
                                        Kaikas Walelt connect
                                    </WhiteLineBox>
                                    <WhiteLineBox>
                                        Your Mix: {mixBalance}
                                    </WhiteLineBox>
                                </div>
                                Two animals of the same kind are needed for
                                breeding
                                <div css={boxRowContainer}>
                                    <WhiteLineBox
                                        height="12vw"
                                        width="12vw"
                                    ></WhiteLineBox>
                                    <div css={boxColumnContainer}>
                                        <div css={plusStyle}>+</div>
                                        <WhiteLineBox isButton={true}>
                                            Mating
                                        </WhiteLineBox>
                                    </div>
                                    <WhiteLineBox
                                        height="12vw"
                                        width="12vw"
                                    ></WhiteLineBox>
                                </div>
                                <div css={boxRowContainer}>{extra}</div>
                            </div>
                        </MintInfoBox>
                        <MintInfoBox>{gifSource}</MintInfoBox>
                    </div>
                    <div css={boxRowContainer}>
                        <div css={boxColumnContainer}>
                            <MintInfoBox>
                                <div css={boxColumnContainer}>
                                    <WhiteLineBox>Your animals</WhiteLineBox>
                                    <div css={boxRowContainer}>{owndAp}</div>
                                </div>
                            </MintInfoBox>
                        </div>
                        <MintInfoBox>
                            <div css={boxColumnContainer}>
                                <div css={boxRowBeetweenContinaer}>
                                    <WhiteLineBox>Uesd animals</WhiteLineBox>
                                    <div css={boxRowContainer}>
                                        <WhiteLineBox>
                                            Search: Number
                                        </WhiteLineBox>
                                        <WhiteLineBox
                                            width="5vw"
                                            isButton={true}
                                        >
                                            OK
                                        </WhiteLineBox>
                                    </div>
                                </div>
                                <div css={boxRowContainer}>{useedAp}</div>
                            </div>
                        </MintInfoBox>
                    </div>
                </div>
            </div>
        </>
    );
};

const defaultBackground = css`
    font-family: "Chewy", sans-seri;
`;

const titleStyle = css`
    width: 100vw;
    font-size: 3vw;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const boxColumnContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

const boxRowContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    color: #fff;
`;

const boxRowBeetweenContinaer = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

const plusStyle = css`
    font-size: 5vw;
`;

export default VMintBabyPunks;
