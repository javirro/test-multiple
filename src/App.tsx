import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './routes/routesDefinition'
import Home from './routes/Home/Home'
import { SolanaWalletProvider } from './components/solana/SolanaWalletConnection'
import OnBoardGloablProvider from './components/evm/OnboardGlobalProvider'

import './App.css'

function App() {
  return (
    <OnBoardGloablProvider>
      <SolanaWalletProvider>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.Home} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SolanaWalletProvider>
    </OnBoardGloablProvider>
  )
}

export default App
