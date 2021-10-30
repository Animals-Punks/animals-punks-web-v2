import { css } from "@emotion/react";
import Image from "next/image";

import { IImageBox } from "./ImageBox.interface";
import balnk from "../../../assets/images/blank.png";

const ImageBox: React.FC<IImageBox.IProps> = ({ imageUrl, children }) => {
    return (
        <div css={imageBoxContainer}>
            {imageUrl ? (
                <img src={imageUrl} css={imageStyle} />
            ) : (
                <Image
                    src={balnk}
                    height="388vh"
                    css={blankImageStyle}
                    width="388vw"
                />
            )}
            <div css={textStyle}>{children}</div>
        </div>
    );
};

const imageBoxContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;
`;

const imageStyle = css`
    height: 40vh;
    border: 5px solid #000;
    border-radius: 20px;
`;

const blankImageStyle = css`
    border-radius: 20px;
`;

const textStyle = css`
    margin-top: 5vh;
    color: #000;
    font-size: 3vh;
    font-weight: 900;
`;

export default ImageBox;
