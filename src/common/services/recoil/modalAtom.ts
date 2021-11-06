import { atom } from "recoil";

export const modalAtom = atom({
    key: "modalAtom",
    default: false,
});

export const changeNameStateAtom = atom({
    key: "changeNameState",
    default: "",
});

export const resultApNameStateAtom = atom({
    key: "resultApNameStateAtom",
    default: "",
});
