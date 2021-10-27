import * as SC from './style';

const NavItem = (props) => {
    return (
        <SC.NavItemStyle>
            <i className={ props.icon }></i>
            <a className="nav-link" href={props.link}>{ props.text }</a>
        </SC.NavItemStyle>
    )
}

export default NavItem;