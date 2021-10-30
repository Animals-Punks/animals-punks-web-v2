import { graphqlService } from "@common/services";
import {
    IUserService,
    FindRarityParams,
    FindRarityResult,
} from "@User/services/user-service.interface";

export class UserService implements IUserService {
    public async findRarity(
        findRarityParams: FindRarityParams
    ): Promise<FindRarityResult> {
        const rarity = await graphqlService.getRarity({ ...findRarityParams });
        return { ...rarity[0] };
    }
}
