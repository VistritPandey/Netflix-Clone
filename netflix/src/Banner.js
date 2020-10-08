import Axios from "axios";
import React, { useState } from "react";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests);
    }
    fetchData();
  }, []);

  return (
    <header>
      {/*title*/}
      {/*div > 2 butttons*/}
    </header>
  );
}

export default Banner;
