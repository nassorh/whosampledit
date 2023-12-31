//Externals
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { common } from '@mui/material/colors';
import { Link  } from 'react-router-dom';

//Business Logic
import searchService from '../dependencies'

//Compontents
import SampleSlider from '../Compontents/SampleSlider';
import Message from '../Compontents/Message'

//Styling
import './Sample.scss'

//Entites
import Song from '../Entities/Song'

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
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        setSamples(null)
                        setIsLoading(false);
                    })
            }
        };
        fetchData();
      }, []);

    return(
        <div>
            <Link to={'..'}>
                <ArrowBackIosIcon fontSize="large" sx={{ color: common.white, marginLeft:'6.5rem', marginTop: '2rem', marginBottom:'2rem' }} />
            </Link>
            {!isLoading &&  samples === null && <Message type='hinter' text={"Oops, it looks like we couldn't find any samples or data to display."} />}
            {!isLoading &&  samples !== null && <SampleSlider samples = {samples} />}
            {isLoading && <p className='message'>Fetching Samples</p>}
        </div>
    )
}