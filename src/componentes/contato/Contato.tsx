import './Contato.css'
import React, {useState} from "react";
export default function Contato(){
    const [nome, setNome] = useState("");
        function mudaTexto0(e: React.ChangeEvent<HTMLInputElement>){
        setNome(e.target.value);
    }
    const [sobrenome, setSobrenome] = useState("");
        function mudaTexto1(e: React.ChangeEvent<HTMLInputElement>){
        setSobrenome(e.target.value);       
    }
    const [email, setEmail] = useState("");
        function mudaTexto2(e: React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);       
    }

    const [mensagem, setMensagem] = useState("");
        function mudaTexto3(e: React.ChangeEvent<HTMLInputElement>){
        setMensagem(e.target.value);       
    }

    return(
        <main className='contato'>
        <section>
            <h2>Formulário para Contato</h2>
            <form action="" method="post">
                <p>Nome: {nome}</p>
                <input type="text" name="name" placeholder="Digite seu nome" autoComplete='off' onChange={mudaTexto0}></input>
                
                <p>Sobrenome: {sobrenome}</p>
                <input type="text" name="name" placeholder="Digite seu sobrenome" autoComplete='off' onChange={mudaTexto1}></input>
                
                <p>Email: {email}</p>
                <input type="email" name="email" placeholder="Digite seu email" onChange={mudaTexto2}></input>
                
                <p>Mensagem: {mensagem}</p>
                <input type="text" name="message" placeholder="Digite sua mensagem" onChange={mudaTexto3}></input>
                
                <button type='submit'>Enviar</button>
            </form>
        </section>
        </main>
    )
}