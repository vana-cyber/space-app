import { styled } from "styled-components"

const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: linear-gradient(1px solid #ce8df3, 1px solid #7927ff);
    margin: 5px 0;
    width: 100%;
`
export default function CampoTexto({ type, value, onChange }) {
    return (
        <Input type={type} placeholder="O que você procura?" value={value} onChange={onChange} />
    )
}