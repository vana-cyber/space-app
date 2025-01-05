import styled from "styled-components"
import fotos from "../../../fotos.json"

const ConteinerFigure = styled.div`
    display: flex;
    flex-flow: column wrap;
`

const Figure = styled.figure`
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    justify-content: flex-start;
    width: ${(props) => (props.$expandida ? '90%' : '460px')};;
    height: 336px;
    `

const FigCaption = styled.figcaption`
    background-color: #001634;
    color: #FFFFFF;
    padding: 1rem;
    border-radius: 1rem;
`


export default function Imagem() {
    return (
        <Figure>
            {fotos.map(foto =>
                <>
                    <ConteinerFigure key={foto.id}> 
                        <img src={foto.path} />
                        <FigCaption>
                            <h3>{foto.titulo}</h3>
                            <h4>{foto.fonte}</h4>
                        </FigCaption>
                    </ConteinerFigure>
                </>
            )}
        </Figure>
    )
}