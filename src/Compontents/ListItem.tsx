import './ListItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ListItemProps{
    image: string
}

export default function ListItem(props: ListItemProps){
    return(
        <div className="list-item">
            <div className="list-item-container">
                <img src={props.image}/>

                <div className="list-item-content">
                    <p className='list-item-content-title'>Song Title</p>
                    <p className='list-item-content-artist'>Song Artist</p>
                </div>

                <div className="play-wrapper">
                    <PlayArrowIcon className="play-wrapper"/>
                </div>

            </div>
        </div>
    )  
}