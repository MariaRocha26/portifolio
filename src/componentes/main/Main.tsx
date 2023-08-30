import './Main.css'
import Foto from '../../assets/Foto.jpeg'
export default function Main(){
    return(
        <main>
            <div className="pegaTudo">

            <img src={Foto} className="MinhaFoto"/>

            <div className="texto">
            <h3>Minha Vida</h3>
            <p>Sou a Maria Rita da Rocha, tenho 17 anos.
            Atualmente estudo no IFMS - campus Naviraí,
            mas já estudei em escolas particulares e estaduais.
            Decidi fazer o curso técnico em informática para a internet
            porque me envolvi com robótica e programação no ensino fundamental,
            vi que amava isso - embora ainda tenha dificuldade em muitas coisas -
            e decidi me aprofundar nesse mundo.
            Meu sonho é fazer Ciencia da Computação na UEM e crescer cada dia mais nessa área.
            Agradeço aos meus pais e professores que foram essenciais nessa etapa da minha vida.</p>
            </div>


            </div>
        </main>
    )
}