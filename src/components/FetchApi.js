import React, { useEffect, useState } from 'react';

function FetchApi() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData.message);
      });
  }, []);

  return(
      <img width={500} src={data} alt="random dog"/>
  );
}

export default FetchApi;
