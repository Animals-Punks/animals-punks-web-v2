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
                        name: "imageUrl",
                        type: "string",
                    },
                ],
                name: "mint",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
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
                        name: "imageUrl",
                        type: "string",
                    },
                ],
                name: "mint",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
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

    async getMixBalance(): Promise<string> {
        // TODO: Get Mix Balance
        return "4";
    }

    async getExtraBabyPunks(): Promise<any[]> {
        // TODO: Get Extra baby punks
        const extraList = [
            {
                species: "Tiger",
                extra: 1,
            },
            {
                species: "Cat",
                extra: 2,
            },
            {
                species: "Ape",
                extra: 3,
            },
            {
                species: "Rabbit",
                extra: 4,
            },
            {
                species: "Tuttle",
                extra: 5,
            },
            {
                species: "Seal",
                extra: 6,
            },
            {
                species: "Pig",
                extra: 7,
            },
            {
                species: "Dog",
                extra: 8,
            },
        ];
        return extraList;
    }

    async getUsedApOnChain(): Promise<string[]> {
        // TODO: Get Used ap
        return [
            "https://storage.googleapis.com/klubs/ipfsimage/QmZLMp34TCC4icxfjyKyiKkmVp7YrQFgdRKHfzW7ZeUQv1/7613.png.png",
            "https://storage.googleapis.com/klubs/ipfsimage/QmZLMp34TCC4icxfjyKyiKkmVp7YrQFgdRKHfzW7ZeUQv1/7612.png.png",
        ];
    }

    async getUsedOneApOnChain(apNumber: number): Promise<string[]> {
        console.log(apNumber);
        // TODO: Get Used one ap
        return [
            "https://storage.googleapis.com/klubs/ipfsimage/QmZLMp34TCC4icxfjyKyiKkmVp7YrQFgdRKHfzW7ZeUQv1/7613.png.png",
        ];
    }

    async mintBabyPunks(
        address: string,
        apNumber: number[],
        species: string[]
    ): Promise<boolean> {
        // TODO: transaction MIX.
        alert("일단 믹스부터 받아가자.");
        // TODO: Mint AP.
        console.log(address);
        console.log(apNumber);
        console.log(species);
        return true;
    }
}
