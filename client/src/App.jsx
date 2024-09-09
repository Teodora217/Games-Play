import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import * as authService from './services/authService'
import AuthContext from "./contexts/authContext"
import Header from "./components/Header"
import Home from "./components/Home"
import GameLists from "./components/GameLists"
import CreateGame from "./components/CreateGame"
import Register from "./components/Register"
import Login from "./components/Login"
import GameDetails from "./components/GameDetails"
import Path from "./paths"



function App() {
const navigate = useNavigate();
const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values )=> {
  const result = await authService.login(values.email, values.password);
  setAuth(result)
  navigate(Path.Home)
  };

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
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
    </AuthContext.Provider>
  )
}

export default App
