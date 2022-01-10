import { ReactComponent as GithubIcon } from 'assets/img/Github.svg'
import './style.css'

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Thalita1415">
                        <div className="dsmovie-contact-conteiner">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;