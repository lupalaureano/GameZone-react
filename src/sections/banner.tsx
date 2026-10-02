 export default function AppBanner() {
    return (
    <section className="banner">
        <div className="col-lg-4 col-sm-6 bantext">
            <span className="c">Bem vindo à</span>
            <h1>Game<span className="c">zone.</span>
            </h1>
            <h2>
                <span className="c">Explore.</span> jogue. Conecte-se.
            </h2>
            <p>O seu destino definitivo para descobrir os melhores jogos, notícias e uma comundade apaixonada por games.
            </p>
            <div>
                <a href="#jogos" className="btn_purp col-5">Explorar Jogos {'>'}</a>
                
            </div>
        </div>
        <div>
            <img src="./img/personagem_banner.png" alt="personagem" id="pers_banner" />
        </div>
    </section>
    )
}