import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/routesDefinition";
import Home from "./routes/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
