import type { ERROR_MESSAGES } from "./face-recognition.constants";
import type { TAddFaceSchema, TIdentifyFaceSchema } from "./face-recognition.validation";

export type IAddFaceRequest = TAddFaceSchema

export type IIdentifyFaceRequest = TIdentifyFaceSchema

export type IFaceErrorMessage = keyof typeof ERROR_MESSAGES

export type IIdentity = {
    id: string
    user_id: string
    group_id: string
    similarity: number
    metadata?: Record<string, unknown>
    error? : IFaceErrorMessage
} 

