//External
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

//Styling
import '../Pages/Sample.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';

//Entites
import Song from '../Entities/Song'

interface SliderProps{
    samples : Song[] | null;
}

export default function SampleSlider(props : SliderProps){
    return(
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {props.samples?.map((sample) => (
                    <SwiperSlide key={sample.id}>
                        <div className='sample-container'>
                            <img src={sample.image_url} alt={sample.title}/>

                            <div className="sample-content">
                                <p className='sample-content-title'>{sample.title}</p>
                                <p className='sample-content-artist'>{sample.artist_names}</p>
                            </div>

                            <div className="play-wrapper">
                                <PlayArrowIcon className="play-wrapper"/>
                            </div>
                        </div>
                    </SwiperSlide>
            ))}
        </Swiper>
    )
}