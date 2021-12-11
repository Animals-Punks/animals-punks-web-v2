export class CaverJsService {
    async checkOwner(reqAddress: string) {
        const klaytn: any | undefined = (window as any).klaytn;
        const klaytnAddress = await klaytn.enable();

        if (klaytnAddress[0] === reqAddress.toLowerCase()) return true;
        return false;
    }

    async burnMix(isUpdate: boolean, burnMixAmount: string): Promise<boolean> {
        if (isUpdate === false) return true;
        try {
            const Caver: any | undefined = (window as any).caver;
            const klaytn: any | undefined = (window as any).klaytn;
            const klaytnAddress = await klaytn.enable();

            const data = Caver.klay.abi.encodeFunctionCall(
                {
                    name: "burn",
                    type: "function",
                    inputs: [
                        {
                            type: "uint256",
                            name: "amount",
                        },
                    ],
                },
                [Caver.utils.toPeb(burnMixAmount, "KLAY")]
            );

            const result = await Caver.klay.sendTransaction({
                type: "SMART_CONTRACT_EXECUTION",
                from: klaytnAddress[0],
                to: process.env.NEXT_PUBLIC_MIX_CONTRACT_ADDRESS,
                gas: "80000",
                data,
            });
            const trxResult = await Caver.klay.getTransactionReceipt(
                result.senderTxHash
            );
            if (trxResult.status === true) return true;
            return false;
        } catch (error) {
            alert(error.message);
            return false;
        }
    }

    async mintGoldTicket(
        reqAddress: string,
        tokenId: number
    ): Promise<boolean> {
        const Caver: any | undefined = (window as any).caver;
        const imageUrl =
            "https://www.arabnews.com/sites/default/files/main-image/2021/10/12/2856941-1975758329.jpg";
        const data = Caver.klay.abi.encodeFunctionCall(
            {
                constant: false,
                inputs: [
                    {
                        name: "to",
                        type: "address",
                    },
                    {
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        name: "imageUri",
                        type: "string",
                    },
                ],
                name: "mintWithTokenId",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function",
            },
            [reqAddress, String(tokenId), imageUrl]
        );

        const result = await Caver.klay.sendTransaction({
            type: "SMART_CONTRACT_EXECUTION",
            from: reqAddress,
            to: process.env.NEXT_PUBLIC_GOLD_TICKET_ADDRESS,
            gas: "800000",
            data,
        });
        const trxResult = await Caver.klay.getTransactionReceipt(
            result.senderTxHash
        );
        if (trxResult.status === true) return true;
        return false;
    }

    async mintDiamondTicket(
        address: string,
        tokenId: number
    ): Promise<boolean> {
        const Caver: any | undefined = (window as any).caver;
        const imageUrl =
            "https://m.media-amazon.com/images/I/615HMgt2EoL._UY625_.jpg";
        const data = Caver.klay.abi.encodeFunctionCall(
            {
                constant: false,
                inputs: [
                    {
                        name: "to",
                        type: "address",
                    },
                    {
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        name: "imageUri",
                        type: "string",
                    },
                ],
                name: "mintWithTokenId",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function",
            },
            [address, tokenId, imageUrl]
        );

        const result = await Caver.klay.sendTransaction({
            type: "SMART_CONTRACT_EXECUTION",
            from: address,
            to: process.env.NEXT_PUBLIC_DIAMOND_TICKET_ADDRESS,
            gas: "800000",
            data,
        });
        const trxResult = await Caver.klay.getTransactionReceipt(
            result.senderTxHash
        );
        if (trxResult.status === true) return true;
        return false;
    }
}
