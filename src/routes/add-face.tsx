import AddFacePage from '#/modules/face-recognition/pages/add-face'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/add-face')({
  component: AddFacePage,
})
