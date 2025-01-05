import { styled } from "styled-components";
import GandhiSansRegular from "GandhiSansRegular";
import GandhiSansBold from "GandhiSansBold";

const ItensEstilizados = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    padding-left: 20px;
    padding: 10px 0;
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    display: flex;
    align-items: center;
    gap: 22px;

    a {
        text-decoration: none;
    }
`

export default function ItemNavegacao({ children, iconeAtivo, iconeInativo, ativo = false }) {
    return (
        <ItensEstilizados $ativo={ativo}>
          <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone" />
            {children}
        </ItensEstilizados>
    )
}