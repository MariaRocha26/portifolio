import { useState } from "react";
import Projeto from "../projeto/Projeto";
import './Main.css'
import Foto from '../../assets/Foto.jpeg'

type ProjetosType = {
    id: number,
    titulo: string,
    resumo: string,
    imagem: string
}

export default function Main(){
    const [texto,setTexto] = useState("Ritinha")

    const projetos:ProjetosType[] = [
        {
            id: 1,
            titulo:"Barbie",
            resumo:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/barbie-capa.png" 
        },
        {
            id: 2,
            titulo:"Barbie Castelo de Diamante",
            resumo:"Liana e Alexa saem da sua cabana humilde para vender flores na vila e acabam conhecendo Melody, a guardiã do Castelo de Diamante. As duas decidem ajudá-la a impedir que a chave do castelo seja roubada por Lídia, uma musa egoísta.",
            imagem:"/castelo-diamante.png"
        },
        {
        id: 3,
        titulo:"Barbie Escola de Princesas",
        resumo:"Blair é uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas. A escola é um lugar incrível, onde as meninas aprendem dança, etiqueta, arte e outras habilidades indispensáveis a uma princesa. Blair adora suas aulas, suas novas fadinhas assistentes e suas novas amigas, as princesas Hadley e Isla. Porém, quando a malvada Dama Devin desconfia que Blair é a princesa e herdeira desaparecida, ela faz de tudo para impedir que Blair assuma o trono.",
        imagem:"/escola-de-princesas.png"
        }

    ]
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
        setTexto(e.target.value)
    }
    return(
        <>
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

            <div className="pesquisa">
            <p>Buscar Projeto</p>
            <input className="barra-pesquisa" type="text" onChange={mudaTexto}/>
            <div>
                <p className='texto-digitado'>pesquisa: {texto}</p>
            </div>
        </div>
            

        <div className="content-main">
            {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map((projeto:ProjetosType)=>
            <Projeto key={projeto.id}
                   titulo={projeto.titulo}
                   resumo={projeto.resumo}
                   imagem={projeto.imagem}
                   />
                )
            }
            </div>
        
            
            
        </main>
        </>
    )
}