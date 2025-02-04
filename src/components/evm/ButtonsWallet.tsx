import { useConnectWallet } from '@web3-onboard/react'
import { useSetChain } from '@web3-onboard/react'
import { Contract, ethers } from 'ethers'
import abi from './abis/token.json'
import { ContractRunner } from 'ethers'

const ButtonsWallet = () => {
  const [
    {
      wallet, // the wallet that has been connected or null if not yet connected
    },
    connect, // function to call to initiate user to connect wallet
    disconnect, // function to call with wallet<DisconnectOptions> to disconnect wallet
  ] = useConnectWallet() 
  const [
    {
      chains, // the list of chains that web3-onboard was initialized with
      connectedChain, // the current chain the user's wallet is connected to
   
    },
    setChain, // function to call to initiate user to switch chains in their wallet
  ] = useSetChain()
  console.log('wallet', wallet)
  const handleChain = async () => {
    console.log('connectedChain', connectedChain)
    console.log('available chains', chains)
    const arbitrumChain = chains.find((chain) => chain.label?.toLowerCase() === 'ethereum')
    setChain({ chainId: `${arbitrumChain?.id}` })
  }

  const handleTx = async () => {
    if (!wallet) return
    const ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
    const signer = await ethersProvider.getSigner()
    console.log('signer', signer)
    const contract = new Contract('0xdAC17F958D2ee523a2206206994597C13D831ec7', abi, signer as unknown as ContractRunner)

    const tx = await contract.approve('0x24851df2F6eb5CA018d39278241643B027ea95D1', 0)
    await tx.wait()
    console.log('tx', tx)
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button className="btn btn-primary" onClick={() => connect()}>
        Connect Wallet EVM
      </button>
      <button className="btn btn-primary" onClick={() => disconnect({ label: wallet?.label as string })}>
        Disconnect Wallet EVM
      </button>
      <button className="btn btn-primary" onClick={() => handleChain()}>
        Change network
      </button>
      <button className="btn btn-primary" onClick={() => handleTx()}>
        Test tx
      </button>
    </div>
  )
}

export default ButtonsWallet
