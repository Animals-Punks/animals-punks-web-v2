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
        const Caver: any | undefined = (window as any).caver;
        const myContract = new Caver.klay.Contract(
            [
                {
                    inputs: [],
                    name: "getAllExtra",
                    outputs: [
                        {
                            internalType: "uint256[8]",
                            name: "",
                            type: "uint256[8]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
            ],
            "0xe7A2fC68dD2D533e1e6c7897E0B38f7F5F5B79Be"
        );
        const extra = await myContract.methods.getAllExtra().call();
        const extraList = [
            {
                species: "Tiger",
                extra: Number(extra[0]),
            },
            {
                species: "Cat",
                extra: Number(extra[1]),
            },
            {
                species: "Ape",
                extra: Number(extra[2]),
            },
            {
                species: "Rabbit",
                extra: Number(extra[3]),
            },
            {
                species: "Turtle",
                extra: Number(extra[4]),
            },
            {
                species: "Seal",
                extra: Number(extra[5]),
            },
            {
                species: "Pig",
                extra: Number(extra[6]),
            },
            {
                species: "Dog",
                extra: Number(extra[7]),
            },
        ];
        return extraList;
    }

    async getUsedApOnChain(): Promise<string[]> {
        const Caver: any | undefined = (window as any).caver;
        const myContract = new Caver.klay.Contract(
            [
                {
                    inputs: [],
                    name: "getAllUsedAp",
                    outputs: [
                        {
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
            ],
            "0xe7A2fC68dD2D533e1e6c7897E0B38f7F5F5B79Be"
        );
        const response = await myContract.methods.getAllUsedAp().call();
        const usedList = [];

        for (const usedAp of response) {
            usedList.push(
                `https://storage.googleapis.com/klubs/ipfsimage/QmZLMp34TCC4icxfjyKyiKkmVp7YrQFgdRKHfzW7ZeUQv1/${usedAp}.png.png`
            );
        }
        return usedList;
    }

    async getUsedOneApOnChain(apNumber: number): Promise<string[]> {
        const Caver: any | undefined = (window as any).caver;
        const myContract = new Caver.klay.Contract(
            [
                {
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256",
                        },
                    ],
                    name: "getUsedApById",
                    outputs: [
                        {
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
            ],
            "0xe7A2fC68dD2D533e1e6c7897E0B38f7F5F5B79Be"
        );
        try {
            const response = await myContract.methods
                .getUsedApById(apNumber)
                .call();
            return [
                `https://storage.googleapis.com/klubs/ipfsimage/QmZLMp34TCC4icxfjyKyiKkmVp7YrQFgdRKHfzW7ZeUQv1/${response}.png.png`,
            ];
        } catch (error) {
            console.log(error);
            return [];
        }
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
        const Caver: any | undefined = (window as any).caver;
        const data = Caver.klay.abi.encodeFunctionCall(
            {
                inputs: [
                    {
                        internalType: "address",
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "uint256[]",
                        name: "reqUsedAp",
                        type: "uint256[]",
                    },
                    {
                        internalType: "string",
                        name: "babyPunkSpecies",
                        type: "string",
                    },
                ],
                name: "mint",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            [address, apNumber, species[0]]
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
