export default function Card(props: any) {


    return (
        <div className="carousel-item carousel-item-home" id={props.jogo.id} key={props.jogo.id} onClick={props.onCardClick} >
            <div className="card card-home">
                <div className="img-wraper">
                    <img className="card-img-top card-img-top-home img-home" src={"./img/jogos"+props.jogo.caminho_imagem}
                        alt={props.jogo.nome} />
                </div>
                <div className="card-body card-body-home" style={{ height: '145px',color: 'white' }}>
                    <span className="badge badge-secondary">{props.jogo.genero}</span>
                    <h5 className="card-title card-title-home">{props.jogo.nome}</h5>
                    <p className="card-text card-text-home">{props.jogo.descricao.slice(0, 63)}...
                    </p>
                </div>
                <div className="card-rating-plat">
                    <div>
                        <img src="./img/jogos/star.png" alt="estrelas" style={{ filter: 'grayscale()', height: '15px' }} /><span>{props.jogo.nota_metacritic}</span>
                    </div>
                    <div>
                        {props.jogo.plataformas.map((plat:any) => {

                            if (plat == "Xbox Series X|S")
                               return <img src="./img/jogos/xbox-plat-logo.png" alt="plataforma" key={props.jogo.id + plat}/>
                            else if (plat == "PlayStation 5")
                               return <img src="./img/jogos/ps-plat-logo.png" alt="plataforma" key={props.jogo.id + plat} />
                            else if (plat == "Nintendo Switch")
                               return <img src="./img/jogos/sw-plat-logo.png" alt="plataforma" key={props.jogo.id + plat} />
                            else if (plat == "PC")
                               return <img src="./img/jogos/win-plat-logo.png" alt="plataforma" key={props.jogo.id + plat} />
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}