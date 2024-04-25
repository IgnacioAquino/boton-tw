import './App.css'

export function App(){
    return(
    <article className="xcard">
        <header className="usercard">
            <img className="fotoperfil" src="https://scontent.feze12-1.fna.fbcdn.net/v/t39.30808-6/345827854_3047223138917859_4594328428801425611_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF7_H7afvCoiyziDI6HztJ3m0WBCYeVKVqbRYEJh5UpWpwX14kr4nvG4UDDbe3-OAdq57cENr_W5EpN7uID1DI5&_nc_ohc=KBhSPqQ15LcAb6Rhhjo&_nc_ht=scontent.feze12-1.fna&oh=00_AfBjCMZNlQVZqjcSOFmFtswfwhnqpjRm7VxXv998jp7OdA&oe=662F89DC" alt="Ignacio Aquino" />
            <div className="userinfo">
                <strong className="username">Ignacio Aquino</strong>
                <span className="usuario">@ignacioaquino</span>
            </div>
            </header>

        <aside>
            <button className="btnseguir">Seguir</button>
        </aside>
    </article>
    )
}