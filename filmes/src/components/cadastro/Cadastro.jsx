import "./Cadastro.css"
import Botao from "../botao/Botao"

const Cadastro = () => {
    return(
        <section className="selection_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <h1>CADASTRE UM FILME</h1>
                <hr/>
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" />
                    </div>
                    <div className="campo_cad_genero">
                        <label htmlFor="">Genero</label>
                        <select name="genero" id="">
                            <option value=""disabled select>Selecione</option>
                            <option value="">Selecione</option>
                            <option value="">op 1</option>
                            <option value="">op 2</option>
                            <option value="">op 3</option>
                        </select>
                    </div>
                    <Botao/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;