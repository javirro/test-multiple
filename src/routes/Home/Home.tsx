import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { buyWithSol } from '../../components/solana/buyWithSol'
import { Wallet } from '@coral-xyz/anchor'
import ButtonsWallet from '../../components/evm/ButtonsWallet'


function Home() {
  // const { connected, publicKey, wallet, sendTransaction } = useWallet()
  // console.log({ connected, publicKey, wallet, sendTransaction })
  const wallet = useAnchorWallet()
  const onClick = async () => {
    try {
      await buyWithSol(wallet as unknown as Wallet, wallet?.publicKey)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center text-3xl font-bold">
      <div className="App">
        <WalletMultiButton />
        <WalletDisconnectButton />
        <button className="bg-gray-900 text-orange-200 p-4 border-0 rounded-md" onClick={() => onClick()}>
          Buy with Solana
        </button>
        <ButtonsWallet />
      </div>
    </main>
  )
}
export default Home
