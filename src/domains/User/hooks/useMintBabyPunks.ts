export default function useMintBabyPunks(): {
    extraList: Record<any, any>[];
    owndAp: Record<any, any>[];
    usedAp: Record<any, any>[];
} {
    const extraList = [
        {
            species: "Tiger",
            extra: 1,
        },
        {
            species: "Cat",
            extra: 2,
        },
        {
            species: "Ape",
            extra: 3,
        },
        {
            species: "Rabbit",
            extra: 4,
        },
        {
            species: "Tuttle",
            extra: 5,
        },
        {
            species: "Seal",
            extra: 6,
        },
        {
            species: "Pig",
            extra: 7,
        },
        {
            species: "Dog",
            extra: 8,
        },
    ];

    const owndAp = [
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
        { image: "owned" },
    ];

    const usedAp = [
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
        { image: "used" },
    ];
    return { extraList, owndAp, usedAp };
}
