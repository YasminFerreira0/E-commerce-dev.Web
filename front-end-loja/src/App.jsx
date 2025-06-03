import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Rotas from './routers/rotas'
import DataProvider from './components/context/data'

function App() {

  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Rotas />
        </DataProvider>
      </BrowserRouter>
    </>
  )
}

export default App
