import React from 'react'

const Movie = () => {
    return (
      <>
    <div class="carousel-container">
        <div class="carousel">
            <div class="slider">
                <div class="slide-content">
                    <h1 class="movie-title">loki</h1>
                    <p class="movie-des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam distinctio molestiae quis praesentium cum obcaecati eveniet voluptates exercitationem eum accusantium.</p>
                </div>
                <img src="./img/slider 1.png" alt="Slider"/>
            </div> 
        </div>
    </div>

    <h1 class="title">Recommended for you</h1>
    <div class="movies-list">
        <button class="pre-btn"><img src="./img/pre.png" alt=""/></button>
        <button class="nxt-btn"><img src="./img/nxt.png" alt=""/></button>
        <div class="card-container">
            <div class="card">
                <img src="./img/poster 4.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Chichore</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 4.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Avengers Endgame</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 11.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Ford v Ferrari</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 2.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Mulan</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 1.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Loki</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 5.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Thor Ragnarok</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 6.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Avengers</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 10.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Ok Computer</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 11.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Dil Bechara</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 8.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Soul</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 13.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">The Office</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 10.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Luca</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 12.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Dark Phoenix</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 12.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">TanHaji</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 14.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Euphoria</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- ------------------ Popular Shows ------------------ --> */}
    <h1 class="title">Popular Shows</h1>
    <div class="movies-list">
        <button class="pre-btn"><img src="./img/pre.png" alt=""/></button>
        <button class="nxt-btn"><img src="./img/nxt.png" alt=""/></button>
        <div class="card-container">
            <div class="card">
                <img src="./img/card 3.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Yeh Rishta</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 4.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Anupama</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 2.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Imlie</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 1.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">City of Dreams</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 5.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Shin-chan</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 8.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Doraemon</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 9.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Mahadev</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 7.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Grahan</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 6.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Pandya Store</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 10.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Luca</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 15.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Mahabharat</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 16.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">RadhaKrishn</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 17.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Phineas and Ferb</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 1.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Loki</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 18.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Special Ops</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 19.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Hostages</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/card 20.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Criminal Justice</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- ------------------ New Releases ------------------ --> */}
    <h1 class="title">New Releases</h1>
    <div class="movies-list">
        <button class="pre-btn"><img src="./img/pre.png" alt=""/></button>
        <button class="nxt-btn"><img src="./img/nxt.png" alt=""/></button>
        <div class="card-container">
            <div class="card">
                <img src="./img/poster 3.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Collar Bomb</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 5.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">WandaVision</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 8.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Carbon</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 1.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Hungama 2</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 2.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Hanuman</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 9.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Boys Don't Cry</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 10.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Shaadisthan</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 1.png" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Loki</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 7.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Love, Simon</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 14.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Betty</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 15.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Chhuri</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 16.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Cars 3</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 13.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Pose</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 6.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Modern Family</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 17.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Brave</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
            <div class="card">
                <img src="./img/poster 18.webp" class="card-img" alt=""/>
                <div class="card-body">
                    <h2 class="name">Dil Bechara</h2>
                    <h6 class="des">Lorem ipsum dolor sit consectetur elit.</h6>
                    <button class="watchlist-btn">add to watchlist</button>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }

export default Movie