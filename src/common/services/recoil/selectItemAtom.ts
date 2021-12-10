import { atom } from "recoil";

export const seletedV1IdAtom = atom({
    key: "seletedV1IdAtom",
    default: [""],
});

export const seletedIdV1CountAtom = atom({
    key: "seletedIdV1CountAtom",
    default: 0,
});

export const seletedV2IdAtom = atom({
    key: "seletedV2IdAtom",
    default: [""],
});

export const seletedIdV2CountAtom = atom({
    key: "seletedIdV2CountAtom",
    default: 0,
});

export const totalSeletedIdAtom = atom({
    key: "totalSeletedIdAtom",
    default: [""],
});

export const usedV1ApAtom = atom({
    key: "usedV1ApAtom",
    default: [""],
});

export const usedV2ApAtom = atom({
    key: "usedV2ApAtom",
    default: [""],
});