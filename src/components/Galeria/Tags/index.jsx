import { styled } from "styled-components"
import tags from "./tags.json"

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const TagsConteiner = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
`

const ConteinerTagBotao = styled.div`
    display: flex;
    gap: 2rem;
`

const TagBotao = styled.button`
    width: 94px;
    height: 49px;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.3);
    border: 2px solid transparent;
    transition: background-color 0.3s ease;
    color: #FFFFFF;
    &:hover{
        border-color: #C98CF1;
        color: #C98CF1;
     }
     box-sizing: border-box;
`


export default function Tags() {
    return (
        <TagsConteiner>
            <TagTitulo>Busque por tags:</TagTitulo>
            <ConteinerTagBotao>
                {tags.map(tag => <TagBotao key={tag.id}>{tag.titulo}</TagBotao>)}
            </ConteinerTagBotao>
        </TagsConteiner>
    )
}