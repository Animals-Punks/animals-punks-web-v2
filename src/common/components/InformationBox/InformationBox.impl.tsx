import { css } from "@emotion/react";

import { IInformationBox } from "@common/components/InformationBox/InformationBox.interface";

const InformationBox: React.FC<IInformationBox.IProps> = ({
    children,
    backgroundColor,
}) => {
    return (
        <div
            css={informationBoxStyle}
            style={{
                backgroundColor,
            }}
        >
            {children}
        </div>
    );
};

const informationBoxStyle = css`
    width: 100vw;
    height: 100vh;
`;

export default InformationBox;
