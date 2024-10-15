import { Button } from '@headlessui/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className='flex flex-col py-8 px-20 gap-4 max-w-5xl'>
      <h2 className='text-5xl'>
        {'The Only Analytics Toolkit'} <br />
        {'For '}
        <span className=' text-[#7AB7FF]'>YT</span>/
        <span className=' text-[#1BE3C2]'>PT</span>
        {' Trader & '} <span className='text-glow'>LP</span>
      </h2>

      <h4>
        Advanced analytics, useful charts, and with so many other tools to help
        trade better on PT/YT & better management to liquidity provider.
      </h4>
      <br />
      <div className='flex flex-row gap-4 max-w-lg'>
        <Button className='shadow-lg rounded-3xl p-4'>
          🏗️ Under Construction
        </Button>
        <div className='border-l border-l-gray-600' />
        <h2>"</h2>
        <h5>
          We are still under active construction 🚧 of Pentool. Demo is expected
          to be out in few days.
        </h5>
      </div>
    </div>
  );
}
