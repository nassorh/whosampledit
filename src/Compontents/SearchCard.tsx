import Song from '../Entities/Song'

import { Link  } from 'react-router-dom';

interface SearchCardProps {
    song: Song;
}

export default function SearchCard(props : SearchCardProps){
    return(
        <Link to={{
            pathname: `sample/${props.song.id}`,
            search: `?name=${props.song.title}`,
        }}
        >
            <div key={props.song.id} className='search_card'>

                <div className='search_card-image-container'>
                    <img src={props.song.image_url} alt={props.song.title}/>
                </div>

                <div className='search_card-info-container'>
                    <div className='search_card-title-container'>
                        <p className='search_card-song-title'>{props.song.title}</p>
                        <p className='search_card-artist-name'>{props.song.artist_names}</p>
                    </div>

                    <div className='search_card-full-title'>
                        <p>{props.song.full_title}</p>
                    </div>

                    <div className='search_card-release-date'>
                        <p>{props.song.release_date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
