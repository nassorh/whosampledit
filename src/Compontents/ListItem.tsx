import './ListItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ListItemProps{
    id: number
    title: string
    image: string
    artist_name : string
    
}

export default function ListItem(props: ListItemProps){
    return(
        <div className="list-item">
            <div key={props.id} className="list-item-container">
                <img src={props.image} alt={props.title}/>

                <div className="list-item-content">
                    <p className='list-item-content-title'>{props.title}</p>
                    <p className='list-item-content-artist'>{props.artist_name}</p>
                </div>

                <div className="play-wrapper">
                    <PlayArrowIcon className="play-wrapper"/>
                </div>

            </div>
        </div>
    )  
}