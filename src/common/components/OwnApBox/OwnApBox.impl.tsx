import { css } from "@emotion/react";
import { useRecoilState } from "recoil";

import { IOwnApBox } from "./OwnApBox.interface";
import {
    seletedV1IdAtom,
    seletedIdV1CountAtom,
    seletedV2IdAtom,
    seletedIdV2CountAtom,
    totalSeletedIdAtom,
} from "@common/services/recoil/selectItemAtom";

const OwnApBox: React.FC<IOwnApBox.IProps> = ({ apImage, type }) => {
    const [seletedV1Id, setSeletedV1Id] = useRecoilState(seletedV1IdAtom);
    const [seletedIdV1Count, setSeletedV1IdCount] =
        useRecoilState(seletedIdV1CountAtom);
    const [seletedV2Id, setSeletedV2Id] = useRecoilState(seletedV2IdAtom);
    const [seletedIdV2Count, setSeletedV2IdCount] =
        useRecoilState(seletedIdV2CountAtom);
    const [totalList, setTotalList] = useRecoilState(totalSeletedIdAtom);

    const calculateV1SeletedAp = (id: string) => {
        if (seletedV1Id.length > 0) {
            if (seletedV1Id.includes(id)) {
                const updateSeletedId = seletedV1Id.filter(item => {
                    return item !== id;
                });
                const updateSeletedTotalId = totalList.filter(item => {
                    return item != id;
                });
                const count = seletedIdV1Count - 1;
                setSeletedV1Id(updateSeletedId);
                setTotalList(updateSeletedTotalId);
                setSeletedV1IdCount(count);
                if (updateSeletedId.length === 0) {
                    setSeletedV1Id([""]);
                    setSeletedV1IdCount(0);
                }
                if (updateSeletedTotalId.length === 0) {
                    setTotalList([""]);
                } else {
                    setTotalList(updateSeletedTotalId);
                }
            } else {
                if (seletedV1Id.includes("")) {
                    const removeNull = seletedV1Id.filter(item => {
                        return item !== "";
                    });
                    setSeletedV1Id(removeNull.concat(id));
                    if (totalList.includes("")) {
                        setTotalList(removeNull.concat(id));
                    } else {
                        setTotalList(totalList.concat(id));
                    }
                    setSeletedV1IdCount(1);
                } else {
                    setSeletedV1Id(seletedV1Id.concat(id));
                    setTotalList(totalList.concat(id));
                    const count = seletedIdV1Count + 1;
                    setSeletedV1IdCount(count);
                }
            }
        }
    };

    const calculateV2SeletedAp = (id: string) => {
        if (seletedV2Id.length > 0) {
            if (seletedV2Id.includes(id)) {
                const updateSeletedId = seletedV2Id.filter(item => {
                    return item !== id;
                });
                const updateSeletedTotalId = totalList.filter(item => {
                    return item != id;
                });
                const count = seletedIdV2Count - 1;
                setSeletedV2Id(updateSeletedId);
                setTotalList(updateSeletedTotalId);
                setSeletedV2IdCount(count);
                if (updateSeletedId.length === 0) {
                    setSeletedV2Id([""]);
                    setSeletedV2IdCount(0);
                }
                if (updateSeletedTotalId.length === 0) {
                    setTotalList([""]);
                } else {
                    setTotalList(updateSeletedTotalId);
                }
            } else {
                if (seletedV2Id.includes("")) {
                    const removeNull = seletedV2Id.filter(item => {
                        return item !== "";
                    });
                    setSeletedV2Id(removeNull.concat(id));
                    if (totalList.includes("")) {
                        setTotalList(removeNull.concat(id));
                    } else {
                        setTotalList(totalList.concat(id));
                    }
                    setSeletedV2IdCount(1);
                } else {
                    setSeletedV2Id(seletedV2Id.concat(id));
                    setTotalList(totalList.concat(id));
                    const count = seletedIdV2Count + 1;
                    setSeletedV2IdCount(count);
                }
            }
        }
    };

    const selectImageOnClick = (id: string) => {
        if (type === "V1") {
            calculateV1SeletedAp(id);
        } else if (type === "V2") {
            calculateV2SeletedAp(id);
        }
    };

    const imageBox = apImage.map(image => (
        <>
            <img
                key={image}
                src={image}
                css={
                    type === "V1"
                        ? seletedV1Id.includes(image)
                            ? selectedImageStyle
                            : imageStyle
                        : seletedV2Id.includes(image)
                        ? selectedImageStyle
                        : imageStyle
                }
                onClick={() => selectImageOnClick(image)}
            />
        </>
    ));

    return (
        <div css={apBackgroundBoxContainer}>
            <div css={apBackgroundBoxStyle}>
                <div css={backgoundBoxContainer}>
                    <div css={apBoxContainer}>
                        {
                            // console.log(apImage);
                            // apImage
                            apImage.length > 1 ? imageBox : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const apBackgroundBoxContainer = css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

const imageStyle = css`
    width: 100px;
    height: 100px;
    margin: 3.5px;
    border-radius: 10px;
    border: solid 3px #fff;
    cursor: pointer;
`;

const selectedImageStyle = css`
    width: 100px;
    height: 100px;
    margin: 3.5px;
    border-radius: 10px;
    border: solid 3px #fff;
    opacity: 10%;
    cursor: pointer;
`;

const apBackgroundBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 670px;
    height: 340px;
    padding: 10px;
    border-radius: 10px;
    border: solid 3px #fff;
    margin: 10px;
    overflow: hidden scroll;
`;

const backgoundBoxContainer = css`
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;

const apBoxContainer = css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

export default OwnApBox;
