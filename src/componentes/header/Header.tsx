import './Header.css'
import { Link } from 'react-router-dom'
import LogoCabecalho from '../../assets/logo-portifolio.png'
function Header(){
    return(
        <header>
            <img src={LogoCabecalho} className="LogoCabecalho"/>
            <nav>
            <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>

                    <li>
                    <Link to="/sobre">Sobre</Link>
                    </li>

                    <li>
                    <Link to="/noticia">Parcerias</Link>
                    </li>

                    <li>
                    <Link to="/contato">Contato</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </header>
    )
}
export default Header