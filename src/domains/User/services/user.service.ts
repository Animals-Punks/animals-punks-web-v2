import { graphqlService } from "@common/services";
import {
    IUserService,
    FindRarityResult,
    FindRarityParams,
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
            return { ...rarity[0] };
        } catch (error) {
            return undefined;
        }
    }
}
