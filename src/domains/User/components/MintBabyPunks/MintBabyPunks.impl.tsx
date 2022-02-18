import VMintBabyPunks from "@User/components/MintBabyPunks/MintBabyPunks.view";
import { useMintBabyPunks } from "@User/hooks";
import { userService } from "../../services";

const MintBabyPunks: React.FC = () => {
    const {
        extraList,
        ownedV2ImageList,
        setOwnedV2ImageList,
        selectedFirstAp,
        setselectedFirstAp,
        selectedSecoundAp,
        setselectedSecoundAp,
        ownedV2Metadata,
        setownedV2Metadata,
        kaikasAddress,
        setKaikasAddress,
        usedApList,
        setUsedApList,
        searchApNumber,
        setSearchApNumber,
        mix,
    } = useMintBabyPunks();

    const connectKaikasWallet = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            const result = await klaytn.enable();
            const address = result[0];
            setKaikasAddress(address);
            const v2metaDatas = await userService.getKlubsV2Metadata(
                "0x58413c1dcdccea0c327d002adca1e0ce87b86de7"
            );
            setownedV2Metadata(v2metaDatas);
            const v2ImageUrlList = [];
            for (const v2MetaData of v2metaDatas) {
                const imageUrl = v2MetaData.image;
                v2ImageUrlList.push(imageUrl);
            }
            setOwnedV2ImageList(v2ImageUrlList);
        }
    };

    const selectV2 = (
        species: string,
        name: string,
        imageUrl: string,
        nftId: number
    ) => {
        if (selectedFirstAp[0].string === "test") {
            if (
                selectedSecoundAp[0].string !== "test" &&
                selectedSecoundAp[0].name === name
            ) {
                setselectedSecoundAp([{ string: "test" }]);
            } else {
                setselectedFirstAp([{ species, name, imageUrl, nftId }]);
            }
        } else if (selectedFirstAp[0].name === name) {
            setselectedFirstAp([{ string: "test" }]);
        } else if (selectedSecoundAp[0].name === name) {
            setselectedSecoundAp([{ string: "test" }]);
        } else if (selectedSecoundAp[0].string !== "test") {
            alert("애니멀 펑크는 최대 2개까지 선택이 가능합니다.");
        } else if (selectedFirstAp[0].species !== species) {
            alert("같은 종류의 애펑을 선택해주세요.");
        } else if (selectedSecoundAp[0].string === "test") {
            setselectedSecoundAp([{ species, name, imageUrl, nftId }]);
        }
    };

    const matingButton = async () => {
        if (kaikasAddress.length === 0) {
            alert("카이카스 지갑을 먼저 연결해주세요!");
        } else if (
            selectedFirstAp[0].string === "test" ||
            selectedSecoundAp[0].string === "test"
        ) {
            alert("애니멀 펑크를 2개 선택해주세요!");
        } else {
            const apNumber = [
                selectedFirstAp[0].nftId,
                selectedSecoundAp[0].nftId,
            ];
            const species = [
                selectedFirstAp[0].species,
                selectedSecoundAp[0].species,
            ];
            await userService.mintBabyAnimalsPunks(
                kaikasAddress,
                apNumber,
                species
            );
        }
    };

    const searchNumberOnChange = (event: any) => {
        setSearchApNumber(event.target.value);
    };

    const searchNumberOnClick = async () => {
        const parseSearchNumber = Number(searchApNumber);
        if (parseSearchNumber === 0) {
            const usedImageListOnChain = await userService.getUsedApOnChain();
            setUsedApList(usedImageListOnChain);
        } else {
            const usedImageListOnChain = await userService.getUsedOneAPOnChain(
                parseSearchNumber
            );
            setUsedApList(usedImageListOnChain);
        }
    };

    return (
        <VMintBabyPunks
            mixBalance={mix}
            extraList={extraList}
            ownedApListOnClick={connectKaikasWallet}
            owndApList={ownedV2ImageList}
            usedApList={usedApList}
            ownedV2Metadata={ownedV2Metadata}
            selectV2={selectV2}
            selectedFirstAp={selectedFirstAp}
            setselectedSecoundAp={selectedSecoundAp}
            matingButton={matingButton}
            searchNumberOnChange={searchNumberOnChange}
            searchNumberOnClick={searchNumberOnClick}
        />
    );
};

export default MintBabyPunks;
