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
import Path from "../src/paths"



function App() {
const navigate = useNavigate();
const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values )=> {
  const result = await authService.login(values.email, values.password);
  setAuth(result)
  navigate(Path.Home)
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);
    setAuth(result);
    navigate(Path.Home);
  } 

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.email, // convert to boolean value
  }

  return (
    <AuthContext.Provider value={values}>
    <div id="box">
    <Header/>
    <Routes>
      <Route path={Path.Home} element={<Home/>}/>
      <Route path="/games" element={<GameLists/>}/>
      <Route path="/create" element={<CreateGame/>}/>
      <Route path="login" element={<Login />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/games/:gameId" element={<GameDetails/>}/>
    </Routes>
    <Home/>
    </div>
    </AuthContext.Provider>
  )
}

export default App
