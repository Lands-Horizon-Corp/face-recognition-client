import type { TAddFaceSchema, TIdentifyFaceSchema } from "./face-recognition.validation";

export type IAddFaceRequest = TAddFaceSchema

export type IIdentifyFaceRequest = TIdentifyFaceSchema


export type IIdentity = {
    user_id: string
    group_id: string
    metadata?: Record<string, unknown>
}

