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
        limitSupply,
    } = useMintBabyPunks();

    const connectKaikasWallet = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            const result = await klaytn.enable();
            const address = result[0];
            setKaikasAddress(address);
            const v2metaDatas = await userService.getKlubsV2Metadata("0xa61ce8b5ea8f08929e3b07f120ec1d0b8de19144");
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

    const timeValidate = () => {
        const curr = new Date();
        const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);

        const mintTime = new Date(2022, 2, 27, 20);
        const firstMintTimeUtc =
            mintTime.getTime() + mintTime.getTimezoneOffset() * 60 * 1000;
        const firstMintKrCurr = new Date(firstMintTimeUtc + KR_TIME_DIFF);
        const mintDate = kr_curr.getDate() - firstMintKrCurr.getDate();
        const calMintTime = kr_curr.getHours() - firstMintKrCurr.getHours();

        if (mintDate >= 0) {
            if (calMintTime >= 0) {
                return true;
            } else if (mintDate > 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    };

    const matingButton = async () => {
        const timeValidateResult = timeValidate();
        // if (timeValidateResult === true) {
        if (limitSupply === 0) {
            alert("민팅이 종료 되었습니다.");
        } else if (kaikasAddress.length === 0) {
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
            try {
                const mintResult = await userService.mintBabyAnimalsPunks(
                    kaikasAddress,
                    apNumber,
                    species
                );
                if (mintResult) {
                    window.location.reload();
                }
            } catch (error) {
                alert(error);
            }
        }
        // } else {
        //     alert("아직 민팅 시간이 되지 않았습니다.")
        // }
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
