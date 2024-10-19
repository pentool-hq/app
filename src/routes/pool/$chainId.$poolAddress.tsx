import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/pool/$chainId/$poolAddress')({
  component: PoolAnalysticView,
});

function PoolAnalysticView() {
  const { chainId, poolAddress } = Route.useParams();

  const poolPairName = 'mPendle 24DEC2024';
  return (
    <div className='flex flex-col py-8 px-20 gap-4'>
      <div className='flex gap-4 grid-rows-3'>
        <div className='flex flex-row'>
          <img alt='chain-logo' />
          <h3>Arbitrum</h3>
        </div>
        <h2 className='my-auto p-1'>{poolPairName}</h2>
        <h3 className=' outline my-auto flex outline-ptGreen p-1'>
          {'Active'}
        </h3>
        <div className='grow' />
        <div className='flex flex-row gap-3'>
          <Link
            className='bg-ptGreen text-gray-800 p-2 shadow-2xl'
            to='/pool/$chainId/$poolAddress/pt'
            params={{ chainId, poolAddress }}
            activeProps={{ className: 'font-bold' }}
          >
            <div className='flex'>
              <h3>PT</h3>
            </div>
            <h6>{'40.00 %'}</h6>
          </Link>
          <Link
            to='/pool/$chainId/$poolAddress/yt'
            params={{ chainId, poolAddress }}
            activeProps={{ className: 'font-bold' }}
            className='bg-ytBlue text-gray-800 p-2 shadow-2xl'
          >
            <div className='flex'>
              <h3>YT</h3>
            </div>
            <h6>{'40.00 %'}</h6>
          </Link>
          <Link
            to='/pool/$chainId/$poolAddress/lp'
            params={{ chainId, poolAddress }}
            activeProps={{ className: 'font-bold' }}
            className='bg-gradient-to-r from-ptGreen to-ytBlue text-gray-800 p-2 shadow-2xl drop-shadow-2xl'
          >
            <div className='flex'>
              <h3>LP</h3>
            </div>
            <h6>{'40.00 %'}</h6>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

function PTView() {
  return <div id='pt'>T</div>;
}
