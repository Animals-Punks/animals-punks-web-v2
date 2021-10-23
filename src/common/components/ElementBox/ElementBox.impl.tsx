import { css } from "@emotion/react";

import { IElementBox } from "./ElementBox.interface";

const ElementBox: React.FC<IElementBox.IProps> = ({
    backgroundColor,
    children,
}) => {
    return (
        <div css={elementBoxStyle} style={{ backgroundColor }}>
            {children}
        </div>
    );
};

const elementBoxStyle = css`
    width: 100vw;
    height: 70vh;
`;

export default ElementBox;
