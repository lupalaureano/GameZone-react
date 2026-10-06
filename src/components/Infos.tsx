import { useState, useEffect } from "react";
export default function Infos({ jogo }: any) {

    let data_split = jogo.data_lancamento;
    let order = data_split.split("-")
    order.reverse();
    const dataLancamento = "Lançamento: " + order[0] + "/" + order[1] + "/" + order[2];



    const publisher = "Publisher: " + jogo.publisher;
    const studio = "Studio: " + jogo.studio;


    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

   

    return (
        <div className={`accordion-wrapper ${isOpen ? 'is-open' : ''}`} key={jogo.id + jogo.nome} >
            <div className="news-article-layout accordion-content">
                <article className="news-article">
                    <div id="cover" className="news-article-cover" >
                        <img src={"./img/jogos/game" + jogo.caminho_imagem} alt={jogo.nome} title={jogo.nome} />
                    </div>

                    <header className="news-article-header">
                        <h1 id="gameName">{jogo.nome}</h1>

                    </header>

                    <div className="news-article-content" id={jogo.id + '-' + jogo.nome}>
                        <p id="descricao">{jogo.descricao}</p>

                    </div>
                </article>

                <aside className="news-aside" aria-label="Complementos">
                    <div className="news-aside-card news-related">
                        <h2>Informações</h2>
                        <ul className="news-related-list" id="infos">
                            <li>{dataLancamento}</li>
                            <li style={{ justifyContent: "flex-start" }}>
                                {jogo.plataformas.map((p: String) => {

                                    if (p == "Plastation 5" || p == "Playstation 4") {
                                        return <img src="./img/jogos/ps-plat-logo.png" style={{ filter: "grayscale(100%) invert(100%)", marginLeft: '15px', height: '15px', width: '15px' }} key={jogo.id + p} />
                                    } else if (p == "Xbox Series X|S" || p == "Xbox One") {
                                        return <img src="../img/jogos/xbox-plat-logo.png" style={{ filter: "grayscale(100%) invert(100%)", marginLeft: '15px', height: '15px', width: '15px' }} key={jogo.id + p} />
                                    } else if (p == "Nintendo Switch") {
                                        return <img src="../img/jogos/sw-plat-logo.png" style={{ filter: "grayscale(100%) invert(100%)", marginLeft: '15px', height: '15px', width: '15px' }} key={jogo.id + p} />
                                    } else if (p == "PC") {
                                        return <img src="./img/jogos/win-plat-logo.png" style={{ filter: "grayscale(100%) invert(100%)", marginLeft: '15px', height: '15px', width: '15px' }} key={jogo.id + p} />
                                    }
                                })}
                            </li>
                            <li>{"Jogadores: " + jogo.quantos_jogadores}</li>
                            <li>{publisher}</li>
                            <li>{studio}</li>
                            <li className="bi bi-star-fill">{jogo.nota_metacritic / 10}</li>
                            <li>{jogo.aceita_controle ? <img src="../img/jogos/console.png" style={{ height: "40px", width: "40px", filter: "grayscale(100%) invert(100%)" }} /> : <span></span>}</li>
                        </ul>
                    </div>


                </aside>
            </div>
        </div>
    )
}