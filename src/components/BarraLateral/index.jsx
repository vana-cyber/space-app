import ItemNavegacao from "./ItensEstilizados";
import { styled } from "styled-components";

const ListaEstilizada = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    align-items: flex-start;
`


export default function BarraLateral() {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao iconeAtivo="/icones/Home - ativo.png" iconeInativo="/icones/Home - inativo.png" ativo={true}>
                        <a href="#">Início</a>
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="/icones/Mais vistas - ativo.png" iconeInativo="/icones/Mais vistas - inativo.png">
                        <a href="#">Mais vistas</a>
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="/icones/Mais curtidas - ativo.png" iconeInativo="/icones/Mais curtidas - inativo.png">
                        <a href="#">Mais curtidas</a>
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="/icones/Novas - ativo.png" iconeInativo="/icones/Novas - inativo.png">
                        <a href="#">Novas</a>
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="/icones/Surpreenda-me - ativo.png" iconeInativo="/icones/Surpreenda-me - inativo.png">
                        <a href="#">Surpreenda-me</a>
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>

    )
}