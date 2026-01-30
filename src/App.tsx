import './App.css'
import Formulario from './componetes/cardFomulario/Formulario'
import CardsResume from './componetes/cardResumo/CardsResume'
import NavBar from './componetes/navBar/NavBar'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <CardsResume />
      <Formulario/>
    </div>
  )
}

export default App
