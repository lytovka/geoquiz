import { useEffect, useState } from 'react';
import Axios from 'axios';
import { GenericPageLayout } from 'layouts';

export const RussiaPage = () => {

    const [countryInfo, setCountryInfo] = useState({ _id: '', country_key: '', data: { description: '' }, flag: '' });

    useEffect(() => {
        Axios.get('http://localhost:5000/read/Russian Federation').then((response) => {
            setCountryInfo(response.data);
        });
    }, []);

    return (
        <GenericPageLayout>
            <div>
                <h1>Database showcase - Russia Page</h1>
                <h3>{countryInfo.country_key}</h3>
                <p>{countryInfo.data.description}</p>
                <div dangerouslySetInnerHTML={{ __html: countryInfo.flag }} />;
            </div>
        </GenericPageLayout>
    );
};
