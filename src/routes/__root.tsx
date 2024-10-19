import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { createAppKit } from '@reown/appkit/react';

import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { arbitrum, mainnet, type AppKitNetwork } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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

const client = new QueryClient();
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
      <QueryClientProvider client={client}>
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

              <Link to='/dashboard' activeProps={{ className: 'font-bold' }}>
                {'Dashboard'}
              </Link>
              <Link
                to='/about'
                activeProps={{
                  className: 'font-bold',
                }}
              >
                About
              </Link>
            </div>
          </div>
          <div className='my-auto'>
            <div className='justify-end flex'>
              <w3m-button />
            </div>
          </div>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools position='bottom-right' />
        <ReactQueryDevtools position='bottom' />
      </QueryClientProvider>
    </AppKitProvider>
  );
}
