import { css } from "@emotion/react";

const TicketMint: React.FC = () => {
    return <div css={ticketTitleStyle}>AnimalsPunks Ticket</div>;
}

const ticketTitleStyle = css`
    font-family: Roboto;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    display: flex;
    /* width: 100vw; */
    align-items: center;
    justify-content: center;
`;

export default TicketMint;
