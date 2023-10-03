import './Contato.css'

function Contato() {
    return(
        <main className='contato'>
        <section>
            <h2>Formulário para Contato</h2>
            <form action="" method="post">
                <label>Nome</label>
                <input type="text" name="name" placeholder="Digite seu nome" autoComplete='off'></input>
                <label>Sobrenome</label>
                <input type="text" name="name" placeholder="Digite seu sobrenome" autoComplete='off'></input>
                <label>Email</label>
                <input type="email" name="email" placeholder="Digite seu email"></input>
                <label>Mensagem</label>
                <textarea name="message" cols={30} rows={10} placeholder="Digite sua mensagem"></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </section>
        </main>
    )
}
export default Contato