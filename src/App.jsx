import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'


function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Outlet />
    </div>
  )
}

export default App
