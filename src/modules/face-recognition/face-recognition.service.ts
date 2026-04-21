import { AI_API } from "#/providers/api";
import { createMutationFactory } from "#/providers/repositories/mutation-factory";
import { FACE_RECOGNITION_API_URL } from "#/constants";
import type { IAddFaceRequest } from "./face-recognition.types";

export const useAddFace = createMutationFactory<
    unknown,
    Error,
    IAddFaceRequest
>({

    mutationFn: async (payload) => {
        const formData = new FormData();
        formData.append('user_id', payload.user_id);
        formData.append('group_id', payload.group_id);
        formData.append('direction', payload.direction);
        formData.append('selfie_media', payload.selfie_media);
        const response = await AI_API.uploadFile<IAddFaceRequest>(`${FACE_RECOGNITION_API_URL}/api/v1/face/add`, formData)
        return response.data
    }
})
    


export const useIdentifyFace = createMutationFactory<
    unknown,
    Error,
    {file : File}
>({

    mutationFn: async (payload) => {
        const formData = new FormData();
        formData.append('file', payload.file);
        const response = await AI_API.uploadFile(`${FACE_RECOGNITION_API_URL}/api/v1/face/identify`, formData)
        return response.data
    }
})  

