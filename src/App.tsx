import AppNavbar from './components/navbar'
import AppBanner from './sections/banner'
import AppJogos from './sections/carrosel'
import AppFooter from './components/footer'
import AppCalendario from './sections/calendario'

function App() {

  return (
    <>
       <span id='topo'></span>
       <AppNavbar />
       <AppBanner />
       <AppJogos />
       <AppCalendario />
       <AppFooter />
    </>
  )
}

export default App
