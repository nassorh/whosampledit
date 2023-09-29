//Entities
import Song from '../Entities/Song'

//Compontents
import SearchCard from './SearchCard';
import MessageModal from './Message';

interface SearchCardListProps{
    songs : Song[] | null;
    search : string;
    isLoading : boolean | null;
}

export default function SearchCardList(props : SearchCardListProps){
    return (
        <>
            {props.isLoading && <p>Loading...</p>}
            {!props.isLoading && props.songs === null && props.search.length !== 0 &&
                <MessageModal
                    type = {"hinter"}
                    text = {"We couldn't find the song you were looking for\nPlease check your spelling and try again, or consider searching with a different song title or artist name."}
                />
            }
            {!props.isLoading && props.songs &&
                props.songs.map((song, index) => 
                    <SearchCard 
                        key={index} 
                        song={song} 
                    />
                )
            }
        </>
    )
}