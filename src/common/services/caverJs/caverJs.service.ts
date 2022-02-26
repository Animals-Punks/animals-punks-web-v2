import axios from "axios";

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
        const Caver: any | undefined = (window as any).caver;
        const klaytn: any | undefined = (window as any).klaytn;
        const addresInfo = await klaytn.enable();
        const myContract = new Caver.klay.Contract(
            [
                {
                    constant: true,
                    inputs: [
                        {
                            internalType: "address",
                            name: "account",
                            type: "address",
                        },
                    ],
                    name: "balanceOf",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                    ],
                    payable: false,
                    stateMutability: "view",
                    type: "function",
                },
            ],
            "0xdd483a970a7a7fef2b223c3510fac852799a88bf"
        );
        const mixBalance = await myContract.methods
            .balanceOf(addresInfo[0])
            // .balanceOf("0x503D10CCF01ab4ff9D6b14f4F540017BC60Ca9f7")
            .call();
        // console.log(mixBalance / 1000000000000000000);
        return String(mixBalance / 1000000000000000000);
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
            "0x84E5552e9AE4aEF39bD6DD75BA4583d0130Bf0Ad"
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
            "0x84E5552e9AE4aEF39bD6DD75BA4583d0130Bf0Ad"
        );
        const usedApTokenIdList = await myContract.methods
            .getAllUsedAp()
            .call();
        const usedList = [];

        const klubsEndpoint = process.env.NEXT_PUBLIC_KLUBS_ENDPOINT;

        for (const usedApTokenId of usedApTokenIdList) {
            const response = await axios.get(
                `${klubsEndpoint}/${usedApTokenId}/metadata`
            );
            const v2Metadata = response.data;
            usedList.push(v2Metadata.image);
        }

        // for (const usedAp of response) {
        //     usedList.push(
        //         `https://storage.googleapis.com/klubs/ipfsimage/QmZLMp34TCC4icxfjyKyiKkmVp7YrQFgdRKHfzW7ZeUQv1/${usedAp}.png.png`
        //     );
        // }
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
            "0x84E5552e9AE4aEF39bD6DD75BA4583d0130Bf0Ad"
        );
        try {
            const usedApTokenId = await myContract.methods
                .getUsedApById(apNumber)
                .call();
            const klubsEndpoint = process.env.NEXT_PUBLIC_KLUBS_ENDPOINT;
            const response = await axios.get(
                `${klubsEndpoint}/${usedApTokenId}/metadata`
            );
            const v2Metadata = response.data;
            return [v2Metadata.image];
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async transferMix(fromAddress: string): Promise<boolean> {
        const Caver: any | undefined = (window as any).caver;
        const data = Caver.klay.abi.encodeFunctionCall(
            {
                constant: false,
                inputs: [
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                name: "transfer",
                outputs: [
                    {
                        internalType: "bool",
                        name: "",
                        type: "bool",
                    },
                ],
                payable: false,
                stateMutability: "nonpayable",
                type: "function",
            },
            [
                "0x503d10ccf01ab4ff9d6b14f4f540017bc60ca9f7",
                Caver.utils.toPeb("35", "KLAY"),
            ]
        );

        const result = await Caver.klay.sendTransaction({
            type: "SMART_CONTRACT_EXECUTION",
            from: fromAddress,
            to: "0xdd483a970a7a7fef2b223c3510fac852799a88bf",
            gas: "8000000",
            data,
        });
        console.log(result);
        const trxResult = await Caver.klay.getTransactionReceipt(
            result.senderTxHash
        );
        if (trxResult.status === true) return true;
        return false;
    }

    async mintBabyPunks(
        address: string,
        apNumber: number[],
        species: string[]
    ) {
        const usedApList = await this.getUsedApOnChain();
        const klubsEndpoint = process.env.NEXT_PUBLIC_KLUBS_ENDPOINT;
        const availdableUrls = [];
        for (const available of apNumber) {
            const response = await axios.get(
                `${klubsEndpoint}/${available}/metadata`
            );
            const v2Metadata = response.data;
            availdableUrls.push(v2Metadata.image);
        }
        if (
            usedApList.includes(availdableUrls[0]) === false &&
            usedApList.includes(availdableUrls[1]) === false
        ) {
            const mixTransferResult = await this.transferMix(address);
            if (mixTransferResult === true) {
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

                try {
                    await Caver.klay.sendTransaction({
                        type: "SMART_CONTRACT_EXECUTION",
                        from: address,
                        to: "0x84E5552e9AE4aEF39bD6DD75BA4583d0130Bf0Ad",
                        gas: "8000000",
                        data,
                    });
                    return true;
                } catch (error) {
                    return false;
                }
                // const trxResult = await Caver.klay.getTransactionReceipt(
                //     result.senderTxHash
                // );
            }
        }
        alert("이미 사용된 애펑 입니다.");
    }
}
