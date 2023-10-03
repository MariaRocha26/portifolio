import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-portifolio.png'

function Footer() {
  return (
    <footer>
      <div className='rodape'>

        <img src={Logo} alt="" />
        <ul className="footer-list">

          <li>
            <h3>Sobre mim</h3>
          </li>

          <li>
            <a href="#" className="footer-link">Meus projetos</a>
          </li>

          <li>
            <a href="#" className="footer-link">Minha jornada</a>
          </li>

          <li>
            <a href="#" className="footer-link">Locais de trabalho</a>
          </li>

        </ul>

        <ul className="footer-list">

                    <li>
                    <Link to="/contato">Contato</Link>
                    </li>

          <li>
            <a href="#" className="footer-link">Whatsapp</a>
          </li>

          <li>
            <a href="#" className="footer-link">Instagram</a>
          </li>

          <li>
            <a href="#" className="footer-link">Facebook</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <h3>Carreira</h3>
          </li>

          <li>
            <a href="#" className="footer-link">Escolas estaduais</a>
          </li>

          <li>
            <a href="#" className="footer-link">IFMS</a>
          </li>

          <li>
            <a href="#" className="footer-link">Faculdade</a>
          </li>

        </ul>
    

      </div>
      <div className="footer-copyright">
          &#169;
          2023 all rigths reserved
        </div>
    </footer>
  )
}
export default Footer