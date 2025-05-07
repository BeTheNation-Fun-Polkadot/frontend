import { defineChain } from 'viem'

export const moonbaseAlpha = defineChain({
    id: 1287,
    name: 'Moonbase Alpha',
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: 'DEV',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.moonbase.moonbeam.network'],
            webSocket: ['wss://rpc.moonbase.moonbeam.network'],
        },
    },
    blockExplorers: {
        default: { name: 'Moonscan', url: 'https://moonbase.moonscan.io' },
    },
})