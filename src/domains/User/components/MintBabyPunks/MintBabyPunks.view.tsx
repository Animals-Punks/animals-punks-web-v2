import Image from "next/image";
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";

import { IMintBabyPunks } from "./MintBabyPunks.interface";
import { HeaderBox, MintInfoBox, WhiteLineBox } from "@common/components";
import babyPunks from "@assets/images/babyPunkExample.gif";

const VMintBabyPunks: React.FC<IMintBabyPunks.IVMintBabyPunks> = ({
    mixBalance,
    extraList,
    ownedApListOnClick,
    owndApList,
    usedApList,
    ownedV2Metadata,
    selectV2,
    selectedFirstAp,
    setselectedSecoundAp,
    matingButton,
    searchNumberOnChange,
    searchNumberOnClick,
}) => {
    const extra = extraList.map((key, vaule) => {
        return (
            <WhiteLineBox>
                {key.species}: {key.extra}/125
            </WhiteLineBox>
        );
    });

    const owndAp = ownedV2Metadata.map(metadata => {
        return (
            <div>
                <img
                    src={metadata.image}
                    key={metadata.image}
                    css={apBoxStyle}
                    onClick={() =>
                        selectV2(
                            metadata.attributes[1].value,
                            metadata.name,
                            metadata.image,
                            metadata.nftId
                        )
                    }
                />
            </div>
        );
    });

    const useedAp = usedApList.map((image: any) => {
        return <img src={image} key={image} css={apBoxStyle} />
    });

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
                                    <WhiteLineBox
                                        isButton={true}
                                        onClick={ownedApListOnClick}
                                    >
                                        Kaikas Walelt connect
                                    </WhiteLineBox>
                                    <WhiteLineBox>
                                        Your Mix: {mixBalance}
                                    </WhiteLineBox>
                                </div>
                                Two animals of the same kind are needed for
                                breeding
                                <div css={boxRowContainer}>
                                    {selectedFirstAp[0].string === "test" ? (
                                        <WhiteLineBox
                                            height="12vw"
                                            width="12vw"
                                        ></WhiteLineBox>
                                    ) : (
                                        <img
                                            src={selectedFirstAp[0].imageUrl}
                                            css={selectedBoxStyle}
                                        />
                                    )}
                                    <div css={boxColumnContainer}>
                                        <div css={plusStyle}>+</div>
                                        <WhiteLineBox
                                            isButton={true}
                                            onClick={matingButton}
                                        >
                                            Mating
                                        </WhiteLineBox>
                                    </div>
                                    {setselectedSecoundAp[0].string === "test" ? (
                                        <WhiteLineBox
                                            height="12vw"
                                            width="12vw"
                                        ></WhiteLineBox>
                                    ) : (
                                        <img
                                            src={
                                                setselectedSecoundAp[0].imageUrl
                                            }
                                            css={selectedBoxStyle}
                                        />
                                    )}
                                </div>
                                <div css={boxRowContainer}>{extra}</div>
                            </div>
                        </MintInfoBox>
                        {/* <MintInfoBox>{gifSource}</MintInfoBox> */}
                        <div style={{ width: "45vw" }}>
                            <Image src={babyPunks} />
                        </div>
                    </div>
                    <div css={boxRowContainer}>
                        <div css={boxColumnContainer}>
                            <MintInfoBox>
                                <div css={boxColumnContainer}>
                                    <WhiteLineBox>Your animals</WhiteLineBox>
                                    <div css={boxRowContainer}>
                                        {owndApList.length === 1 ? (
                                            <></>
                                        ) : (
                                            owndAp
                                        )}
                                    </div>
                                </div>
                            </MintInfoBox>
                        </div>
                        <MintInfoBox>
                            <div css={boxColumnContainer}>
                                <div css={boxRowBeetweenContinaer}>
                                    <WhiteLineBox>Uesd animals</WhiteLineBox>
                                    <div css={boxRowContainer}>
                                        <WhiteLineBox>
                                            <TextField
                                                id="outlined-basic"
                                                label="Search Number"
                                                variant="filled"
                                                onChange={searchNumberOnChange}
                                                style={{ display: "flex" }}
                                            />
                                        </WhiteLineBox>
                                        <WhiteLineBox
                                            width="5vw"
                                            isButton={true}
                                            onClick={searchNumberOnClick}
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

const apBoxStyle = css`
    width: 100px;
    height: 100px;
    margin: 3px;
    border-radius: 10px;
    border: solid 3px #fff;
    cursor: pointer;
`;

const selectedBoxStyle = css`
    width: 12vw;
    height: 12vw;
    margin: 3px;
    border-radius: 10px;
    border: solid 3px #fff;
    cursor: pointer;
`;

export default VMintBabyPunks;
