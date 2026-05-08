
import { Navbar } from './assets/components/header'
import { Hero } from './assets/components/hero'
import { Footer } from './assets/components/footer'
import './assets/css/App.css'
import { Atuacao } from './assets/components/atuacao'
import { Projects } from './assets/components/projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Atuacao/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
