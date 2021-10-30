import { print, DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";

import {
    IGraphqlService,
    GetRarityInput,
    RarityOutput,
} from "@common/interfaces/graphql-service.interface";

export default class GraphqlService implements IGraphqlService {
    readonly endpoint = `http://ec2-3-145-4-123.us-east-2.compute.amazonaws.com:31103/v1/graphql`;

    async req<T1, T2>(args: {
        endpoint: string;
        query: DocumentNode;
        variables?: T2;
    }): Promise<T1> {
        return await new GraphQLClient(args.endpoint, {
            headers: {
                "x-hasura-admin-secret": "BDp5F7rGBYcNtYHT7NAxb5",
            },
        }).request<T1>(print(args.query), args.variables);
    }

    async getRarity(getRarityInput: GetRarityInput): Promise<RarityOutput[]> {
        return (
            await this.req<any, any>({
                endpoint: this.endpoint,
                query: gql`
                    query MyQuery(
                        $background: String!
                        $species: String!
                        $head: String!
                        $eyes: String!
                        $mouth: String!
                        $clothes: String!
                        $accessory: String!
                    ) {
                        V2_nfts(
                            where: {
                                background: { _eq: $background }
                                species: { _eq: $species }
                                head: { _eq: $head }
                                eyes: { _eq: $eyes }
                                mouth: { _eq: $mouth }
                                clothes: { _eq: $clothes }
                                accessory: { _eq: $accessory }
                            }
                        ) {
                            image_url
                            ap_name
                        }
                    }
                `,
                variables: {
                    background: getRarityInput.background,
                    species: getRarityInput.species,
                    head: getRarityInput.head,
                    eyes: getRarityInput.eyes,
                    mouth: getRarityInput.mouth,
                    clothes: getRarityInput.clothes,
                    accessory: getRarityInput.accessory,
                },
            })
        ).V2_nfts.map((value: { image_url: string; ap_name: string }) => {
            return {
                imgUrl: value.image_url,
                name: value.ap_name,
            };
        });
    }
}
