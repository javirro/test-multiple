import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY, SYSVAR_RENT_PUBKEY } from '@solana/web3.js'
import { Program, AnchorProvider, Wallet, Idl, BN } from '@coral-xyz/anchor'
import programIdl from './IDLs/meerkat_presale_sol.json'

export const buyWithSol = async (wallet: Wallet | null, userPublicKey: PublicKey | undefined) => {
  if (!wallet || !userPublicKey) return
  const NETWORK = 'https://api.devnet.solana.com'
  const SOLANA_PROGRAM_SEED = 'meerkat_presale'
  const RECEIVER = new PublicKey('7YXPj2a1nUDbCeMcVkrHMbwmsTwjNpM5VXPDBkeFEJsb')
  //const PROGRAM_ID = new PublicKey('AszSDxnpJW3GWPMuRfyQCvoJiz1U6E6fHCbVemnV9vD2')

  const connection = new Connection(NETWORK, 'confirmed')
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: 'processed',
  })
  const program = new Program(programIdl as Idl, provider)
  const solAmount = new BN(0.0104 * LAMPORTS_PER_SOL)

  const [presalePDA] = PublicKey.findProgramAddressSync([Buffer.from(SOLANA_PROGRAM_SEED)], program.programId)

  const metadata = {
    quantity: solAmount,
    addressEthAccount: '0x24851df2F6eb5CA018d39278241643B027ea95D1',
  }
  const ctx = {
    meerkatPresale: presalePDA,
    payer: userPublicKey,
    receiver: RECEIVER,
    priceUpdate: new PublicKey("7UVimffxr9ow1uXYxsr4LHAcV58mLzhmwaeKvJ1pjLiE"),
    systemProgram: SystemProgram.programId,
    rent: SYSVAR_RENT_PUBKEY,
    clock: SYSVAR_CLOCK_PUBKEY,
  }
  console.log("provider", provider)
  console.log("wallet", wallet)
  const tx = await program.methods.buyWithSol(metadata).accounts(ctx).rpc()

  console.log('tx', tx)
}
