import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { css } from "@emotion/react";

import { ISelectBox } from "./SelectBox.interface";

const SelectBox: React.FC<ISelectBox.IProps> = ({
    itemList,
    children,
    itemAtom,
}) => {
    const setItemName = useSetRecoilState(itemAtom);
    const itemName = useRecoilValue(itemAtom);
    const handleChangeMultiple = (event: any) => {
        const { options } = event.target;
        const value: string[] = [];
        for (const itemIndex in itemList) {
            if (options[itemIndex].selected) {
                value.push(options[itemIndex].value);
            }
        }
        setItemName(value);
    };
    return (
        <div css={selectBoxStyle}>
            <FormControl sx={{ m: 1 }}>
                <InputLabel shrink htmlFor="select-multiple-native">
                    {children}
                </InputLabel>
                <Select
                    multiple
                    native
                    value={itemName}
                    onChange={handleChangeMultiple}
                    label="Native"
                    inputProps={{
                        id: "select-multiple-native",
                    }}
                >
                    {itemList.map((itemName: string) => (
                        <option
                            key={itemName}
                            value={itemName}
                            style={{ fontSize: "1vw" }}
                        >
                            {itemName}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

const selectBoxStyle = css`
    display: flex;
    margin-bottom: 0.6vh;
`;

export default SelectBox;
