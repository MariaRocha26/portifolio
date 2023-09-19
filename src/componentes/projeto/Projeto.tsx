import './Projeto.css'

type ProjetoProps={
    titulo:string,
    resumo:string,
    imagem:string
}


export default function Projeto(props: ProjetoProps){
    return(
        <div className="projeto_content">
            <div className="foto-projeto">
            <img src={props.imagem} alt=""/>
            </div>
            <h1>{props.titulo}</h1>
            <p className="sinopse">{props.resumo}</p>
        </div>
    )
}