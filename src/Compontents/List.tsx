import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from './ListItem'
import Song from '../Entities/Song'
import './List.scss'
import { useRef, useState } from 'react';

export default function List( { data }: { data: Song[] | null } ){
    const listRef = useRef<HTMLDivElement | null>(null);

    const [distanceFromStart, setDistanceFromStart] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false); //Handle spam click

    const [isScrollLeft, setScrollLeft] = useState(false)
    const [isScrollRight, setScrollRight] = useState(true)

    const isMobile = window.innerWidth <= 768;
    const items_per_page = isMobile?1:2
    
    const calculateFinalItemXPos = (final_item: HTMLElement|null, direction : string, items_per_page: number) => {
        const final_item_originalX = final_item ? final_item.getBoundingClientRect().right : 0;
        const final_item_width = final_item ? final_item.clientWidth : 0;
        const final_item_newX = direction === "left" ? final_item_originalX + (final_item_width * items_per_page) : final_item_originalX - (final_item_width * items_per_page);
        return final_item_newX
    }

    const calculateDistanceFromStart = (direction: string, final_item: HTMLElement|null, items_per_page : number) => {
        const final_item_width = final_item ? final_item.clientWidth : 0;
        let currentDistance = direction === "left" ? distanceFromStart + (final_item_width * items_per_page) : distanceFromStart - (final_item_width * items_per_page);
        return currentDistance
    }

    const handleClick = (direction: string) => {
        if (!listRef.current || isTransitioning) return;
        setIsTransitioning(true);
        const final_item = listRef.current.lastChild instanceof HTMLElement ? listRef.current.lastChild : null;
        
        // Calculate the new distanceFromStart based on direction
        let current_distance = calculateDistanceFromStart(direction, final_item, items_per_page)
        setDistanceFromStart(current_distance)
        listRef.current.style.transform = `translateX(${current_distance}px)`;

        // Ensure that the last item is on the screen
        const viewportWidth = window.innerWidth;

        //Due to translate transation this does not update in time
        const isFinalItemOnScreen = calculateFinalItemXPos(final_item,direction,items_per_page) <= viewportWidth;

        setScrollLeft(current_distance < 0);
        setScrollRight(!isFinalItemOnScreen);
        
        //Stop spamming to give time for the buttons to be set to display none
        setTimeout(() => {
            setIsTransitioning(false);
        }, 750);
      };

    let ListItemDiv = data?.map((item,index) => (
        <ListItem 
            id = {item.id}
            title = {item.title}
            image = {item.image_url}
            artist_name = {item.artist_names}
        />
    ))

    return(
        <div className="list">
            <span className="list-title">Song Title</span>
            <div className='list-wrapper'>
                {
                    isScrollLeft?
                    (<ArrowBackIosOutlined className='slider-arrow left' onClick={() => handleClick("left")}/>)
                    :null
                }
                <div className="list-container">
                    <div className='list-slider' ref={listRef}>
                        {ListItemDiv}
                    </div>
                </div>
                {
                    isScrollRight?
                    (<ArrowForwardIosOutlined className='slider-arrow right' onClick={() => handleClick("right")}/>)
                    :null
                }
            </div>
        </div>
    )
    
}