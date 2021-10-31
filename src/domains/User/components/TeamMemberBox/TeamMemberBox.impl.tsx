import Slider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { css } from "@emotion/react";

import { ElementBox, CenterText } from "@common/components";

const TeamMemberBox: React.FC = () => {
    return (
        <ElementBox backgroundColor="#828282">
            <CenterText>
                <div css={titleTextStyle}>TEAM MEMBERS</div>
                <Slider css={sliderStyle}>
                    <div>
                        <div css={teamNameStyle}>Po0</div>
                        <div css={memberHelloTextStyle}>
                            {" "}
                            애니멀 펑크의 전체적인 기획을 했습니다. 새로운 것을
                            배우는 것을 좋아합니다. <br />
                            무엇이든지 잘 하고 싶어 많은 도전을 하고 있지만
                            의욕만 앞서는 애송이라는 사실을 느낍니다. <br />{" "}
                            애니멀 펑크의 제너러티브 코드와 클레이튼 컨트렉트를
                            구현했습니다. <br />
                            메타버스가 우리 삶에 녹아드는 세상을 기다리며 멋진
                            NFT 작품을 수집하는 수집가입니다.
                        </div>
                    </div>
                    <div>
                        <div css={teamNameStyle}>Pix</div>
                        <div css={memberHelloTextStyle}>
                            V1의 도트와 V2의 그림을 그렸습니다. 동물을 사랑하는
                            마음을 그림에 녹여내 <br /> 귀여운 동물친구들을
                            그리고자 노력했습니다. 게임을 매우 좋아하는 사람 중
                            한 명이었지만 <br />
                            요즘은 애니멀즈들을 그리는 것에 푹 빠져 살고
                            있습니다.
                        </div>
                    </div>
                    <div>
                        <div css={teamNameStyle}>Depp</div>
                        <div css={memberHelloTextStyle}>
                            애니멀펑크의 이벤트 및 홍보를 기획하며, 커뮤니티
                            소통과 관리를 담당합니다. <br /> 애니멀펑크의 V1을
                            통해 아시아 및 유럽등 해외시장 진출을 위해 <br />{" "}
                            최선을 다해 있는 힘껏 세계 경쟁력 기반을 다지고,{" "}
                            <br /> V2를 통해 국내 시장을 견고히
                            다져나가겠습니다. <br />
                            팀원들이 좋아서 같이 일을 하게 되었는데 같이
                            일해보니 더 좋습니다. 행복합니다
                        </div>
                    </div>
                    <div>
                        <div css={teamNameStyle}>Wow</div>
                        <div css={memberHelloTextStyle}>
                            다 년 간의 블록 체인 개발 경험을 살려 <br /> AP팀이
                            겪게 될 기술적 고난들을 돌파 하는데 큰 힘이
                            되겠습니다. <br /> AP 팀이 더 큰 목표를 바라보고,
                            전진할 수 있도록 하겠습니다. <br /> AP 팀의
                            개발자로써 유의미한 코드를 바탕으로 놀라움을 선사할
                            수 있도록 하겠습니다.
                        </div>
                    </div>
                </Slider>
            </CenterText>
        </ElementBox>
    );
};

const sliderStyle = css`
    background-color: #fff;
    display: flex;
    width: 700px;
    justify-content: center;
    text-align: center;
`;

const titleTextStyle = css`
    font-weight: bold;
    font-size: 4vh;
    color: #000;
`;

const teamNameStyle = css`
    font-weight: bold;
    font-size: 2vh;
`;

const memberHelloTextStyle = css`
    margin-top: 5%;
    font-size: 1.5vh;
`;

export default TeamMemberBox;
