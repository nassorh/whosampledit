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

                song.api_path = resultItem.result.api_path;
                song.title = resultItem.result.title;
                song.artist_names = resultItem.result.artist_names;
                song.url = resultItem.result.url;

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