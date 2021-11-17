import { useEffect, useState } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';

export const TestPage = () => {

  const [countryInfo, setCountryInfo] = useState({ _id: '', country_key: '', data: { description: '' }, flag: '' });

  useEffect(() => {
    Axios.get('http://localhost:5000/read/Angola').then((response) => {
      setCountryInfo(response.data);
      console.log(countryInfo)
    });
  }, []);

  return (<div>
    <h1>Welcome to Test Page!</h1>
    <h3>{countryInfo.country_key}</h3>
    <p>{countryInfo.data.description}</p>
    <div dangerouslySetInnerHTML={{ __html: countryInfo.flag }} />;
  </div>);
};
