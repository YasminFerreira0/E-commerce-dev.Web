import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Rotas from './routers/rotas'

function App() {

  return (
    <>
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
    </>
  )
}

export default App
