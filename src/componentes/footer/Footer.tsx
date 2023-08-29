import './Footer.css'
import Logo from '../../assets/logo-portifolio.png'
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
function Footer(){
    return(
        <footer>
            <img src={Logo} alt=""/>
            <div className='rodape'>

          <div className="redesSociais">
            <a href="#"> <img src={facebook} alt="logo2"/> </a>
            <a href="#"> <img src={twitter} alt="logo3"/> </a>
          </div>

        <ul className="footer-list">
           
            <li>
              <h3>Sobre a Barbie</h3>
            </li>
           
            <li>
              <a href="#" className="footer-link">Quem somos</a>
            </li>
           
            <li>
              <a href="#" className="footer-link">Nossas lojas</a>
            </li>
           
            <li>
              <a href="#" className="footer-link">Painel de privacidade</a>
            </li>
           
          </ul>
         
           <ul className="footer-list">
           
            <li>
              <h3>Ajuda</h3>
            </li>
           
            <li>
              <a href="#" className="footer-link">Minha conta</a>
            </li>
           
            <li>
              <a href="#" className="footer-link">Central de atendimento</a>
            </li>
           
            <li>
              <a href="#" className="footer-link">Regulamentos</a>
            </li>
           
          </ul>

          <ul className="footer-list">
           
            <li>
              <h3>Compre e Aprenda</h3>
            </li>
           
            <li>
              <a href="#" className="footer-link">Compra Barbie</a>
            </li>
           
            <li>
              <a href="#" className="footer-link">Compra Hot Wheels</a>
            </li>
           
            <li>
              <a href="#" className="footer-link">Compra Fisher-Price</a>
            </li>
           
          </ul>
        <div className="footer-copyright">
        &#169; 
        2023 all rigths reserved
        </div>
      
      </div>

        </footer>
    )
}
export default Footer