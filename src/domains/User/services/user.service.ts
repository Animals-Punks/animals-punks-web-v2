import axios from "axios";

import { CaverJsService } from "@common/services/caverJs/caverJs.service";
import { graphqlService } from "@common/services";
import {
    IUserService,
    FindRarityResult,
    FindRarityParams,
    GetNameParams,
    ApName,
} from "@User/services/user-service.interface";

export class UserService implements IUserService {
    public async findRarity(
        findRarityParams: FindRarityParams
    ): Promise<FindRarityResult | undefined | null> {
        try {
            const rarity = await graphqlService.getRarity({
                ...findRarityParams,
            });
            if (rarity.length === 0) return null;
            const searchNftName = await graphqlService.getNameByUrl(
                rarity[0].imgUrl
            );
            const searchNft = rarity[0];
            if (searchNftName[0].name === null) {
                return { ...searchNft };
            }
            const name = `${searchNft.name} ${searchNftName[0].name}`;
            const url = rarity[0].imgUrl;
            return { name, imgUrl: url };
        } catch (error) {
            return undefined;
        }
    }

    public async getApByNumber(
        apNumber: number
    ): Promise<FindRarityResult | undefined> {
        try {
            const apnft = await axios.get(
                `${process.env.NEXT_PUBLIC_WEB_SERVER}/info/${apNumber}`
            );
            const response = apnft.data;
            return { name: response.name, imgUrl: response.image };
        } catch (error) {
            return undefined;
        }
    }

    public async getApName(getNameParams: GetNameParams): Promise<ApName> {
        const apName = await axios.get(
            `${process.env.NEXT_PUBLIC_WEB_SERVER}/name/${getNameParams.apNumber}`
        );
        if (apName.data.name === null) {
            return { nftName: "" };
        }
        return { nftName: apName.data.name };
    }

    public async createApName(
        isUpdate: boolean,
        apNumber: number,
        apName: string
    ): Promise<boolean> {
        try {
            const isOwner = await axios({
                method: "get",
                url: `${process.env.NEXT_PUBLIC_WEB_SERVER}/owner/${apNumber}`,
            });

            const checkOwner = await new CaverJsService().checkOwner(
                isOwner.data
            );

            if (checkOwner === false)
                throw new Error("This Animals Punks is not yours");

            const trxResult = await new CaverJsService().burnMix(
                isUpdate,
                "10"
            );

            if (trxResult === true) {
                const changeResult = await axios({
                    method: "post",
                    url: `${process.env.NEXT_PUBLIC_WEB_SERVER}/customName`,
                    data: {
                        nftNumber: apNumber,
                        apName: apName,
                    },
                });

                return changeResult.data.isUpdate;
            }

            return false;
        } catch (error) {
            alert(error);
            return false;
        }
    }

    public async removeApName(apNumber: number): Promise<boolean> {
        try {
            const isOwner = await axios({
                method: "get",
                url: `${process.env.NEXT_PUBLIC_WEB_SERVER}/owner/${apNumber}`,
            });

            const checkOwner = await new CaverJsService().checkOwner(
                isOwner.data
            );

            if (checkOwner === false)
                throw new Error("This Animals Punks is not yours");

            const result = await new CaverJsService().burnMix(true, "20");
            if (result === true) {
                await axios({
                    method: "delete",
                    url: `${process.env.NEXT_PUBLIC_WEB_SERVER}/title`,
                    data: {
                        nftNumber: apNumber,
                    },
                });
                return true;
            }
            return false;
        } catch (error) {
            alert(error);
            return false;
        }
    }

    private filterSpecies(traits: any[]): string {
        let species = "";
        for (const property of traits) {
            if (property.trait_type === "species") {
                species = property.value;
            }
        }
        return species;
    }

    public async getV1Ap(address: string): Promise<any[]> {
        try {
            const slug = process.env.NEXT_PUBLIC_ANIMALS_PUNKS_V1_SLUG || "";
            const openSeaEndpoint =
                process.env.NEXT_PUBLIC_OPENSEA_ENDPOINT || "";
            const imageUrls: any[] = [];
            for (let i = 0; i <= 10; i++) {
                const params = {
                    owner: address,
                    asset_contract_address:
                        process.env.NEXT_PUBLIC_ANIMALS_PUNKS_V1_ADDRESS,
                    order_direction: "asc",
                    offset: i,
                    limit: 50,
                    collection: slug,
                };
                const response = await axios.get(openSeaEndpoint, { params });
                const result = response.data;
                if (result !== []) {
                    for (const tokenInfo of result.assets) {
                        const species = this.filterSpecies(tokenInfo.traits);
                        const resultInfo = {
                            imageUrl: tokenInfo.image_url,
                            apNumber: tokenInfo.token_id,
                            species: species,
                        };
                        const parseResult = JSON.stringify(resultInfo);
                        if (imageUrls.includes(parseResult) === false) {
                            imageUrls.push(parseResult);
                        }
                    }
                } else {
                    break;
                }
            }
            return imageUrls;
        } catch (error) {
            const errorResponse = error.request.response;
            const parseErrorResponse = JSON.parse(errorResponse);
            console.log(parseErrorResponse);
            return [];
        }
    }

    public async getV2ApImageUrl(address: string): Promise<string[]> {
        const caverServerEndpoint =
            `${process.env.NEXT_PUBLIC_CAVER_SERVER}caver/getOwnTokens` || "";
        const webServeerEndPoint =
            `${process.env.NEXT_PUBLIC_WEB_SERVER}/info` || "";
        const params = { address: address };
        try {
            const response = await axios.get(caverServerEndpoint, { params });
            const result = response.data;
            const imageUrls = [];
            for (const apNumber of result) {
                const apInfoResponse = await axios.get(
                    `${webServeerEndPoint}/${apNumber}`
                );
                const apInfoResult = apInfoResponse.data;
                const imageUrl = apInfoResult.image;
                const species = this.filterSpecies(apInfoResult.attributes);
                const resultInfo = JSON.stringify({
                    imageUrl,
                    apNumber,
                    species,
                });
                imageUrls.push(resultInfo);
            }
            return imageUrls;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public async getUsedV2ImageUrl(): Promise<string[]> {
        const usedApList = await graphqlService.getV2UsedAp();
        if (usedApList === []) {
            return [];
        }
        const imageList = [];
        try {
            for (const usedApNumnber of usedApList) {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_WEB_SERVER}/name/${usedApNumnber.apNumber}`
                );
                const result = response.data;
                const imageUrl = result.url;
                imageList.push(imageUrl);
            }
            return imageList;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public async getUsedV1ImageUrl(): Promise<string[]> {
        const usedApList = await graphqlService.getV1UsedAp();
        const contractAddress =
            process.env.NEXT_PUBLIC_ANIMALS_PUNKS_V1_ADDRESS || "";
        const openSeaEndpoint =
            process.env.NEXT_PUBLIC_OPENSEA_SINGLE_ASSET_ENDPOINT || "";
        try {
            if (usedApList === []) {
                return [];
            }
            const imageList = [];
            for (const usedApNumber of usedApList) {
                const response = await axios.get(
                    `${openSeaEndpoint}/${contractAddress}/${usedApNumber.apNumber}`
                );
                const result = response.data;
                imageList.push(result.image_url);
            }
            return imageList;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public async seachOneV1ImageUrl(usedApNumer: string): Promise<string[]> {
        const contractAddress =
            process.env.NEXT_PUBLIC_ANIMALS_PUNKS_V1_ADDRESS || "";
        const openSeaEndpoint =
            process.env.NEXT_PUBLIC_OPENSEA_SINGLE_ASSET_ENDPOINT || "";
        try {
            const response = await axios.get(
                `${openSeaEndpoint}/${contractAddress}/${usedApNumer}`
            );
            const result = response.data;
            const imageList = [result.image_url];
            return imageList;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public async seachOneV2ImageUrl(usedApNumer: number): Promise<string[]> {
        console.log(usedApNumer);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_WEB_SERVER}/name/${usedApNumer}`
            );
            const result = response.data;
            const imageUrl = result.url;
            const imageList = [imageUrl];
            return imageList;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public async usedV1Validate(requestV1List: string[]): Promise<boolean> {
        const usedApList = await graphqlService.getV1UsedAp();
        const validateResult = true;
        const usedApNumberList = [];
        if (usedApList !== []) {
            for (const usedAp of usedApList) {
                usedApNumberList.push(usedAp.apNumber);
            }
            for (const requestV1 of requestV1List) {
                if (usedApNumberList.includes(requestV1)) {
                    throw new Error(`${requestV1} is used before.`);
                }
            }
        }
        return validateResult;
    }

    public async usedV2Validate(requestV2List: number[]): Promise<boolean> {
        const usedApList = await graphqlService.getV2UsedAp();
        const validateResult = true;
        const usedApNumberList = [];
        if (usedApList !== []) {
            for (const usedAp of usedApList) {
                usedApNumberList.push(usedAp.apNumber);
            }
            for (const requestV2 of requestV2List) {
                if (usedApNumberList.includes(requestV2) === true) {
                    throw new Error(`${requestV2} is used before`);
                }
            }
        }
        return validateResult;
    }

    public async mintTicket(
        ticketType: string,
        address: string,
        property: any[]
    ): Promise<boolean> {
        try {
            const imageUrl = await graphqlService.getTicketImage(ticketType);
            const ticketNumber = await graphqlService.getTicketCurrnetNumber(
                ticketType
            );
            let responseResult = false;
            if (ticketType === "gold") {
                try {
                    const trxResult = await new CaverJsService().mintGoldTicket(
                        address,
                        ticketNumber[0].currentTicketNumber
                    );
                    const data = {
                        ticketType,
                        address,
                        imageUrl: imageUrl[0].url,
                        ticketNumber: ticketNumber[0].currentTicketNumber,
                        usedAps: property,
                    };
                    if (trxResult === true) {
                        await axios.post(
                            `${process.env.NEXT_PUBLIC_TICKET_SERVER}ticket/mint`,
                            data
                        );
                    }
                    responseResult = true;
                } catch (error) {
                    alert(error);
                }
            } else {
                try {
                    const trxResult =
                        await new CaverJsService().mintDiamondTicket(
                            address,
                            ticketNumber[0].currentTicketNumber
                        );
                    const data = {
                        ticketType,
                        address,
                        imageUrl: imageUrl[0].url,
                        ticketNumber: ticketNumber[0].currentTicketNumber,
                        usedAps: property,
                    };
                    if (trxResult === true) {
                        await axios.post(
                            `${process.env.NEXT_PUBLIC_TICKET_SERVER}ticket/mint`,
                            data
                        );
                    }
                    responseResult = true;
                } catch (error) {
                    alert(error);
                }
            }
            return responseResult;
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
            return false;
        }
    }
}
