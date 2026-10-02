 export default function AppBanner() {
    return (
    <banner>
        <div className="col-lg-4 col-sm-6 bantext">
            <c>Bem vindo à</c>
            <h1>Game<c>zone.</c>
            </h1>
            <h2>
                <c>Explore.</c> jogue. Conecte-se.
            </h2>
            <p>O seu destino definitivo para descobrir os melhores jogos, notícias e uma comundade apaixonada por games.
            </p>
            <div>
                <a href="#jogos" className="btn_purp col-5">Explorar Jogos ></a>
                
            </div>
        </div>
        <div>
            <img src="./img/personagem_banner.png" alt="personagem" id="pers_banner" />
        </div>
    </banner>
    )
}