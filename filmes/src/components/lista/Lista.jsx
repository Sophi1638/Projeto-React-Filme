import "./Lista.css"

import Editar from "../../assets/img/pen-to-squere-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = () => {
    return(
      <section className="layout_grid listagem">
        <h1>Lista dos filmes</h1>
        <hr/>

        <div className="tabela">
            <table>
                <tr>
                <thead className="cabecalho">
                    <tr>Nome</tr>
                    <tr>Genero</tr>
                    <tr>Editar</tr>
                    <tr>Excluir</tr>
                </thead>
                </tr>
                <tbody>
                    <td>Veloses e furiosos</td>
                    <td>Acao</td>
                    <td><img src="Editar" alt="Caneta"/></td>
                    <td><img src="Excluir" alt="lixo"/></td>
                </tbody>
            </table>
        </div>
      </section>
    )
}

export default Lista;