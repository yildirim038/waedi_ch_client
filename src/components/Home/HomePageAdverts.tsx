import { useEffect, useState } from 'react';
import { getAdvertData } from '../../services/advertService';
import { pageAdverts } from '../../untils/untils';
import { AdvertUpdateType } from '../../type/advertType';

const HomePageAdverts: React.FC = () => {
    const [advertData, setAdvertData] = useState<AdvertUpdateType[]>([]);

    useEffect(() => {
        getAdvertData(setAdvertData);
    }, []);

    const homeAdvert = advertData.filter(advert => advert.advertPage === "home" && advert.publish);
    const adverts = pageAdverts(homeAdvert)

    return (
        <div className="row">
            {adverts}
        </div>
    );
};

export default HomePageAdverts;
