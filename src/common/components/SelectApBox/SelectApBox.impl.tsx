import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";

import {
    seletedIdV1CountAtom,
    seletedIdV2CountAtom,
    totalSeletedIdAtom,
} from "@common/services/recoil/selectItemAtom";
import { ISelectApBox } from "./SeletApBox.interface";

const SelectApBox: React.FC<ISelectApBox.IProps> = ({
    goldOnClick,
    diamondOnClick,
}) => {
    const seletedV1IdCount = useRecoilValue(seletedIdV1CountAtom);
    const seletedV2IdCount = useRecoilValue(seletedIdV2CountAtom);
    const totalList = useRecoilValue(totalSeletedIdAtom);

    const jsonParse = (imageData: string) => {
        if (imageData === "") {
            return;
        } else {
            return JSON.parse(imageData).imageUrl;
        }
    };

    const imageBox = totalList.map(image => (
        <>
            <img key={image} src={jsonParse(image)} css={imageStyle} />
        </>
    ));

    return (
        <>
            <div css={selectBoxStyle}>
                <div css={headerStyle}>
                    <div css={selectApCountBoxStyle}>
                        <div
                            css={selectApTextStyle}
                        >{`V1 : ${seletedV1IdCount}/4`}</div>
                    </div>
                    <div css={selectApCountBoxStyle}>
                        <div
                            css={selectApTextStyle}
                        >{`V2 : ${seletedV2IdCount}/8`}</div>
                    </div>
                </div>
                <div css={apBoxContainer}>
                    {seletedV1IdCount !== 0 || seletedV2IdCount !== 0 ? (
                        imageBox
                    ) : (
                        <></>
                    )}
                </div>
                <div css={buttonContainer}>
                    <div
                        css={ticketButtonStyle}
                        style={{ backgroundColor: "#ffc94b" }}
                        onClick={goldOnClick}
                    >
                        <div css={buttonTextStyle}>GOLD TICKET</div>
                    </div>
                    <div
                        css={ticketButtonStyle}
                        style={{ backgroundColor: "#78e3ff" }}
                        onClick={diamondOnClick}
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
    justify-content: space-between;
    width: 740px;
    height: 410px;
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
    border: solid 3px #fff;
`;

const imageStyle = css`
    width: 100px;
    height: 100px;
    margin: 3.5px;
    border-radius: 10px;
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
    flex-wrap: wrap;
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
