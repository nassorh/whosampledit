import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import searchService from '../dependencies'
import useDebounce from '../Hooks/useDebounce'
import Song from '../Entities/Song'

function Search() {
    const [search, setSearch] = useState<string>("")
    const [songs, setSongs] = useState< Song[] | null>([])    
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
            });
    }, [debouncedSearchValue]);

    let content;
    if(isLoading){
        content = <p>Loading...</p>
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
            <Form>
                <Form.Group className="mb-3" controlId="form.Song">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter a song" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
            </Form>
            {content}
        </div>
    );
}

export default Search;
