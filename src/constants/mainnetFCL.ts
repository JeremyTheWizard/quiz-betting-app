import { NETWORKS } from '@/constants/networks';

const {
  flowNetwork,
  accessApi,
  walletDiscovery,
  walletDiscoveryApi,
  walletDiscoveryInclude,
  addresses,
} = NETWORKS['mainnet' as keyof typeof NETWORKS];

// const iconUrl = window.location.origin + '/images/image-placeholder.png';
const appTitle = process.env.NEXT_PUBLIC_APP_NAME || 'FANBET';

export const config = {
  'app.detail.title': appTitle,
  // 'app.detail.icon': iconUrl,
  'accessNode.api': accessApi, // connect to Flow
  'flow.network': flowNetwork,
  'discovery.wallet': walletDiscovery, // use wallets on public discovery
  'discovery.authn.endpoint': walletDiscoveryApi, // public discovery api endpoint
  'discovery.authn.include': walletDiscoveryInclude, // opt-in wallets
  '0xFungibleToken': addresses.FungibleToken,
  '0xFlowToken': addresses.FlowToken,
  '0xNonFungibleToken': addresses.NonFungibleToken,
  '0xMetadataViews': addresses.MetadataViews,
};
