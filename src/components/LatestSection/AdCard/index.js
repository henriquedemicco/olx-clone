import * as SC from './style';

const AdCard = (props) => {
    return (
        <SC.AdCardStyle data-bs-toggle="modal" data-bs-target={"#id" + props.id }>
            <img src={props.image} alt="Foto do produto" />
            <hr />
            <h6> { props.title } </h6>
            <p><strong>R$ { props.price }</strong></p>

            <div className="modal fade" id={"id" + props.id } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="ad-title">
                                <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                                <p><em>{props.categorie}</em></p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={ props.image } alt="Foto do produto" />
                            <p>{props.description}</p>
                        </div>
                        <div className="modal-footer">
                            <p><em>Publicado em {props.date}</em> por <strong>{props.advertiser}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </SC.AdCardStyle>
    )
}

export default AdCard;