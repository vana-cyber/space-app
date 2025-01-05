import { styled } from "styled-components"
import logo from "/imagens/logo.png"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img: {
        max-width: 212px;
    }
`
export default function Cabecalho() {
 return (
    <HeaderEstilizado>
        <img src={logo} alt="Logo" />
        <CampoTexto />
    </HeaderEstilizado>
 )   
};