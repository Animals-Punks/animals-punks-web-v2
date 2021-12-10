import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";

import {
    // usedV1ApAtom,
    usedV2ApAtom,
} from "@common/services/recoil/selectItemAtom";
import { IUsedApBox } from "./UsedApBox.interface";

const UsedApBox: React.FC<IUsedApBox.IProps> = ({ type }) => {
    // const usedV1ImageList = useRecoilValue(usedV1ApAtom);
    const usedV2ImageList = useRecoilValue(usedV2ApAtom);

    // const v1ImageBox = usedV1ImageList.map(image => (
    //     <img src={image} key={image} css={apBoxStyle} />
    // ));

    const v2ImageBox = usedV2ImageList.map(image => (
        <img src={image} key={image} css={apBoxStyle} />
    ));

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
                        {type === "V1" ? (
                            <div css={commingSoonText}>Comming Soon</div>
                        ) : (
                            <>{v2ImageBox}</>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

const usedApBoxStyle = css`
    display: flex;
    width: 310px;
    height: 410px;
    padding: 20px;
    border-radius: 10px;
    border: solid 3px #fff;
    overflow: hidden scroll;
`;

const itemContainer = css`
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    flex-direction: column;
    align-items: center;
    /* overflow: hidden scroll; */
`;

const buttonContiner = css`
    display: flex;
    flex-direction: row;
`;

const buttonStyle = css`
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

const commingSoonText = css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    color: #fff;
`;

const apBoxContainer = css`
    /* flex-wrap: wrap; */
    overflow: hidden scroll;
`;

const apBoxStyle = css`
    width: 100px;
    height: 100px;
    margin: 3px;
    border-radius: 10px;
    border: solid 3px #fff;
`;

export default UsedApBox;
