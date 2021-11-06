import { atom } from "recoil";

export const updateNameState = atom({
    key: "updateNameState",
    default: false,
});

export const searchApNameState = atom({
    key: "searchApNameState",
    default: 0,
});

export const apNameStateAtom = atom({
    key: "apNameStateAtom",
    default: "",
});
