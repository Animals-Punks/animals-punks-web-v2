import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";

import { ITextFieldBox } from "./TextFieldBox.interface";

const TextFieldBox: React.FC<ITextFieldBox.IProps> = ({
    children,
    onChange,
}) => {
    return (
        <div css={TextFieldContainer}>
            <TextField
                id="standard-basic"
                label={children}
                variant="standard"
                color="primary"
                fullWidth={true}
                onChange={onChange}
            />
        </div>
    );
};

const TextFieldContainer = css`
    display: flex;
    width: 13vw;
`;

export default TextFieldBox;
