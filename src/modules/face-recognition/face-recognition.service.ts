import { AI_API } from "#/providers/api";

export const addFace = async (formData: FormData) => {
    const response = await AI_API.uploadFile('/api/faces', formData)
    return response.data
}


export const identifyFace = async (formData: FormData) => {
    const response = await AI_API.uploadFile('/api/faces/identify', formData)
    return response.data
}

