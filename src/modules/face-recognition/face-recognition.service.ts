import { AI_API } from "#/providers/api";
import { createMutationFactory } from "#/providers/repositories/mutation-factory";
import { FACE_RECOGNITION_API_URL, HTTP_STATUS } from "#/constants";
import type { IAddFaceRequest, IFaceErrorMessage, IIdentity } from "./face-recognition.types";
import { ERROR_MESSAGES } from "./face-recognition.constants";

export const useAddFace = createMutationFactory<
    { id: string, error?: IFaceErrorMessage },
    Error,
    IAddFaceRequest
>({

    mutationFn: async (payload) => {
        const formData = new FormData();
        formData.append('user_id', payload.user_id);
        formData.append('group_id', payload.group_id);
        formData.append('direction', payload.direction);
        formData.append('selfie_media', payload.selfie_media);
        const response = await AI_API.uploadFile<{ id: string, error?: IFaceErrorMessage }>(
            `${FACE_RECOGNITION_API_URL}/api/v1/face/add`, 
            formData, 
            {},
            {
            validateStatus: (status) => 
                status === HTTP_STATUS.OK ||
                status === HTTP_STATUS.BAD_REQUEST
            })

        const errorCode = response.data.error

        if (errorCode) {
            throw new Error(ERROR_MESSAGES[errorCode])
        }
        return response.data
    }
})
    


export const useIdentifyFace = createMutationFactory<
    IIdentity,
    Error,
    {file : File}
>({

    mutationFn: async (payload) => {
        const formData = new FormData();
        formData.append('file', payload.file);
        const response = await AI_API.uploadFile<IIdentity>(
            `${FACE_RECOGNITION_API_URL}/api/v1/face/identify`, 
            formData, 
            {}, 
            {
            validateStatus: (status) => 
                status === HTTP_STATUS.OK  ||
                status === HTTP_STATUS.BAD_REQUEST
        })

        const errorCode = response.data.error

        if (errorCode) {
            throw new Error(ERROR_MESSAGES[errorCode])
        }
        return response.data
    }
})  

