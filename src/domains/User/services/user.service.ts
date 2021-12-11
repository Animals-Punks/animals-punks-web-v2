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
                "0.01"
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

            const result = await new CaverJsService().burnMix(true, "0.01");
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

    public async getV1Ap(address: string): Promise<any[]> {
        try {
            // const testAddress = "0x4B0acFf8eaa9F5A9426d06d4f1E0A3316735f7E7";
            const slug = process.env.NEXT_PUBLIC_ANIMALS_PUNKS_V1_SLUG || "";
            const openSeaEndpoint =
                process.env.NEXT_PUBLIC_OPENSEA_ENDPOINT || "";
            const imageUrls: any[] = [];
            for (let i = 0; i <= 10; i++) {
                const params = {
                    owner: address,
                    asset_contract_address:
                        process.env.NEXT_PUBLIC_ANIMALS_PUNKS_V1_ADDRESS,
                    order_direction: "desc",
                    offset: i,
                    limit: 50,
                    collection: slug,
                };
                const response = await axios.get(openSeaEndpoint, { params });
                const result = response.data;
                if (result !== []) {
                    for (const tokenInfo of result.assets) {
                        const resultInfo = {
                            imageUrl: tokenInfo.image_url,
                            tokenId: tokenInfo.token_id,
                        };
                        const parseResult = JSON.stringify(resultInfo);
                        imageUrls.push(parseResult);
                    }
                }
            }
            // return imageUrls;
            return [
                "https://lh3.googleusercontent.com/6tVO1FjXYWvQVBzrkHQSDViQJSxf6zOKzAJdFndC-QKwdfbDYsEtFLj5HCTAUKZ74dHlQXtxW92-OWr_9_tFm-JhF6elPmpSZHI-",
                "https://lh3.googleusercontent.com/s6JahOpCEZqAj-05NcXo_R3vndu-DJ2z67lOE1IqLESVPXz2LZq3I-FqPa6qi5wfuWCBWwv9tj7VNzYPn9fL19gRBFV6LZUOdLv7",
                "https://lh3.googleusercontent.com/2g_N4BF6y9PPafRvQ2rq701eL1jEjmoy5HI_X0chTyAB3Gc2DWZEUa8lr-HvpwnIyvW1UAgU9GnbUiJ7q54PCnQk-6nRdVGEtQ5_uAk",
                "https://lh3.googleusercontent.com/9WxZFlcp_67p3cFOUv0ZK6MCRRDzY_eqTiDW4qipphAmfW-kbG5N2Tq5lLmoL4FaJxIE86wBcd2ILjcDPLczD8RHEp0lLTj-GiRGXII",
            ];
        } catch (error) {
            const errorResponse = error.request.response;
            const parseErrorResponse = JSON.parse(errorResponse);
            console.log(parseErrorResponse);
            return [];
        }
    }

    public async getV2ApImageUrl(address: string): Promise<string[]> {
        const testAddress = "0x757e2833f59c6073d029df4e39778055207bf611";
        const caverServerEndpoint =
            `${process.env.NEXT_PUBLIC_CAVER_SERVER}caver/getOwnTokens` || "";
        const webServeerEndPoint =
            `${process.env.NEXT_PUBLIC_WEB_SERVER}/info` || "";
        const params = { address: testAddress };
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
                const resultInfo = JSON.stringify({ imageUrl, apNumber });
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

    public async mintTicket(
        ticketType: string,
        address: string,
        ticketNumber: number,
        property: any[]
    ): Promise<boolean> {
        const imageUrl = await graphqlService.getTicketImage(ticketType);
        const params = {
            ticketType,
            address,
            imageUrl: imageUrl[0],
            ticketNumber: ticketNumber,
            usedAps: property,
        };
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_TICKET_SERVER}/ticket/mint`,
            { params }
        );
        const result = response.data;
        return result.minted;
    }
}

// ticketType: string;
// address: string;
// imageUrl: string;
// ticketNumber: number;
// usedAps: any[];
