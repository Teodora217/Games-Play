import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import GameLists from "./components/GameLists"
import CreateGame from "./components/CreateGame"
import Login from "./components/Login"
import Register from "./components/Register"


function App() {

  return (
    <div id="box">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gamelists" element={<GameLists/>}/>
      <Route path="/create" element={<CreateGame/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Home/>
    </div>
  )
}

export default App
