import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { westendAssetHub } from './chain';

export const config = getDefaultConfig({
    appName: 'Be The Nation',
    projectId: 'YOUR_PROJECT_ID',
    chains: [westendAssetHub],
}); 