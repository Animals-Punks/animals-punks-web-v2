import { SetterOrUpdater, useRecoilState } from "recoil";

import { updateNameState } from "@common/services/recoil/updateNameState";
import { userService } from "@User/services";

export default async function useMixTokenBox(apNumber: number) {
    const [updateName, setUpdateName] = useRecoilState(updateNameState);
    return { updateName, setUpdateName };
}
