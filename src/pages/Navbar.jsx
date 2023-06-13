import React from 'react'
// import logo from '';
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <>
            <nav class="navbar">
                <img src='./img/logo1.svg' to ="Home" class="logo" alt="Logo" />
                <ul class="nav-links">
                    <li class="nav-items"><NavLink to="Home">Home</NavLink></li>
                    <li class="nav-items"><NavLink to="Movie">Movies</NavLink></li>
                    <li class="nav-items"><NavLink to="Tv">TV Shows</NavLink></li>
                    <li class="nav-items"><NavLink to="Series">Series</NavLink></li>
                    <li class="nav-items"><NavLink to="Favorite">My Favourites</NavLink></li>
                    <li class="nav-items"><NavLink to="Wishlist">Wishlist</NavLink></li>
                    {/* <li class="nav-items"><a href="Setting.html">Setting</a></li> */}
                    {/* <li class="nav-items"><a href="Logout.html">Logout</a></li> */}
                </ul>

                <div class="right-container">
                    <input type="text" class="search-box" placeholder="search" />
                    <button class="sub-btn">Subscribe</button>
                    <a href="#" class="login-link">login</a>
                </div>
            </nav>
        </>
    )
}

export default navbar