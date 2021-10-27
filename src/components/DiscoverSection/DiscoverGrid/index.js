import * as SC from './style';

const DiscoverGrid = () => {
    return (
        <SC.DiscoverGridStyle>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="row">
                        <div className="left-col">
                            <div className="card-text">
                                <p>Conheça os nossos</p>
                                <h5>Planos profissionais</h5>
                            </div>
                            <img src="images/discover-pics/pic-c1.webp" alt="Planos profissionais"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row r">
                        <div className="c">
                            <div className="card-text">
                                <p>Quer alugar ou vender?</p>
                                <h5>Casas e apartamentos</h5>
                            </div>
                            <img src="images/discover-pics/pic-c2-l1.webp" alt="Casas e apartamentos"></img>
                        </div>
                    </div>
                    <div className="row r">
                        <div className="c">
                            <div className="card-text">
                                <p>Desapega do seu usado</p>
                                <h5>Venda seu celular</h5>
                            </div>
                            <img src="images/discover-pics/pic-c2-l2.jpg" alt="Venda seu celular"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row r">
                        <div className="c3-l1">
                            <div className="card-text">
                                <p>Eletrônicos e celulares</p>
                                <h5>Videogames</h5>
                            </div>
                            <img src="images/discover-pics/pic-c3-l1.webp" alt="Eletrônicos e celulares"></img>
                        </div>
                    </div>
                    <div className="row r">
                        <div className="c3-l2">
                            <div className="card-text">
                                <p>Autos e peças</p>
                                <h5>Troque de carro</h5>
                            </div>
                            <img src="images/discover-pics/pic-c3-l2.webp" alt="Autos e peças"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row r">
                        <div className="c">
                            <div className="card-text">
                                <p>Financiamento</p>
                                <h5>Veja as oportunidades!</h5>
                            </div>
                            <img src="images/discover-pics/pic-c4-l1.jpg" alt="Financiamentos"></img>
                        </div>
                    </div>
                    <div className="row r">
                        <div className="c">
                            <div className="card-text">
                                <p>OLX Pay</p>
                                <h5>Um novo jeito de vender</h5>
                            </div>
                            <img src="images/discover-pics/pic-c4-l2.jpg" alt="OLX Pay"></img>
                        </div>
                    </div>
                </div>
            </div>
        </SC.DiscoverGridStyle>
    )
}

export default DiscoverGrid;