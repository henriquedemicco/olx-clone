import * as SC from './style';
import NavItem from './NavItem';
import OrangeButton from './OrangeButton';

const Navbar = () => {
    return (
        <>
            <SC.NavbarStyle className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/"><img src="./images/olx-logo.png" alt="Logo OLX" /></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItem className="nav-item" text="Buscar" />
                        </ul>

                        <ul className="nav-mid navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItem className="nav-item" link="/" text="Plano Profissional" icon="fas fa-briefcase" />
                            <NavItem className="nav-item" link="/" text="Meus Anúncios" icon="fas fa-th-large" />
                            <NavItem className="nav-item" link="/" text="Chat" icon="fas fa-comment-dots" />
                            <NavItem className="nav-item" link="/" text="Notificações" icon="fas fa-bell" />
                            <NavItem className="nav-item" link="/" text="Entrar" icon="fas fa-user" />
                        </ul>
                        <a href="/anuncio">
                            <OrangeButton text="Anunciar" type="button" />
                        </a>
                    </div>
                </div>
            </SC.NavbarStyle>
        </>
    )
}

export default Navbar;