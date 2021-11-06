export interface FindRarityParams {
    background: string;
    species: string;
    head: string;
    eyes: string;
    mouth: string;
    clothes: string;
    accessory: string;
}

export interface FindRarityResult {
    imgUrl: string;
    name: string;
}

export interface GetNameParams {
    apNumber: number;
}

export interface ApName {
    nftName: string;
}

export interface IUserService {
    findRarity(
        findRarityParams: FindRarityParams
    ): Promise<FindRarityResult | undefined | null>;
    getApName(getNameParams: GetNameParams): Promise<ApName | null>;
}
