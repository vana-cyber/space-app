import { styled } from "styled-components";
import search from "../../assets/search.png";


const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const InputEstilizado = styled.input`
    font-family: 'Gandhi Sans', sans-serif;
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin-right: 20px
`;

const IconeLupa = styled.img`
   position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    margin-right: 20px
`;

export default function CampoTexto(props) {
    return (
        <>
            <ContainerEstilizado>
                <InputEstilizado type="text" placeholder="O que você procura?" {...props}/>
                <IconeLupa src={search} alt="Ícone de lupa" />
            </ContainerEstilizado>
        </>
    )
}