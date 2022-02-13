import VMintBabyPunks from "@User/components/MintBabyPunks/MintBabyPunks.view";
import { useMintBabyPunks } from "@User/hooks";

const MintBabyPunks: React.FC = () => {
    const { extraList, owndAp, usedAp } = useMintBabyPunks();

    return (
        <VMintBabyPunks
            gifSource="gif"
            mixBalance="4"
            extraList={extraList}
            owndApList={owndAp}
            usedApList={usedAp}
        />
    );
};

export default MintBabyPunks;
