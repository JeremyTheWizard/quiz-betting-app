/* eslint-disable @typescript-eslint/no-explicit-any */
/*TODO: resolve explicit any */
import * as fcl from '@onflow/fcl';
import { init } from '@onflow/fcl-wc';
import router from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { NETWORK } from '@/constants/networks';
import ROUTES from '@/constants/routes';

interface IWeb3Context {
  connect: () => void;
  logout: () => void;
  executeTransaction: (cadence: string, args?: any, options?: any) => void;
  executeScript: (cadence: string, args?: any) => any;
  user: {
    loggedIn: boolean | null;
    addr: string;
  };
  transaction: {
    id: string | null;
    inProgress: boolean;
    status: number | null;
    errorMessage: string;
  };
}

export const Web3Context = createContext<IWeb3Context>({} as IWeb3Context);

export const useWeb3Context = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3Context must be used within a Web3ContextProvider');
  }
  return context;
};

export const Web3ContextProvider = ({
  children,
}: {
  children: ReactNode;
  network?: string;
}) => {
  const [user, setUser] = useState({ loggedIn: null, addr: '' });
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState<number | null>(
    null
  );
  const [transactionError, setTransactionError] = useState('');
  const [txId, setTxId] = useState(null);
  const [client, setClient] = useState(null);

  const wcSetup = useCallback(async (appTitle: string, iconUrl: string) => {
    const DEFAULT_APP_METADATA = {
      name: appTitle,
      description: appTitle,
      url: window.location.origin,
      icons: [iconUrl],
    };

    const { FclWcServicePlugin, client } = await init({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID, // required
      metadata: DEFAULT_APP_METADATA, // optional
      includeBaseWC: true, // optional, default: false
    });

    setClient(client);
    fcl.pluginRegistry.add(FclWcServicePlugin);
  }, []);

  useEffect(() => {
    const {
      flowNetwork,
      accessApi,
      walletDiscovery,
      walletDiscoveryApi,
      walletDiscoveryInclude,
      addresses,
    } = NETWORK;
    const iconUrl = window.location.origin + '/images/image-placeholder.png';
    const appTitle = process.env.NEXT_PUBLIC_APP_NAME || 'FANBET';

    fcl.config({
      'app.detail.title': appTitle,
      'app.detail.icon': iconUrl,
      'accessNode.api': accessApi, // connect to Flow
      'flow.network': flowNetwork,
      'discovery.wallet': walletDiscovery, // use wallets on public discovery
      'discovery.authn.endpoint': walletDiscoveryApi, // public discovery api endpoint
      'discovery.authn.include': walletDiscoveryInclude, // opt-in wallets
      '0xFungibleToken': addresses.FungibleToken,
      '0xFlowToken': addresses.FlowToken,
      '0xNonFungibleToken': addresses.NonFungibleToken,
      '0xMetadataViews': addresses.MetadataViews,
    });

    if (!client) {
      wcSetup(appTitle, iconUrl);
    }
  }, [client, wcSetup]);

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  const connect = useCallback(() => {
    fcl.authenticate();
  }, []);

  const logout = useCallback(async () => {
    await fcl.unauthenticate();
    router.push(ROUTES.HOME);
  }, []);

  const executeTransaction = useCallback(
    async (cadence: string, args: any = () => [], options: any = {}) => {
      setTransactionInProgress(true);
      setTransactionStatus(-1);

      const transactionId = await fcl
        .mutate({
          cadence,
          args,
          limit: options.limit || 50,
        })
        .catch((e: Error) => {
          setTransactionInProgress(false);
          setTransactionStatus(500);
          setTransactionError(String(e));
        });

      if (transactionId) {
        setTxId(transactionId);
        fcl.tx(transactionId).subscribe((res: any) => {
          setTransactionStatus(res.status);
          setTransactionInProgress(false);
        });
      }
    },
    []
  );

  const executeScript = useCallback(
    async (cadence: string, args: any = () => []) => {
      try {
        return await fcl.query({
          cadence: cadence,
          args,
        });
      } catch (error) {
        return error;
      }
    },
    []
  );

  const providerProps = useMemo(
    () => ({
      connect,
      logout,
      user,
      executeTransaction,
      executeScript,
      transaction: {
        id: txId,
        inProgress: transactionInProgress,
        status: transactionStatus,
        errorMessage: transactionError,
      },
    }),
    [
      connect,
      logout,
      txId,
      transactionInProgress,
      transactionStatus,
      transactionError,
      executeTransaction,
      executeScript,
      user,
    ]
  );

  return (
    <Web3Context.Provider
      value={{
        ...providerProps,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
