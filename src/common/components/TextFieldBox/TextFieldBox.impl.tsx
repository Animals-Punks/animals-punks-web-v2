import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";

const TextFieldBox: React.FC = ({ children }) => {
    return (
        <div css={TextFieldContainer}>
            <TextField
                id="standard-basic"
                label={children}
                variant="standard"
                color="primary"
                fullWidth={true}
            />
        </div>
    );
};

const TextFieldContainer = css`
    display: flex;
    width: 13vw;
`;

export default TextFieldBox;
