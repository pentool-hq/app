import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order-prediction')({
  component: () => <div>Hello /order-prediction!</div>,
})
