import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import GameLists from "./components/GameLists"
function App() {

  return (
    <div id="box">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gamelists" element={<GameLists/>}/>
    </Routes>
    <Home/>
    </div>
  )
}

export default App
