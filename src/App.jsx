import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import bannerBackground from '/imagens/Foto destaque.png'
import Galeria from "./components/Galeria";

const FundoGradiente = styled.div`
	background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
	width: 100%;
	min-height: 100vh;` /* o .div indica que o FundoGradiente 
																		será um componente do tipo div */

const AppContainer = styled.div`
  margin: 0 auto;
  width: 1440px;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>       
            <Banner texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground} />
            <Galeria />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App