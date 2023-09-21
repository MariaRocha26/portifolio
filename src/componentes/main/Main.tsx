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
    const [texto,setTexto] = useState("")

    const projetos:ProjetosType[] = [
        {
            id: 1,
            titulo:"Projeto de Robótica",
            resumo:"Participei do projeto de robótica durante dois anos. Durante esse período, fui estagiária e bolsista, então minhas tarefas estavam relacionadas com os circuitos e cuidado com as redes sociais. ",
            imagem:"/robotica.jpg" 
        },
        {
            id: 2,
            titulo:"Olimpíada Brasileira de Robótica",
            resumo:"Em 2017, como estudante de escola estadual e integrante do grupo Titans da Robótica, eu participei da OBR e recebi medalha de honra ao mérito. Em 2021, como estudante do IFMS e integrante do grupo de robótica, participei novamente da OBR e recebi medalha de honra ao mérito.",
            imagem:"/obr.jpg"
        },
        {
        id: 3,
        titulo:"Projeto de Iniciação Científica",
        resumo:"Participei, com minha amiga Luana Trindade e os professores Guilherme Terenciani e Gustavo Targino, do projeto de iniciação científica sobre investigação do método de integração de Monte Carlo para dados discretos.",
        imagem:"/ic.jpg"
        },
        {
        id: 4,
        titulo:"Semana do Meio Ambiente - IFMS",
        resumo:"Participei como monitora da Semana do Meio Ambiente de 2023. Foto referente a visita ao Parque Estadual das Várzeas do Rio Ivinhema. Eu e os outros alunos presentes nessa visita estavámos plantando árvores.",
        imagem:"/semana-meio-ambiente.jpg"
        },
        {
        id: 5,
        titulo:"PODCAST - Pod Isso no IF?",
        resumo:"Sou uma das hosts do projeto de podcast do IFMS. Foto referente ao dia que o entrevistado foi o candidato a reitoria Guilherme.",
        imagem:"/podcast.jpg"
        },
        {
        id: 6,
        titulo:"Estágio na TV MAIS",
        resumo:"O IFMS fez uma parceria com a TV MAIS, onde eles cedem o espaço para a gravação do Podcast. Também gostaram do meu desempenho como entrevistadora e me chamaram para fazer estágio na TV, dessa forma, eu participo dos ao vivo e também faço entrevistas em eventos.",
        imagem:"/tv.jpg"
        },
        {
        id: 7,
        titulo:"Viagem ao RJ - representando o IFMS",
        resumo:"Em 2023 aconteceu o sexto Encontro Nacional dos Estudantes de Ensino Técnico. Cada campus do IFMS ficou responsável por escolher um represente para ir ao Rio de Janeiro neste encontro e eu fui a escolhida do Campus Naviraí. Foi um prazer imenso ir até o Rio de Janeiro e desfrutar das lindas coisas que a cidade e o encontro ofertou. (Também foi minha primeira vez viajando de avião).",
        imagem:"/RJ.jpg"
        },
        {
        id: 8,
        titulo:"Festa Julina do IFMS",
        resumo:"Em julho de 2023 aconteceu a Festa Julina do IFMS. As turmas de terceiro ano do ensino médio se reuniram para fazer uma barraca de venda de doces para arrecadação de dinheiro para nossa formatura.",
        imagem:"/festa-julina.jpg"
        },
        {
        id: 9,
        titulo:"Visita Técnica à Foz do Iguaçu",
        resumo:"Em 2023 as turmas do terceiro ano do curso técnico em informática para a internet foram para Foz do Iguaçu em uma visita técnica à Usina de Itaipu.",
        imagem:"/visita-tecnica.jpg"
        },

    ]
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
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
                <p>Buscar mais informações sobre Maria Rita</p>
                <input type="text" className="barra-pesquisa" onChange={mudaTexto}/>
            </div>
        
            

        <div className="content-main">
            {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())
            )
            .map((projeto) => (
                <Projeto key={projeto.id}
                   titulo={projeto.titulo}
                   resumo={projeto.resumo}
                   imagem={projeto.imagem}
                   />
                ))}
            </div>
        </main>
        </>
    )
}