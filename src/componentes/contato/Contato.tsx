import './Contato.css'
import React, {useState} from "react";
export default function Contato(){
    const [texto, setTexto] = useState("");
    function change_txt(e: React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value);
}

    return(
        <main className='contato'>
        <section>
            <h2>Formulário para Contato</h2>
            <form action="" method="post">
                <label>Nome</label>
                <input type="text" name="name" placeholder="Digite seu nome" autoComplete='off' onChange={change_txt}></input>
                <label>Sobrenome</label>
                <input type="text" name="name" placeholder="Digite seu sobrenome" autoComplete='off' onChange={change_txt}></input>
                <label>Email</label>
                <input type="email" name="email" placeholder="Digite seu email" onChange={change_txt}></input>
                <label>Mensagem</label>
                <input type="text" name="message" placeholder="Digite sua mensagem" onChange={change_txt}></input>
                <button type='submit'>Enviar</button>
            </form>
        </section>
        </main>
    )
}