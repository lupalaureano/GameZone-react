export default function AppNavbar() {
    return (

        <header className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="#topo" className="navbar-brand"><img src='./img/logo.png' alt="Logo" id="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" className="menu collapse navbar-collapse">
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <li className="nav-item active">
                            <a href="#topo" className="nav-link">Início</a>
                        </li>

                        <li className="nav-item">
                            <a href="#jogos" className="nav-link">Jogos</a>
                        </li>

                        <li className="nav-item">
                            <a href="#calendario" className="nav-link">Calendário de Lançamentos</a>
                        </li>

                    </ul>

                </div>

            </div>

        </header>
    )
}