//External
import { useEffect, useState } from 'react';

//Business Logic
import apiAdpater from '../dependencies'

//Hooks
import useDebounce from '../Hooks/useDebounce'

//Entities
import Song from '../Entities/Song'

//Compontents
import SearchCardList from '../Compontents/SearchCardList'
import SearchBar from '../Compontents/SearchBar'

//Styling
import './Search.scss'

function Search() {
    //Search bar values
    const [search, setSearch] = useState<string>("")
    const updateSearch = (search_value : string) => {
        setSearch(search_value)
    }

    //Songs values
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
                setIsLoading(false)
                setSongs(null)
            });
    }, [debouncedSearchValue]);

    return (
        <div className="search-wrapper">
            <SearchBar 
                search = {search}
                updateSearch = {updateSearch}
            />
            <SearchCardList
                songs = {songs}
                search = {debouncedSearchValue}
                isLoading = {isLoading}
            />

        </div>
    );
}

export default Search;
