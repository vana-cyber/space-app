import { styled } from "styled-components";
import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const FotoItem = styled.li`
    list-style-type: none;
`

export default function Galeria({ fotos = [] }) {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                        {fotos.map(foto =>
                            <>
                                <FotoItem key={foto.id}>
                                    <Imagem />
                                </FotoItem>
                            </>
                        )}
                    </ul>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )

}