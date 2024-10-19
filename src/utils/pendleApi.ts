import type { Address } from 'viem';
import type {
  PendleV2FeaturedMarket,
  PendleV2Markets,
} from '../types/pendleV2Api';

export const pendleV2MarketFetcher = (
  chainId: number,
  skip: number,
  limit: number,
  is_expired: boolean
) =>
  fetch(
    `https://api-v2.pendle.finance/core/v1/${chainId}/markets?skip=${skip}&limit=${limit}&is_expired=${is_expired}`
  ).then((res) => res.json() as Promise<PendleV2Markets>);

const pendleV2PositionInfo = (address: Address, chainId: number) =>
  `https://api-v2.pendle.finance/pnl/v2/pnl/gained/${address}/${chainId}/positions`;

export const pendleV2FeaturedMarketFetcher = () =>
  fetch('https://api-v2.pendle.finance/bff/v2/1/markets/featured?limit=3').then(
    (res) => res.json() as Promise<PendleV2FeaturedMarket>
  );
