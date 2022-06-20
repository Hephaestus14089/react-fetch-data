import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Axios() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random")
         .then((res) => {
           setData(res.data.message);
         });
  }, []);

  return(
    <img width={500} src={data} alt="random dog"/>
  );
}

export default Axios;
