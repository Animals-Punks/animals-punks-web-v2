import { print, DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";

import {
    IGraphqlService,
    GetRarityInput,
    RarityOutput,
} from "@common/interfaces/graphql-service.interface";

export default class GraphqlService implements IGraphqlService {
    readonly endpoint = `http://${process.env.NEXT_PUBLIC_GRAPHQL_END_POINT}:${process.env.NEXT_PUBLIC_GRAPHQL_PORT}/v1/graphql`;

    async req<T1, T2>(args: {
        endpoint: string;
        query: DocumentNode;
        variables?: T2;
    }): Promise<T1> {
        return await new GraphQLClient(args.endpoint, {
            headers: {
                "x-hasura-admin-secret": `${process.env.NEXT_PUBLIC_SECRET}`,
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

    async getNameByUrl(url: string): Promise<RarityOutput[]> {
        return (
            await this.req<any, any>({
                endpoint: this.endpoint,
                query: gql`
                    query NftNameQuery($nftUrl: String!) {
                        V2_nft_name(where: { nft_url: { _eq: $nftUrl } }) {
                            nft_name
                            nft_url
                        }
                    }
                `,
                variables: {
                    nftUrl: url,
                },
            })
        ).V2_nft_name.map((value: { nft_name: string; nft_url: string }) => {
            return {
                imgUrl: value.nft_url,
                name: value.nft_name,
            };
        });
    }

    async getNameByNumber(apName: string): Promise<RarityOutput[]> {
        return (
            await this.req<any, any>({
                endpoint: this.endpoint,
                query: gql`
                    query NftQuery($name: String!) {
                        V2_nfts(where: { ap_name: { _eq: $name } }) {
                            ap_name
                            image_url
                        }
                    }
                `,
                variables: {
                    name: apName,
                },
            })
        ).V2_name.map((value: { ap_name: string; image_url: string }) => {
            return {
                imgUrl: value.image_url,
                name: value.ap_name,
            };
        });
    }

    async getV1UsedAp(): Promise<any> {
        return (
            await this.req<any, any>({
                endpoint: this.endpoint,
                query: gql`
                    query UsedV1Query {
                        Ticket_minted_ap_v1 {
                            ap_number
                        }
                    }
                `,
            })
        ).Ticket_minted_ap_v1.map((value: { ap_number: number }) => {
            return {
                apNumber: value.ap_number,
            };
        });
    }

    async getV2UsedAp(): Promise<any> {
        return (
            await this.req<any, any>({
                endpoint: this.endpoint,
                query: gql`
                    query GetV2Used {
                        Ticket_minted_ap_v2 {
                            ap_number
                        }
                    }
                `,
            })
        ).Ticket_minted_ap_v2.map((value: { ap_number: number }) => {
            return {
                apNumber: value.ap_number,
            };
        });
    }

    async getTicketImage(type: string): Promise<any> {
        return (
            await this.req<any, any>({
                endpoint: this.endpoint,
                query: gql`
                    query GetTicketImage($type: String!) {
                        Ticket_ticket_image(where: { type: { _eq: $type } }) {
                            url
                        }
                    }
                `,
                variables: {
                    type: type,
                },
            })
        ).Ticket_ticket_image.map((value: { url: string }) => {
            return {
                url: value.url,
            };
        });
    }

    async getTicketCurrnetNumber(type: string): Promise<any> {
        return (
            await this.req<any, any>({
                endpoint: this.endpoint,
                query: gql`
                    query GetTieketCurrentNumber($type: String!) {
                        Ticket_ticket_number_enum(
                            where: { type: { _eq: $type } }
                        ) {
                            current_ticket_number
                        }
                    }
                `,
                variables: {
                    type: type,
                },
            })
        ).Ticket_ticket_number_enum.map(
            (value: { current_ticket_number: number }) => {
                return {
                    currentTicketNumber: value.current_ticket_number,
                };
            }
        );
    }
}
