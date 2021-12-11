import Image from "next/image";
import { css } from "@emotion/react";

import v1Logo from "@assets/images/v1Logo.png";

const RouteV1Button: React.FC = () => {
    return (
        <div css={imageContainer}>
            <div
                style={{
                    display: "flex",
                    width: "97vw",
                    justifyContent: "flex-end",
                }}
            >
                <div
                    style={{
                        position: "fixed",
                        width: "100px",
                        marginTop: "10vh",
                    }}
                >
                    <a
                        href="https://animals-punks.com/animals-v1/index.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={v1Logo} css={imageStyle} />
                    </a>
                </div>
            </div>
        </div>
    );
};

const imageContainer = css`
    position: absolute;
    z-index: 100;
    /* margin: 0; */
    /* border-radius: 15px; */
`;

const imageStyle = css`
    border-radius: 70%;
    border: 10px solid;
`;

export default RouteV1Button;
