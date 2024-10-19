import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pool/$chainId/$poolAddress/lp')({
  component: () => <div>Hello /pool/$chainId/$poolAddress/lp!</div>,
})
