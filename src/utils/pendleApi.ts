import type { Address } from 'viem';

const pendleV2MarketFetcher = (
  chainId: number,
  skip: number,
  limit: number,
  is_expired: boolean
) =>
  fetch(
    `https://api-v2.pendle.finance/core/v1/${chainId}/markets?skip=${skip}&limit=${limit}&is_expired=${is_expired}`
  ).then((res) => res.json());

const pendleV2PositionInfo = (address: Address, chainId: number) =>
  `https://api-v2.pendle.finance/pnl/v2/pnl/gained/${address}/${chainId}/positions`;
