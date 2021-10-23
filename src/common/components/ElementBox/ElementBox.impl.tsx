import { css } from "@emotion/react";

import { IElementBox } from "./ElementBox.interface";

const ElementBox: React.FC<IElementBox.IProps> = ({
    backgroundColor,
    children,
}) => {
    return (
        <div css={ElementBoxStyle} style={{ backgroundColor }}>
            {children}
        </div>
    );
};

const ElementBoxStyle = css`
    width: 100vw;
    height: 50vh;
`;

export default ElementBox;
