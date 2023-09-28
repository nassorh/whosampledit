import { useEffect, useState } from 'react';

import apiAdpater from '../dependencies'
import useDebounce from '../Hooks/useDebounce'

import Song from '../Entities/Song'
import SearchCard from '../Compontents/SearchCard'

import './Search.scss'
import search_icon from './search.png'

function Search() {
    const [search, setSearch] = useState<string>("")
    const [songs, setSongs] = useState<Song[] | null>([])    
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const debouncedSearchValue = useDebounce(search)

    useEffect(() => {
        setIsLoading(true);

        apiAdpater
            .searchSongs(search)
            .then((response) => {
                setIsLoading(false)
                setSongs(response)
            })
            .catch((error) => {
                console.log("Caught",error)
                setIsLoading(false)
                setSongs(null)
            });
    }, [debouncedSearchValue]);

    let content;
    console.log(content)
    if(isLoading){
        content = <p>Loading...</p>
    }else if(songs === null && debouncedSearchValue){
        content = <div className="hinter-message">
                    <p>We couldn't find the song you were looking for.<br/>Please check your spelling and try again, or consider searching with a different song title or artist name.</p>
                </div>
    }else{
        content = songs?.map((song,index) => (
            <SearchCard 
                song = {song}
            />
        ))
    }
    
    return (
        <div className="search-wrapper">
            <div className='search-bar-wrapper'>
                <div className='search-bar-icon'>
                    <img src={search_icon}></img>
                </div>
                <input
                    type="text" 
                    placeholder="Search" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    className='search-bar-input'
                />
            </div>
            {content}

        </div>
    );
}

export default Search;
