import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
    usedV1ApAtom,
    usedV2ApAtom,
} from "@common/services/recoil/selectItemAtom";
import { IUsedApBox } from "./UsedApBox.interface";

const UsedApBox: React.FC<IUsedApBox.IProps> = ({
    type,
    onChange,
    onClick,
}) => {
    const usedV1ImageList = useRecoilValue(usedV1ApAtom);
    const usedV2ImageList = useRecoilValue(usedV2ApAtom);

    const v1ImageBox = usedV1ImageList.map(image => (
        <img src={image} key={image} css={apBoxStyle} />
    ));

    const v2ImageBox = usedV2ImageList.map(image => (
        <img src={image} key={image} css={apBoxStyle} />
    ));

    return (
        <>
            <div css={usedApBoxStyle}>
                <div css={itemContainer}>
                    <div css={buttonContiner}>
                        <Box
                            component="form"
                            sx={{
                                "& > :not(style)": {
                                    m: 1,
                                    width: "10ch",
                                    height: "8ch",
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-basic"
                                label="Number"
                                variant="filled"
                                onChange={onChange}
                            />
                        </Box>

                        <div css={buttonStyle}>
                            <div css={buttonTextStyle} onClick={onClick}>
                                Search
                            </div>
                        </div>
                    </div>
                    <div css={apBoxContainer}>
                        {type === "V1" ? <>{v1ImageBox}</> : <>{v2ImageBox}</>}
                    </div>
                </div>
            </div>
        </>
    );
};

const usedApBoxStyle = css`
    display: flex;
    width: 310px;
    height: 380px;
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
    margin: 15px 14px 14px 14px;
    padding: 10.5px 25px;
    border-radius: 10px;
    border: solid 3px #fff;
    cursor: pointer;
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
