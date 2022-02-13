import Head from "next/head";
import { RecoilRoot } from "recoil";

import { MintBabyPunks } from "@User/components";

export default function BabyPunks() {
    return (
        <>
            <RecoilRoot>
                <Head>
                    <link rel="header icon" href="/headerIcon.png" />
                    <title>Animals Punks V2</title>
                </Head>
                <body style={{ backgroundColor: "#FFAEAD", height: "200vh" }}>
                    <MintBabyPunks />
                </body>
            </RecoilRoot>
        </>
    );
}
