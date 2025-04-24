import "./Header.css";
import Logo from "../../assets/img/logo.svg"

const Header = () => {
    return(
        // function App(){
        <header>
            <div className="layout_grid cabecalho">
            <img src={Logo} alt="Logo do Filmoteca" />
        <nav className="nav_header">
            <a className="link_header">Filme</a>
            <a className="link_header">Genêro</a>
        </nav>
        </div>
        </header>
    )
    
}

export default Header;