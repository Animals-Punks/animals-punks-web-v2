import Head from "next/head";
import { RecoilRoot } from "recoil";

import { TicketMint } from "@/domains/User/components";

export default function Ticket() {
    return (
        <>
            <RecoilRoot>
                <Head>
                    <link rel="header icon" href="/headerIcon.png" />
                    <title>Animals Punks V2</title>
                </Head>
                <TicketMint />
            </RecoilRoot>
        </>
    );
}
