import * as SC from './style';

const OrangeButton = (props) => {
    return (
            <SC.OrangeButtonStyle 
                type={props.type}
                onClick={props.onClick}
            >
                { props.text }
            </SC.OrangeButtonStyle>
    )
}

export default OrangeButton;