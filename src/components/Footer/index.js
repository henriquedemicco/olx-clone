import * as SC from './style';

const Footer = () => {
    return (
        <SC.FooterStyle>
            <hr />
            <div className="footer-content">
                <div className="row">
                    <div className="col-lg-6 left-nav">
                        <nav>
                            <li>Ajuda e contato</li>
                            <li>Dicas de segurança</li>
                            <li>Vender na OLX</li>
                            <li>Plano Profissional</li>
                        </nav>
                    </div>

                    <div className="col-lg-6 right-nav">
                        <nav>
                            <li className="li-face"><i className="fab fa-facebook-f"></i></li>
                            <li className="li-yt"><i className="fab fa-youtube"></i></li>
                            <li className="li-in"><i className="fab fa-linkedin-in"></i></li>
                            <li className="li-insta"><i className="fab fa-instagram"></i></li>
                            <li className="li-twit"><i className="fab fa-twitter"></i></li>
                        </nav>
                    </div>
                </div>
                <div className="bottom-txt">
                    <p>© O melhor clone da OLX que você verá hoje.</p>
                </div>
            </div>
        </SC.FooterStyle>
    )
}

export default Footer;