import axios from "axios";
import Web3 from "web3";

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

    public async getV1Ap(address: string): Promise<any> {
        // const testAddress = "0x4B0acFf8eaa9F5A9426d06d4f1E0A3316735f7E7";
        const slug = process.env.NEXT_PUBLIC_ANIMALS_PUNKS_V1_SLUG || "";
        const openSeaEndpoint = process.env.NEXT_PUBLIC_OPENSEA_ENDPOINT || "";
        const imageUrls = [];
        try {
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
                        imageUrls.push(tokenInfo.image_url);
                    }
                }
            }
            return imageUrls;
        } catch (error) {
            const errorResponse = error.request.response;
            const parseErrorResponse = JSON.parse(errorResponse);
            console.log(parseErrorResponse);
        }
    }

    public async getAp(address: string): Promise<any> {
        try {
            console.log({ address });
            return address;
        } catch (error) {
            console.log(error);
        }
    }
}
