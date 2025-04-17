import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Menu from "./pages/menu"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App