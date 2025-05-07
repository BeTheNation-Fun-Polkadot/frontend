import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { moonbaseAlpha } from './chain';

export const config = getDefaultConfig({
    appName: 'Be The Nation',
    projectId: 'YOUR_PROJECT_ID',
    chains: [moonbaseAlpha],
}); 