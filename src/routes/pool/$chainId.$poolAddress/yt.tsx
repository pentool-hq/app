import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pool/$chainId/$poolAddress/yt')({
  component: () => <div>Hello /pool/$chainId/$poolAddress/yt!</div>,
})
