import React,{ useState, useEffect} from 'react'
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
            console.log(requests);
            return requests;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/*container*/}
        </div>
    )
}

export default Row
