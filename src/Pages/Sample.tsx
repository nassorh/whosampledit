import './Sample.scss'
import List from '../Compontents/List';
import Song from '../Entities/Song'

import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'

import searchService from '../dependencies'

export default function Sample(){
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [samples, setSamples] = useState<Song[] | null>(null);

    const param = useParams().songId

    useEffect(() => {
        setIsLoading(true)

        const fetchData = async () => {
            if (param) {
                searchService.searchSamples(param)
                    .then((result) => {
                        setSamples(result)
                    })
                    .catch((error) => {
                        console.log(error)
                        setSamples(null)
                    })
            }
            setIsLoading(false);
        };
        
        fetchData();
      }, []);

    return(
        <div>
            {!isLoading &&  samples === null && <p className='error-message'>Oops, it looks like we couldn't find any samples or data to display.</p> }
            {!isLoading &&  samples !== null && <List data = {samples} />}
            {isLoading && <p>Fetching Samples</p>}
        </div>
    )
}