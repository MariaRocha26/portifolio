import './Header.css'
import LogoCabecalho from '../../assets/logo-portifolio.png'
function Header(){
    return(
        <header>
            <img src={LogoCabecalho} className="LogoCabecalho"/>
            <nav>
                <ul>
                    <li>
                        <a href="#">Página Inicial</a>
                    </li>

                    <li>
                        <a href="#">Sobre</a>
                    </li>

                    <li>
                        <a href="#">Notícia</a>
                    </li>

                    <li>
                        <a href="#">Contato</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
export default Header