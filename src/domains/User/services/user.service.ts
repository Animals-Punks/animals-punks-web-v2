import { graphqlService } from "@common/services";
import {
    IUserService,
    FindRarityResult,
} from "@User/services/user-service.interface";

export class UserService implements IUserService {
    public async findRarity(): Promise<FindRarityResult | undefined | null> {
        try {
            const background = localStorage.getItem("배경");
            if (background === null) return undefined;
            const species = localStorage.getItem("동물");
            if (species === null) return undefined;
            const head = localStorage.getItem("머리");
            if (head === null) return undefined;
            const eyes = localStorage.getItem("눈");
            if (eyes === null) return undefined;
            const mouth = localStorage.getItem("입");
            if (mouth === null) return undefined;
            const clothes = localStorage.getItem("옷");
            if (clothes === null) return undefined;
            const accessory = localStorage.getItem("악세사리");
            if (accessory === null) return undefined;

            const rarity = await graphqlService.getRarity({
                background,
                species,
                head,
                eyes,
                mouth,
                clothes,
                accessory,
            });
            if (rarity.length === 0) return null;
            localStorage.clear();
            return { ...rarity[0] };
        } catch (error) {
            localStorage.clear();
            return undefined;
        }
    }
}
