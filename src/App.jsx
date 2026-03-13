import { BrowserRouter,Routes,Route } from "react-router-dom"
import { UserPanel } from "./components/UserPanel"
import { HomeView } from "./components/HomeView"

export const App = () => {
return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView/>}></Route>
      <Route path="/users" element={<UserPanel/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
)
}
export default App