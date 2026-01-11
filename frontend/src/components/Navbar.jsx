import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className = 'navbar'>
            <h1><Link class = 'nav-title-home' to="/">Similar Movies</Link></h1>

            <section class = 'nav-link'>
                <Link class = 'nav-home-link' to="/">Home</Link>
                <button><a href = 'https://www.themoviedb.org/?language=en-US'>TMBD &#8599;</a></button>
            </section>
            
        </nav>
    );
}