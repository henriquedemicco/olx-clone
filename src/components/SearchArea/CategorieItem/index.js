import * as SC from './style';

const CategorieItem = (props) => {
    return (
        <SC.CategorieItemStyle>
            <span><i className={ props.icon }></i></span>
            <p>{ props.text }</p>
        </SC.CategorieItemStyle>
    )
}

export default CategorieItem;