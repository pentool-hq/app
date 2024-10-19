import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pool/$chainId/$poolAddress/pt')({
  component: () => <div>Hello /pool/$chainId/$poolAddress/pt!</div>,
})
