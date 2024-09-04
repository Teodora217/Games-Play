import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import GameLists from "./components/GameLists"
import CreateGame from "./components/CreateGame"


function App() {

  return (
    <div id="box">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gamelists" element={<GameLists/>}/>
      <Route path="/create" element={<CreateGame/>}/>
    </Routes>
    <Home/>
    </div>
  )
}

export default App
