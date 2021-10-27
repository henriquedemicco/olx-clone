import * as SC from './style';

const PageBanner = () => {
    return (
        <SC.PageBannerStyle className="container-fluid">
            <div className="bn">
                <img src="./images/banner-left.jpg" alt="Banner lado direito"/>
            </div>
            <img src="./images/banner-right.jpg" alt="Banner lado esquerdo"/>
        </SC.PageBannerStyle>
    )
}

export default PageBanner;