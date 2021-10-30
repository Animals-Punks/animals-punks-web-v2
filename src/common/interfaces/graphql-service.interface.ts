export interface GetRarityInput {
    background: string;
    species: string;
    head: string;
    eyes: string;
    mouth: string;
    clothes: string;
    accessory: string;
}

export interface RarityOutput {
    imgUrl: string;
    name: string;
}

export interface IGraphqlService {
    getRarity(getRarityInput: GetRarityInput): Promise<RarityOutput[]>;
}
