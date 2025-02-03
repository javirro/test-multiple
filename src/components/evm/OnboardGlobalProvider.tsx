import { PropsWithChildren } from 'react'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import okxWallet from '@web3-onboard/okx'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import walletConnectModule from '@web3-onboard/walletconnect'
import { CHAINS_ONBOARD_CONFIG } from './chains'

const OnBoardGloablProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { sepolia, ethereum, arbitrum, bsc, base } = CHAINS_ONBOARD_CONFIG
  const walletConnectOptions = {
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    /**
     * Chains required to be supported by all wallets connecting to your DApp
     */
    requiredChains: [ arbitrum.id, ethereum.id, bsc.id],
    /**
     * Chains required to be supported by all wallets connecting to your DApp
     */
    optionalChains: [ arbitrum.id, ethereum.id, bsc.id],
    /**
     * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
     * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
     * To connect with WalletConnect
     */
    dappUrl: 'http://YourAwesomeDapp.com',
  }

  const chains = [sepolia, ethereum, arbitrum, bsc, base]
  const wallets = [injectedModule(), okxWallet(), coinbaseWalletModule(), walletConnectModule(walletConnectOptions)]
  const web3Onboard = init({
    wallets,
    chains,
    appMetadata: {
      name: 'Web3-Onboard Demo',
      icon: '<svg>App Icon</svg>',
      description: 'A demo of Web3-Onboard.',
    },
    theme: 'dark',
  })
  return <Web3OnboardProvider web3Onboard={web3Onboard}>{children}</Web3OnboardProvider>
}

export default OnBoardGloablProvider
