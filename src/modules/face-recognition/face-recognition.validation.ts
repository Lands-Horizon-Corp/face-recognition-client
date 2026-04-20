
import * as z from 'zod'
import { DIRECTIONS } from './face-recognition.constants'


export const AddFaceSchema = z.object({
    user_id: z.uuid(),
    group_id: z.uuid(),
    direction: z.enum(DIRECTIONS),
    selfie_media: z.any(),
})

export const IdentifyFaceSchema = z.object({
    selfie_media: z.any(),
})

export type TAddFaceSchema = z.infer<typeof AddFaceSchema>
export type TIdentifyFaceSchema = z.infer<typeof IdentifyFaceSchema>