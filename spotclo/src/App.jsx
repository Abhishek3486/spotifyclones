import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Spotify from './pages/spotify.jsx'
import Login from './pages/login.jsx'
import Reg from './pages/reg.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
     <Route path="/" exact element={<Spotify/>} style={Spotify}></Route>
     <Route path="/login" exact element={<Login/>} style={Login}></Route>
     <Route path="/reg" exact element={<Reg/>}></Route>
    
     </Routes>
    </> 
  )
}

export default App
