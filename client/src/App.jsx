import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import GameLists from "./components/GameLists"
import CreateGame from "./components/CreateGame"
import Register from "./components/Register"
import Login from "./components/Login"
import GameDetails from "./components/GameDetails"
import { useState } from "react"



function App() {

  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
   console.log(values);
   
  }

  return (
    <div id="box">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/games" element={<GameLists/>}/>
      <Route path="/create" element={<CreateGame/>}/>
      <Route path="login" element={<Login loginSubmitHandler={loginSubmitHandler}/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/games/:gameId" element={<GameDetails/>}/>
    </Routes>
    <Home/>
    </div>
  )
}

export default App
