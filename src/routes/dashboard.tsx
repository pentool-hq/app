import { Field, Input, Label } from '@headlessui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: YTOrderTiming,
})

function YTOrderTiming() {
  return (
    <div className="p-4 flex gap-2 flex-col">
      <h2>YT & PT Timing Strategy</h2>
      <h3>Please choose a pool from below</h3>
      <form>
        <Field className="flex flex-col">
          <Label as="ruby">Market Contract</Label>
          <Input className="border-2" placeholder="0x1234..."></Input>
        </Field>

        <Field className="flex flex-col">
          <Label as="ruby">YT Contract</Label>
          <Input className="border-2" placeholder="0x1234..."></Input>
        </Field>
      </form>
      <h4> {'-> Manual Mode'}</h4>
    </div>
  )
}
