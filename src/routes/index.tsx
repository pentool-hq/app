import {
  Button,
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useAppKit } from '@reown/appkit/react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAccount, useConnect } from 'wagmi';
import { type PendleV2Market } from '../types/pendleV2Api';
import {
  pendleV2FeaturedMarketFetcher,
  pendleV2MarketFetcher,
} from '../utils/pendleApi';
export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  //   const { address, isConnected, caipAddress, status } = useAppKitAccount();
  const { chainId } = useAccount();
  const { open, close } = useAppKit();
  const { connect } = useConnect();
  const limit = 10;
  const {
    data: pendleV2Markets,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pendleV2MarketsNoExpired'],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      pendleV2MarketFetcher(chainId ?? 1, pageParam, limit, false),
    getNextPageParam: (lastPage, pages, lastPageParam: number) =>
      lastPage.total > lastPageParam ? lastPageParam + limit : undefined,
  });

  const { data: pendleV2FeaturedMarket } = useQuery({
    queryKey: ['pendleV2MarketFeature'],
    queryFn: pendleV2FeaturedMarketFetcher,
  });

  const { ref, inView } = useInView();
  const [selectedPendleMarket, selectPendleMarket] =
    useState<PendleV2Market | null>(null);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

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

      <div className='flex flex-row gap-4 max-w-5xl'>
        <Button
          className='shadow-xl p-4 bg-primary'
          onClick={() => {
            open({ view: 'Connect' });
          }}
        >
          <h5>Connect Wallet</h5>
        </Button>

        <div className='border-l border-l-gray-600' />
        <h4>
          mPendle On Arbitrum (ChainId: 42616) release a point of buy at 7.56%.
        </h4>
        {/* {pendleV2FeaturedMarket
          ? pendleV2FeaturedMarket.results.map((market) => (
              <Button
                className={`shadow-xl flex gap-2 py-4 pl-2 pr-4 bg-primary`}
                style={{
                  borderColor: market.accentColor,
                }}
              >
                <img src={market.proIcon} />
                <div className='flex'>
                  <h4>{market.proName}</h4>
                  <h5></h5>
                </div>
              </Button>
            ))
          : 'Loading...'} */}

        <Combobox
          value={selectedPendleMarket}
          onChange={(value) => selectPendleMarket(value)}
        >
          <div className='relative flex'>
            <ComboboxInput
              className='border-2 px-4'
              placeholder='Or select a pool to start...'
              displayValue={(pendleMarket?: PendleV2Market) =>
                pendleMarket?.underlyingAsset.name ?? ''
              }
            />
            <ComboboxButton className='absolute group inset-y-0 right-0 px-2.5'>
              <ChevronDownIcon className='size-4 fill-white/60 group-data-[hover]:fill-white' />
            </ComboboxButton>
          </div>
          <ComboboxOptions
            anchor='bottom'
            transition
            className={clsx(
              'w-[var(--input-width)] border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
              'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 h-[25vh]'
            )}
          >
            {pendleV2Markets ? (
              <>
                {pendleV2Markets.pages.map((page) => (
                  <>
                    {page.results.map((pendleMarket) => (
                      <ComboboxOption
                        key={pendleMarket.id}
                        value={pendleMarket}
                        className='group flex cursor-default items-center gap-2 py-1.5 px-3 select-none data-[focus]:bg-white/10'
                      >
                        {pendleMarket.underlyingAsset.name}
                      </ComboboxOption>
                    ))}
                  </>
                ))}

                <div>
                  <button
                    ref={ref}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                  >
                    {isFetchingNextPage
                      ? 'Loading more...'
                      : hasNextPage
                        ? 'Load Newer'
                        : 'Nothing more to load'}
                  </button>
                </div>
              </>
            ) : (
              <ComboboxOption value={'Failed'} disabled>
                Failed To load pendle markets.
              </ComboboxOption>
            )}
          </ComboboxOptions>
        </Combobox>
      </div>
    </div>
  );
}
