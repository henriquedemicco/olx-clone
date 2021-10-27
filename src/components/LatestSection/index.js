import AdCard from './AdCard';
import * as SC from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LatestSection = () => {

    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get('/ad').then(res => {
            let ads1 = []
            ads1 = res.data
            setAds(ads1);
            console.log(ads1)
        });
    }, []);


    return (
        <div className="container">
            <h5>Anúncios Recentes</h5>
            <SC.LatestSectionStyle>
                <ul>
                    {ads.map(ad => (
                        <AdCard key={ad.id_ad} 
                                title={ad.product} 
                                id={ad.id_ad}
                                image={ad.image}
                                price={ad.price}
                                date={ad.publi_in}
                                advertiser={ad.advertiser}
                                description={ad.description}
                                categorie={ad.categorie}
                        />
                    ))}
                </ul>
            </SC.LatestSectionStyle>
        </div>
    );
}





export default LatestSection;