import { createFileRoute } from '@tanstack/react-router'
import FaceRecognitionPage from '@/modules/face-recognition/pages'
export const Route = createFileRoute('/')({ component: FaceRecognitionPage })
