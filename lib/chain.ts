import { defineChain } from 'viem'

export const westendAssetHub = defineChain({
    id: 420420421,
    name: 'Westend Asset Hub',
    nativeCurrency: {
        decimals: 18,
        name: 'Westend',
        symbol: 'WND',
    },
    rpcUrls: {
        default: {
            http: ['https://westend-asset-hub-eth-rpc.polkadot.io'],
            webSocket: ['wss://westend-asset-hub-eth-rpc.polkadot.io'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://polkadot.js.org/apps' },
    },
})