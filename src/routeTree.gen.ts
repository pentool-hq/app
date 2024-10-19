/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OrderPredictionImport } from './routes/order-prediction'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardEnsImport } from './routes/dashboard/$ens'
import { Route as PoolChainIdPoolAddressImport } from './routes/pool/$chainId.$poolAddress'
import { Route as PoolChainIdPoolAddressYtImport } from './routes/pool/$chainId.$poolAddress/yt'
import { Route as PoolChainIdPoolAddressPtImport } from './routes/pool/$chainId.$poolAddress/pt'
import { Route as PoolChainIdPoolAddressLpImport } from './routes/pool/$chainId.$poolAddress/lp'

// Create/Update Routes

const OrderPredictionRoute = OrderPredictionImport.update({
  path: '/order-prediction',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardEnsRoute = DashboardEnsImport.update({
  path: '/$ens',
  getParentRoute: () => DashboardRoute,
} as any)

const PoolChainIdPoolAddressRoute = PoolChainIdPoolAddressImport.update({
  path: '/pool/$chainId/$poolAddress',
  getParentRoute: () => rootRoute,
} as any)

const PoolChainIdPoolAddressYtRoute = PoolChainIdPoolAddressYtImport.update({
  path: '/yt',
  getParentRoute: () => PoolChainIdPoolAddressRoute,
} as any)

const PoolChainIdPoolAddressPtRoute = PoolChainIdPoolAddressPtImport.update({
  path: '/pt',
  getParentRoute: () => PoolChainIdPoolAddressRoute,
} as any)

const PoolChainIdPoolAddressLpRoute = PoolChainIdPoolAddressLpImport.update({
  path: '/lp',
  getParentRoute: () => PoolChainIdPoolAddressRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/order-prediction': {
      id: '/order-prediction'
      path: '/order-prediction'
      fullPath: '/order-prediction'
      preLoaderRoute: typeof OrderPredictionImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/$ens': {
      id: '/dashboard/$ens'
      path: '/$ens'
      fullPath: '/dashboard/$ens'
      preLoaderRoute: typeof DashboardEnsImport
      parentRoute: typeof DashboardImport
    }
    '/pool/$chainId/$poolAddress': {
      id: '/pool/$chainId/$poolAddress'
      path: '/pool/$chainId/$poolAddress'
      fullPath: '/pool/$chainId/$poolAddress'
      preLoaderRoute: typeof PoolChainIdPoolAddressImport
      parentRoute: typeof rootRoute
    }
    '/pool/$chainId/$poolAddress/lp': {
      id: '/pool/$chainId/$poolAddress/lp'
      path: '/lp'
      fullPath: '/pool/$chainId/$poolAddress/lp'
      preLoaderRoute: typeof PoolChainIdPoolAddressLpImport
      parentRoute: typeof PoolChainIdPoolAddressImport
    }
    '/pool/$chainId/$poolAddress/pt': {
      id: '/pool/$chainId/$poolAddress/pt'
      path: '/pt'
      fullPath: '/pool/$chainId/$poolAddress/pt'
      preLoaderRoute: typeof PoolChainIdPoolAddressPtImport
      parentRoute: typeof PoolChainIdPoolAddressImport
    }
    '/pool/$chainId/$poolAddress/yt': {
      id: '/pool/$chainId/$poolAddress/yt'
      path: '/yt'
      fullPath: '/pool/$chainId/$poolAddress/yt'
      preLoaderRoute: typeof PoolChainIdPoolAddressYtImport
      parentRoute: typeof PoolChainIdPoolAddressImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteChildren {
  DashboardEnsRoute: typeof DashboardEnsRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardEnsRoute: DashboardEnsRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

interface PoolChainIdPoolAddressRouteChildren {
  PoolChainIdPoolAddressLpRoute: typeof PoolChainIdPoolAddressLpRoute
  PoolChainIdPoolAddressPtRoute: typeof PoolChainIdPoolAddressPtRoute
  PoolChainIdPoolAddressYtRoute: typeof PoolChainIdPoolAddressYtRoute
}

const PoolChainIdPoolAddressRouteChildren: PoolChainIdPoolAddressRouteChildren =
  {
    PoolChainIdPoolAddressLpRoute: PoolChainIdPoolAddressLpRoute,
    PoolChainIdPoolAddressPtRoute: PoolChainIdPoolAddressPtRoute,
    PoolChainIdPoolAddressYtRoute: PoolChainIdPoolAddressYtRoute,
  }

const PoolChainIdPoolAddressRouteWithChildren =
  PoolChainIdPoolAddressRoute._addFileChildren(
    PoolChainIdPoolAddressRouteChildren,
  )

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/order-prediction': typeof OrderPredictionRoute
  '/dashboard/$ens': typeof DashboardEnsRoute
  '/pool/$chainId/$poolAddress': typeof PoolChainIdPoolAddressRouteWithChildren
  '/pool/$chainId/$poolAddress/lp': typeof PoolChainIdPoolAddressLpRoute
  '/pool/$chainId/$poolAddress/pt': typeof PoolChainIdPoolAddressPtRoute
  '/pool/$chainId/$poolAddress/yt': typeof PoolChainIdPoolAddressYtRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/order-prediction': typeof OrderPredictionRoute
  '/dashboard/$ens': typeof DashboardEnsRoute
  '/pool/$chainId/$poolAddress': typeof PoolChainIdPoolAddressRouteWithChildren
  '/pool/$chainId/$poolAddress/lp': typeof PoolChainIdPoolAddressLpRoute
  '/pool/$chainId/$poolAddress/pt': typeof PoolChainIdPoolAddressPtRoute
  '/pool/$chainId/$poolAddress/yt': typeof PoolChainIdPoolAddressYtRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/order-prediction': typeof OrderPredictionRoute
  '/dashboard/$ens': typeof DashboardEnsRoute
  '/pool/$chainId/$poolAddress': typeof PoolChainIdPoolAddressRouteWithChildren
  '/pool/$chainId/$poolAddress/lp': typeof PoolChainIdPoolAddressLpRoute
  '/pool/$chainId/$poolAddress/pt': typeof PoolChainIdPoolAddressPtRoute
  '/pool/$chainId/$poolAddress/yt': typeof PoolChainIdPoolAddressYtRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/dashboard'
    | '/order-prediction'
    | '/dashboard/$ens'
    | '/pool/$chainId/$poolAddress'
    | '/pool/$chainId/$poolAddress/lp'
    | '/pool/$chainId/$poolAddress/pt'
    | '/pool/$chainId/$poolAddress/yt'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/dashboard'
    | '/order-prediction'
    | '/dashboard/$ens'
    | '/pool/$chainId/$poolAddress'
    | '/pool/$chainId/$poolAddress/lp'
    | '/pool/$chainId/$poolAddress/pt'
    | '/pool/$chainId/$poolAddress/yt'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/dashboard'
    | '/order-prediction'
    | '/dashboard/$ens'
    | '/pool/$chainId/$poolAddress'
    | '/pool/$chainId/$poolAddress/lp'
    | '/pool/$chainId/$poolAddress/pt'
    | '/pool/$chainId/$poolAddress/yt'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  OrderPredictionRoute: typeof OrderPredictionRoute
  PoolChainIdPoolAddressRoute: typeof PoolChainIdPoolAddressRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  DashboardRoute: DashboardRouteWithChildren,
  OrderPredictionRoute: OrderPredictionRoute,
  PoolChainIdPoolAddressRoute: PoolChainIdPoolAddressRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/dashboard",
        "/order-prediction",
        "/pool/$chainId/$poolAddress"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/$ens"
      ]
    },
    "/order-prediction": {
      "filePath": "order-prediction.tsx"
    },
    "/dashboard/$ens": {
      "filePath": "dashboard/$ens.tsx",
      "parent": "/dashboard"
    },
    "/pool/$chainId/$poolAddress": {
      "filePath": "pool/$chainId.$poolAddress.tsx",
      "children": [
        "/pool/$chainId/$poolAddress/lp",
        "/pool/$chainId/$poolAddress/pt",
        "/pool/$chainId/$poolAddress/yt"
      ]
    },
    "/pool/$chainId/$poolAddress/lp": {
      "filePath": "pool/$chainId.$poolAddress/lp.tsx",
      "parent": "/pool/$chainId/$poolAddress"
    },
    "/pool/$chainId/$poolAddress/pt": {
      "filePath": "pool/$chainId.$poolAddress/pt.tsx",
      "parent": "/pool/$chainId/$poolAddress"
    },
    "/pool/$chainId/$poolAddress/yt": {
      "filePath": "pool/$chainId.$poolAddress/yt.tsx",
      "parent": "/pool/$chainId/$poolAddress"
    }
  }
}
ROUTE_MANIFEST_END */
