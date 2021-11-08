import { CaverJsService } from "@common/services/caverJs/caverJs.service";
import { graphqlService } from "@common/services";
import {
    IUserService,
    FindRarityResult,
    FindRarityParams,
    GetNameParams,
    ApName,
} from "@User/services/user-service.interface";
import axios from "axios";

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
                    url: `${process.env.NEXT_PUBLIC_WEB_SERVER}/name`,
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
                    url: `${process.env.NEXT_PUBLIC_WEB_SERVER}/name`,
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
}
