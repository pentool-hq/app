import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

import { createAppKit } from '@reown/appkit/react';

import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { arbitrum, mainnet, type AppKitNetwork } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
const queryClient = new QueryClient();
const projectId = '_';
const metadata = {
  name: 'Pentool',
  description: 'Toolbox for Pendle.Finance',
  url: 'http://localhost', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};
const networks = [mainnet, arbitrum] satisfies [
  AppKitNetwork,
  ...AppKitNetwork[],
];
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    email: false,
    socials: false,
    analytics: false, // Optional - defaults to your Cloud configuration
  },
});

export function AppKitProvider({ children }: React.PropsWithChildren) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <AppKitProvider>
      <div className='p-2 flex gap-2 text-lg'>
        <div className='p-2 flex gap-2 text-lg grow'>
          <Link to='/'>
            <img src='/pentool_icon.png' height={48} width={48} />
          </Link>
          <div className='flex gap-8 my-auto mx-auto'>
            <Link
              to='/'
              activeProps={{
                className: 'font-bold ',
              }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>

            {/* <Link
              to='/yt-order-timing'
              activeProps={{ className: 'font-bold' }}
            >
              {'YT Order Timing'}
            </Link>
            <Link
              to='/about'
              activeProps={{
                className: 'font-bold',
              }}
            >
              About
            </Link> */}
          </div>
        </div>
        <div className=' my-auto'>
          {/* <div className='justify-end flex'>
            <w3m-button />
          </div> */}
        </div>
      </div>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools position='bottom-right' /> */}
    </AppKitProvider>
  );
}
