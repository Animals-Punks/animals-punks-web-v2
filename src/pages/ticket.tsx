import { TicketMint } from "@/domains/User/components";
import Head from "next/head";

export default function Ticket() {
    return (
        <>
            <Head>
                <link rel="header icon" href="/headerIcon.png" />
                <title>Animals Punks V2</title>
            </Head>
            <TicketMint />
        </>
    );
}
