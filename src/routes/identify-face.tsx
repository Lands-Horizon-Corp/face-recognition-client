import IdentifyFacePage from '#/modules/face-recognition/pages/indentify-face'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/identify-face')({
  component: IdentifyFacePage,
})

