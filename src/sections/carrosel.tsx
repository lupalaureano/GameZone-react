import $ from 'jquery';
import React, { useState } from 'react';
import Card from '../components/Card';
import Infos from '../components/Infos';




export default function AppJogos() {

    const jogos = [
        {
            "id": 1,
            "nome": "EA Sports FC 27",
            "data_lancamento": "2026-09-25",
            "descricao": "Entre no The Grounds, o ponto de encontro do futebol onde as ruas e os estádios se unem. O EA SPORTS FC 27 reúne diferentes formas de jogar, desde partidas de Bate-bolas e confrontos 1x1 até o modo Clubs, permitindo desenvolver habilidades, jogar com amigos e personalizar sua experiência dentro e fora do campo.\n\nO jogo também apresenta uma jogabilidade mais autêntica, com maior controle sobre as ações em campo, movimentações ofensivas mais inteligentes, escanteios reformulados e uma defesa mais focada no controle manual. A Carreira de Manager recebe um Mercado de Transferências reformulado, enquanto o Football Ultimate Team ganha uma nova Galeria para organizar e celebrar os atletas e itens favoritos do seu clube.",
            "caminho_imagem": "/2.png",
            "plataformas": [
                "PlayStation 4",
                "PlayStation 5",
                "Xbox One",
                "Xbox Series X|S",
                "PC",
                "Nintendo Switch"
            ],
            "nota_metacritic": null,
            "quantos_jogadores": "1-4 local / multiplayer online",
            "aceita_controle": true,
            "publisher": "Electronic Arts",
            "studio": "EA Vancouver / EA Romania",
            "genero": "Esportes"
        },
        {
            "id": 2,
            "nome": "The Last of Us Part II Remastered",
            "data_lancamento": "2024-01-19",
            "descricao": "Viva novamente as jornadas de Ellie e Abby em uma versão remasterizada para PlayStation 5 e PC. A história apresenta Ellie e Abby em uma narrativa marcada por perdas, conflitos e consequências, enquanto ambas percorrem caminhos que acabam se cruzando em um mundo devastado por uma pandemia e pela violência humana.\n\nA versão Remastered apresenta melhorias gráficas, novos modos de jogo e recursos adicionais. Entre eles está Sem Volta, uma experiência de sobrevivência roguelike que permite enfrentar encontros aleatórios e jogar com diferentes personagens, além de integração com os recursos do controle DualSense e melhorias visuais desenvolvidas para aproveitar o hardware atual.",
            "caminho_imagem": "/9.png",
            "plataformas": [
                "PlayStation 5",
                "PC"
            ],
            "nota_metacritic": 90,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Sony Interactive Entertainment",
            "studio": "Naughty Dog",
            "genero": "Terror"
        },
        {
            "id": 3,
            "nome": "NBA 2K27",
            "data_lancamento": "2026-09-04",
            "descricao": "Entre em quadra para viver uma nova temporada da experiência NBA 2K. O jogo reúne diferentes maneiras de jogar basquete, permitindo disputar partidas, construir uma carreira, administrar uma franquia e competir em modos voltados para partidas online.\n\nA experiência combina a apresentação característica da NBA 2K com sistemas de progressão, personalização e competição. Os diferentes modos permitem que o jogador escolha entre construir sua trajetória individual, administrar uma equipe ou disputar partidas contra outros jogadores.",
            "caminho_imagem": "/1.png",
            "plataformas": [
                "PlayStation 5",
                "Xbox Series X|S",
                "PC",
                "Nintendo Switch"
            ],
            "nota_metacritic": null,
            "quantos_jogadores": "1-4 local / multiplayer online",
            "aceita_controle": true,
            "publisher": "2K",
            "studio": "Visual Concepts",
            "genero": "Esportes"
        },
        {
            "id": 4,
            "nome": "The Legend of Zelda: Tears of the Kingdom",
            "data_lancamento": "2023-05-12",
            "descricao": "A sequência de The Legend of Zelda: Breath of the Wild leva Link novamente para as terras de Hyrule, mas amplia a aventura para além da superfície. O jogador pode explorar as vastas paisagens do reino, descobrir ilhas flutuantes nos céus e investigar regiões subterrâneas repletas de perigos e mistérios.\n\nLink também recebe novas habilidades que ampliam significativamente as possibilidades de exploração e criação. Com elas, é possível combinar objetos, construir veículos e estruturas, manipular elementos do cenário e criar diferentes soluções para atravessar o mundo e enfrentar seus inimigos. A aventura permite que cada jogador encontre seu próprio caminho por Hyrule.",
            "caminho_imagem": "/4.png",
            "plataformas": [
                "Nintendo Switch"
            ],
            "nota_metacritic": 96,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Nintendo",
            "studio": "Nintendo EPD",
            "genero": "Ação"
        },
        {
            "id": 5,
            "nome": "Silent Hill f",
            "data_lancamento": "2025-09-25",
            "descricao": "SILENT HILL f leva a série de terror psicológico para o Japão da década de 1960. Na remota cidade montanhosa de Ebisugaoka, a adolescente Shimizu Hinako leva uma vida aparentemente comum até que uma espessa névoa transforma seu lar conhecido em um lugar desolado e aterrorizante.\n\nÀ medida que Hinako explora a cidade tomada pela névoa, ela precisa lidar com acontecimentos sobrenaturais e com uma realidade cada vez mais perturbadora. A história combina horror psicológico, beleza e terror em um cenário japonês marcado por elementos culturais e uma atmosfera de crescente tensão.",
            "caminho_imagem": "/3.png",
            "plataformas": [
                "PlayStation 5",
                "Xbox Series X|S",
                "PC"
            ],
            "nota_metacritic": 86,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Konami",
            "studio": "NeoBards Entertainment",
            "genero": "Terror"
        },
        {
            "id": 6,
            "nome": "RIDE 5",
            "data_lancamento": "2023-08-24",
            "descricao": "RIDE 5 coloca o jogador no centro de uma experiência dedicada ao motociclismo, oferecendo uma grande variedade de motocicletas e pistas para explorar. O jogo foi desenvolvido para proporcionar uma experiência de corrida com diferentes categorias, estilos de pilotagem e possibilidades de personalização.\n\nAlém das competições tradicionais, RIDE 5 oferece diferentes modos e desafios para quem deseja aprimorar suas habilidades. A experiência combina corridas, personalização das motos, diferentes condições de pista e uma variedade de eventos para construir uma trajetória no mundo das competições de motociclismo.",
            "caminho_imagem": "/6.png",
            "plataformas": [
                "PlayStation 5",
                "Xbox Series X|S",
                "PC"
            ],
            "nota_metacritic": 75,
            "quantos_jogadores": "1-2 local / multiplayer online",
            "aceita_controle": true,
            "publisher": "Milestone",
            "studio": "Milestone",
            "genero": "Corrida"
        },
        {
            "id": 7,
            "nome": "Madden NFL 26",
            "data_lancamento": "2025-08-14",
            "descricao": "EA SPORTS Madden NFL 26 apresenta uma experiência de futebol americano construída a partir de dados de jogadas e situações reais da NFL. Um novo sistema de aprendizado de máquina utiliza quase uma década de informações para criar comportamentos mais específicos de jogadores e treinadores e proporcionar partidas mais explosivas.\n\nA jogabilidade inclui movimentação de atletas atualizada e interações físicas baseadas em física, incluindo tackles durante recepções, stiff-arms e trucks. No Ultimate Team, é possível construir uma equipe com lendas e estrelas atuais da NFL, enquanto o modo Franchise permite criar um legado como treinador utilizando novos arquétipos e estratégias.",
            "caminho_imagem": "/12.png",
            "plataformas": [
                "PlayStation 5",
                "Xbox Series X|S",
                "PC",
                "Nintendo Switch"
            ],
            "nota_metacritic": null,
            "quantos_jogadores": "1-4 local / multiplayer online",
            "aceita_controle": true,
            "publisher": "Electronic Arts",
            "studio": "EA Tiburon",
            "genero": "Esportes"
        },
        {
            "id": 8,
            "nome": "Forza Horizon 6",
            "data_lancamento": "2026-05-19",
            "descricao": "Forza Horizon 6 leva o Horizon Festival para o Japão, apresentando um enorme mundo aberto com contrastes entre áreas urbanas e rurais, regiões montanhosas, diferentes biomas e mudanças sazonais. O mapa inclui locais inspirados em estradas e paisagens japonesas, desde as ruas de Tokyo City até estradas de montanha e regiões cobertas de neve.\n\nA cultura automobilística japonesa é um dos elementos centrais da experiência. O jogo conta com mais de 550 carros no lançamento, opções ampliadas de personalização, novos Car Meets e atividades compartilhadas no mundo aberto. Os jogadores também podem formar grupos, explorar o Japão juntos, disputar corridas e utilizar as ferramentas do EventLab para criar novas experiências.",
            "caminho_imagem": "/18.png",
            "plataformas": [
                "Xbox Series X|S",
                "PC",
                "PlayStation 5"
            ],
            "nota_metacritic": null,
            "quantos_jogadores": "1 / multiplayer online",
            "aceita_controle": true,
            "publisher": "Xbox Game Studios",
            "studio": "Playground Games / Turn 10 Studios",
            "genero": "Corrida"
        },
        {
            "id": 9,
            "nome": "The Witcher 3: Wild Hunt",
            "data_lancamento": "2015-05-19",
            "descricao": "The Witcher 3: Wild Hunt acompanha Geralt de Rívia, um caçador de monstros profissional conhecido como bruxo. Em um mundo aberto de fantasia sombria, Geralt percorre diferentes regiões em busca de Ciri, sua filha adotiva, enquanto a misteriosa Caçada Selvagem se aproxima e uma série de conflitos ameaça o continente.\n\nA aventura permite explorar cidades, vilarejos, florestas, pântanos e regiões selvagens enquanto o jogador enfrenta monstros, participa de contratos, toma decisões e interage com diferentes personagens. As escolhas de Geralt podem alterar acontecimentos, relações e consequências da história, criando diferentes caminhos dentro da narrativa.",
            "caminho_imagem": "/10.png",
            "plataformas": [
                "PC",
                "PlayStation 4",
                "PlayStation 5",
                "Xbox One",
                "Xbox Series X|S",
                "Nintendo Switch"
            ],
            "nota_metacritic": 92,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "CD Projekt",
            "studio": "CD Projekt Red",
            "genero": "RPG"
        },
        {
            "id": 10,
            "nome": "Need for Speed Heat",
            "data_lancamento": "2019-11-08",
            "descricao": "Need for Speed Heat coloca o jogador nas ruas de Palm City, onde as corridas acontecem de maneiras diferentes durante o dia e durante a noite. Durante o dia, os pilotos podem participar de eventos oficiais para ganhar dinheiro e construir sua reputação, enquanto a noite abre espaço para corridas ilegais e confrontos mais perigosos.\n\nQuanto maior a reputação construída nas ruas, maior também é a atenção das forças policiais. O jogador precisa decidir quanto está disposto a arriscar para aumentar sua reputação e conquistar novos carros e melhorias. A personalização dos veículos e a progressão pelas corridas fazem parte central da experiência.",
            "caminho_imagem": "/11.png",
            "plataformas": [
                "PC",
                "PlayStation 4",
                "Xbox One"
            ],
            "nota_metacritic": 72,
            "quantos_jogadores": "1 / multiplayer online",
            "aceita_controle": true,
            "publisher": "Electronic Arts",
            "studio": "Ghost Games",
            "genero": "Corrida"
        },
        {
            "id": 11,
            "nome": "Baldur's Gate 3",
            "data_lancamento": "2023-08-03",
            "descricao": "Reúna seu grupo e retorne aos Forgotten Realms em uma aventura de RPG baseada no universo de Dungeons & Dragons. Uma misteriosa habilidade começa a surgir dentro de você depois que um parasita de mind flayer é implantado em seu cérebro, colocando o personagem e seus companheiros diante de uma ameaça que pode transformar suas vidas.\n\nA aventura permite explorar um mundo repleto de personagens, criaturas e possibilidades. Companheiros podem se juntar ao grupo, alianças podem ser formadas ou quebradas e as decisões tomadas durante a jornada possuem consequências. Combate por turnos, exploração e escolhas narrativas se combinam para permitir diferentes maneiras de enfrentar os desafios.",
            "caminho_imagem": "/7.png",
            "plataformas": [
                "PC",
                "PlayStation 5",
                "Xbox Series X|S",
                "Mac"
            ],
            "nota_metacritic": 96,
            "quantos_jogadores": "1-4",
            "aceita_controle": true,
            "publisher": "Larian Studios",
            "studio": "Larian Studios",
            "genero": "RPG"
        },
        {
            "id": 12,
            "nome": "Outlast",
            "data_lancamento": "2013-09-04",
            "descricao": "Outlast acompanha o jornalista investigativo Miles Upshur, que decide investigar informações sobre acontecimentos misteriosos no Mount Massive Asylum. Ao entrar na instituição, ele descobre que algo terrível aconteceu com os pacientes e funcionários, transformando sua investigação em uma luta pela sobrevivência.\n\nSem armas convencionais para enfrentar os perigos, Miles precisa utilizar sua câmera, esconder-se, correr e encontrar caminhos para escapar dos perseguidores. A visão noturna da câmera é essencial para explorar os ambientes escuros, mas seu uso limitado de bateria obriga o jogador a decidir quando utilizá-la.",
            "caminho_imagem": "/17.png",
            "plataformas": [
                "PC",
                "PlayStation 4",
                "Xbox One"
            ],
            "nota_metacritic": 80,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Red Barrels",
            "studio": "Red Barrels",
            "genero": "Terror"
        },
        {
            "id": 13,
            "nome": "Marvel's Spider-Man 2",
            "data_lancamento": "2023-10-20",
            "descricao": "Peter Parker e Miles Morales retornam para uma nova aventura no universo da Marvel. Os dois heróis precisam enfrentar novas ameaças enquanto protegem uma Nova York expandida, alternando entre suas histórias e habilidades durante a campanha.\n\nEntre os principais inimigos estão Venom e Kraven, além de outras ameaças que colocam a cidade em risco. O jogo também introduz novas habilidades, trajes e formas de atravessar a cidade, incluindo as Asas de Teia, permitindo que os dois Spider-Men percorram Nova York com maior velocidade e explorem áreas inéditas.",
            "caminho_imagem": "/8.png",
            "plataformas": [
                "PlayStation 5",
                "PC"
            ],
            "nota_metacritic": 90,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Sony Interactive Entertainment",
            "studio": "Insomniac Games",
            "genero": "Ação"
        },
        {
            "id": 14,
            "nome": "Resident Evil 4",
            "data_lancamento": "2023-03-24",
            "descricao": "Resident Evil 4 apresenta uma versão reconstruída do clássico jogo de survival horror. Leon S. Kennedy, agora um agente do governo dos Estados Unidos, recebe a missão de encontrar e resgatar Ashley Graham, filha do presidente, que desapareceu em uma região isolada da Europa.\n\nA missão leva Leon a uma comunidade aparentemente abandonada, onde ele encontra habitantes violentos e uma ameaça ligada a uma misteriosa organização. A aventura combina exploração, combate, gerenciamento de recursos e momentos de tensão enquanto Leon tenta descobrir o que aconteceu com Ashley e sobreviver ao ambiente hostil.",
            "caminho_imagem": "/15.png",
            "plataformas": [
                "PlayStation 4",
                "PlayStation 5",
                "Xbox Series X|S",
                "PC",
                "iOS"
            ],
            "nota_metacritic": 93,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Capcom",
            "studio": "Capcom",
            "genero": "Terror"
        },
        {
            "id": 15,
            "nome": "God of War Ragnarök",
            "data_lancamento": "2022-11-09",
            "descricao": "Kratos e Atreus precisam viajar pelos Nove Reinos em busca de respostas enquanto as forças de Asgard se preparam para uma batalha profetizada. A relação entre pai e filho continua no centro da aventura, enquanto Atreus busca compreender seu próprio destino e Kratos tenta protegê-lo das consequências das escolhas do passado.\n\nDurante a jornada, os dois enfrentam deuses nórdicos, monstros e diferentes ameaças em ambientes que vão desde florestas e montanhas até regiões congeladas e reinos míticos. O combate combina as armas de Kratos, habilidades de Atreus e novos equipamentos, enquanto a exploração permite descobrir caminhos, tesouros e histórias espalhadas pelos reinos.",
            "caminho_imagem": "/5.png",
            "plataformas": [
                "PlayStation 4",
                "PlayStation 5",
                "PC"
            ],
            "nota_metacritic": 94,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Sony Interactive Entertainment",
            "studio": "Santa Monica Studio",
            "genero": "Ação"
        },
        {
            "id": 16,
            "nome": "Cyberpunk 2077",
            "data_lancamento": "2020-12-10",
            "descricao": "Cyberpunk 2077 coloca o jogador em Night City, uma enorme metrópole obcecada por poder, glamour e modificações corporais. O jogador assume o papel de V, um mercenário que recebe uma missão que o coloca em contato com um implante experimental capaz de conceder a imortalidade.\n\nEnquanto V tenta descobrir como sobreviver às consequências do implante, a cidade oferece diferentes caminhos para explorar, personagens para conhecer e missões para realizar. Habilidades, armas, implantes cibernéticos e decisões narrativas permitem desenvolver diferentes estilos de jogo e influenciar a trajetória do protagonista.",
            "caminho_imagem": "/13.png",
            "plataformas": [
                "PC",
                "PlayStation 4",
                "PlayStation 5",
                "Xbox One",
                "Xbox Series X|S"
            ],
            "nota_metacritic": 86,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "CD Projekt",
            "studio": "CD Projekt Red",
            "genero": "RPG"
        },
        {
            "id": 17,
            "nome": "Red Dead Redemption 2",
            "data_lancamento": "2018-10-26",
            "descricao": "Red Dead Redemption 2 acompanha Arthur Morgan, um dos principais membros da gangue Van der Linde. Em 1899, o grupo precisa fugir das autoridades enquanto o avanço da civilização e das leis começa a transformar o Velho Oeste americano. Arthur precisa equilibrar sua lealdade à gangue com as consequências de suas escolhas.\n\nO mundo aberto permite explorar cidades, montanhas, florestas, rios e regiões selvagens enquanto Arthur participa de missões, caça, pesca, encontros aleatórios e atividades da vida no Velho Oeste. As relações com os integrantes da gangue e as decisões tomadas ao longo da história fazem parte da jornada de Arthur enquanto o grupo luta para sobreviver.",
            "caminho_imagem": "/16.png",
            "plataformas": [
                "PlayStation 4",
                "Xbox One",
                "PC"
            ],
            "nota_metacritic": 97,
            "quantos_jogadores": "1 / multiplayer online",
            "aceita_controle": true,
            "publisher": "Rockstar Games",
            "studio": "Rockstar Games",
            "genero": "Ação"
        },
        {
            "id": 18,
            "nome": "Grand Theft Auto VI",
            "data_lancamento": "2026-11-19",
            "descricao": "Grand Theft Auto VI apresenta Jason e Lucia, dois personagens que se encontram em uma situação complicada depois que um trabalho aparentemente simples dá errado. Os dois acabam envolvidos no lado mais sombrio de Leonida e precisam depender um do outro para sobreviver.\n\nA história acontece em Leonida, estado que inclui Vice City e outras regiões. A trama coloca a dupla no centro de uma conspiração criminosa que atravessa o estado, combinando personagens, locais e atividades características do universo Grand Theft Auto. O jogo apresenta uma nova versão de Vice City e diferentes regiões de Leonida para explorar.",
            "caminho_imagem": "/14.png",
            "plataformas": [
                "PlayStation 5",
                "Xbox Series X|S"
            ],
            "nota_metacritic": null,
            "quantos_jogadores": 1,
            "aceita_controle": true,
            "publisher": "Rockstar Games",
            "studio": "Rockstar North",
            "genero": "Ação"
        }
    ]

    let [id, setId] = useState(0);
    let [aberto, setAberto] = useState(false);     

    var scrollPosition = 0;
    const next: React.MouseEventHandler<HTMLButtonElement> = () => {
        var carouselWidth = $('.carousel-inner')[0].scrollWidth;
        var cardWidth = $('.carousel-item').width() || 0;
        // var scrollPosition = 0;
        if (scrollPosition < carouselWidth - cardWidth * 5) {
            //console.log('clicou');
            scrollPosition += cardWidth;
            //console.log(scrollPosition);
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        }
    }
    const prev: React.MouseEventHandler<HTMLButtonElement> = () => {

        var cardWidth = $('.carousel-item').width() || 0;
        // var scrollPosition = 0;
        if (scrollPosition > 0) {
            //console.log('clicou');
            scrollPosition -= cardWidth;
            //console.log(scrollPosition);
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        }
    }
  



    

    

    return (
        
        <div id="lancamentos">

            <div className="sml-title col-3"  id="jogos">
                <div><img src="./img/fire.png" alt="foguinho" /></div>
                <div>
                    <h4>Jogos</h4>
                </div>
            </div>
            <div>

                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner carousel-inner-home" id="carroselInner">
                        {jogos.map((jogo) => {
                            return <Card jogo={jogo} key={jogo.id} onCardClick={() => {
                                //console.log(aberto);
                                (id === jogo.id && aberto === true  ? (aberto ? setAberto(false) : setAberto(true)) : setAberto(true))
                                
                                setId(jogo.id);

                            }} />
                        })}
                    </div>
                    <button className="carousel-control-prev carousel-control-prev-home" type="button" onClick={prev}>
                        <span className="carousel-control-prev-icon carousel-control-prev-icon-home" aria-hidden="true"></span>

                    </button>
                    <button className="carousel-control-next carousel-control-next-home" type="button" onClick={next}>
                        <span className="carousel-control-next-icon carousel-control-next-icon-home" aria-hidden="true"></span>

                    </button>


                </div>

                {aberto === true && <Infos jogo = {jogos[id-1]} key={id} />} 

            </div>
        </div>
       
    )



}

