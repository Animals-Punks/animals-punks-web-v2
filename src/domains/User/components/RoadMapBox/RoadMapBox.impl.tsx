import { css } from "@emotion/react";

import {
    InformationBox,
    CenterText,
    TitleText,
    RoadMapElementBox,
} from "@common/components";

const RoadMapBox: React.FC = () => {
    return (
        <InformationBox backgroundColor="#000">
            <CenterText>
                <div style={{ marginBottom: "10vh" }}>
                    <TitleText textColor="#fff">ROAD MAP</TitleText>
                </div>
                <div css={elementContainer}>
                    <div css={lineContainer}>
                        <RoadMapElementBox title="1. Strategy">
                        Producing Various Contents such as <br/>
                        Kakao Talk Emoticon, Goods, and Metaverse Wearables
                        </RoadMapElementBox>
                        <div css={underElementStyle}>
                            <RoadMapElementBox title="3. Partnership">
                            Partnership with Various of Projects <br/>
                            (AP Ecosystem Expansion)
                            </RoadMapElementBox>
                        </div>
                    </div>
                    <div css={lineContainer} style={{ marginLeft: "10%" }}>
                        <RoadMapElementBox title="2. Donation">
                            Donate to Animal Protection <br/> Organizations( GreenPeace )
                        </RoadMapElementBox>
                        <div css={underElementStyle}>
                            <RoadMapElementBox title="4. Target Market">
                            Global Markets such as <br/> (Canada, France, Thailand, Vietnam)
                            </RoadMapElementBox>
                        </div>
                    </div>
                </div>
                {/* <div css={teamVisionTextStyle}>
                    애니멀즈팀의 꿈은 애니멀즈로 애니메이션을 만들고,
                    <br /> 메타버스 세상에서 애니멀즈와 커뮤니티 유저들이 함께
                    놀 수 있도록 하는 것입니다. <br />
                    우리는 언제, 어떻게 꿈의 조각이 완성될지 가늠하기 어렵지만
                    이루어질 수 있다고 믿습니다.
                </div> */}
            </CenterText>
        </InformationBox>
    );
};

const elementContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3vh;
`;

const lineContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

const underElementStyle = css`
    margin-top: 20%;
`;

// const teamVisionTextStyle = css`
//     display: flex;
//     flex-direction: column;
//     margin-top: 7%;
//     text-align: center;
//     color: #000;
//     font-size: 1.7vh;
//     font-style: normal;
//     font-weight: bold;
// `;

export default RoadMapBox;

// backgroundColor="#6feb86"
