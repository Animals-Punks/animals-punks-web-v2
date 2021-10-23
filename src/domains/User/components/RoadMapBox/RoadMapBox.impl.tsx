import {
    InformationBox,
    CenterText,
    TitleText,
    RoadMapElementBox,
} from "@/common/components";
import { css } from "@emotion/react";

const RoadMapBox: React.FC = () => {
    return (
        <InformationBox backgroundColor="#6feb86">
            <CenterText>
                <TitleText textColor="#000">ROAD MAP</TitleText>
                <div css={elementContainer}>
                    <div css={lineContainer}>
                        <RoadMapElementBox title="1. 확장">
                            애니멀즈를 활용한 제작(키키오톡 이모티콘, 굿즈,{" "}
                            <br />
                            메타버스 웨어러블 등)후 발생한 수익 공개 및 홀더
                            분배 진행
                        </RoadMapElementBox>
                        <div css={underElementStyle}>
                            <RoadMapElementBox title="3. 협업">
                                다양한 팀과의 협업을 통한 생태계의 확장
                            </RoadMapElementBox>
                        </div>
                    </div>
                    <div css={lineContainer} style={{marginLeft: '10%'}}>
                        <RoadMapElementBox title="2. 기부">
                            소외받는 동물들을 위한 세계 곳곳의 동물 보호소 기부
                        </RoadMapElementBox>
                        <div css={underElementStyle}>
                            <RoadMapElementBox title="4. 글로벌">
                                Vietnam, Thailand 등 글로벌 시장을 타깃
                            </RoadMapElementBox>
                        </div>
                    </div>
                </div>
                <div css={teamVisionTextStyle}>
                        애니멀즈팀의 꿈은 애니멀즈로 애니메이션을 만들고,
                        메타버스 세상에서 애니멀즈와 커뮤니티 유저들이 함께 놀
                        수 있도록 하는 것입니다. <br />
                        우리는 언제, 어떻게 꿈의 조각이 완성될지 가늠하기
                        어렵지만 이루어질 수 있다고 믿습니다.
                    </div>
            </CenterText>
        </InformationBox>
    );
};

const elementContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const lineContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const underElementStyle = css`
    margin-top: 20%;
`

const teamVisionTextStyle = css`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    text-align: center;
    color: #000;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
`;

export default RoadMapBox;

// backgroundColor="#6feb86"