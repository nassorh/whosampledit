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
                const result = await searchService.searchSamples(param);
                setSamples(result)
            }
            setIsLoading(false);
        };
        
        fetchData();
      }, []);

    return(
        <div>
            {!isLoading &&  <List data = {samples} />}
            {isLoading && <p>Fetching Samples</p>}
        </div>
    )
}