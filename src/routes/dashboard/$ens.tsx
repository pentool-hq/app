import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$ens')({
  component: ENSView,
})

function ENSView() {
  const { ens } = Route.useParams()
  return <>{ens}</>
}
