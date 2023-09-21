import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import searchService from '../dependencies'
import useDebounce from '../Hooks/useDebounce'
import Song from '../Entities/Song'
import './Search.css'
import search_icon from './search.png'

function Search() {
    const [search, setSearch] = useState<string>("")
    const [songs, setSongs] = useState<Song[] | null>([])    
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const debouncedSearchValue = useDebounce(search)

    useEffect(() => {
        setIsLoading(true);

        searchService
            .performSearch(search)
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
    if(isLoading){
        content = <p>Loading...</p>
    }else if(content === null){
        content = <div>
                    <p>We couldn't find the song you were looking for.<br/>Please check your spelling and try again, or consider searching with a different song title or artist name.</p>
                </div>
    }else{
        content = songs?.map((song,index) => (
            <div key={index}>
                <h3>{song.title}</h3>
                <p>Artiist: {song.artist_names}</p>
                <a href={song.url}>Lyrics</a>
            </div>
        ))
    }
    
    return (
        <div>
            <div className='search-bar-background'>
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
