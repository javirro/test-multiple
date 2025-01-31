import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './routes/routesDefinition'
import Home from './routes/Home/Home'
import { SolanaWalletProvider } from './components/solana/SolanaWalletConnection'

function App() {
  return (
    <SolanaWalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SolanaWalletProvider>
  )
}

export default App
