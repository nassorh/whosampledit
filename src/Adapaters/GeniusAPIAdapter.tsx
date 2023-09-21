import Song from '../Entities/Song'
import IMusicAPI from '../ExternalServices/IMusicApi'
import IMusicAPIAdapter from "../Adapaters/IMusicAPIAdapter";

class GenuisApiAdapter implements IMusicAPIAdapter{
    private musicApi : IMusicAPI

    constructor(musicApi: IMusicAPI){
        this.musicApi = musicApi
    }

    searchSongs(query: string): Promise<Song[] | null>{
        return this.musicApi
        .searchSongs(query)
        .then((result: Song[] | null) => {
            if (result === null) {
                return null;
            }

            const items: Song[] = result.map((resultItem: any) => {
                const song = new Song();
                
                song.id = resultItem.result.id; 
                song.api_path = resultItem.result.api_path; 
                song.title = resultItem.result.title !== null ? resultItem.result.title : song.title; 
                song.artist_names = resultItem.result.artist_names !== null ? resultItem.result.artist_names : song.artist_names; 
                song.full_title = resultItem.result.full_title !== null ? resultItem.result.full_title : song.full_title; 
                song.image_url = resultItem.result.song_art_image_thumbnail_url;
                song.release_date = resultItem.result.release_date_for_display !== null ? resultItem.result.release_date_for_display : song.release_date
                return song;
            });

            return items;
        })
        .catch((error) => {
            throw error;
        });
    }
}

export default GenuisApiAdapter;