import Song from '../Entities/Song'
import IMusicAPI from '../ExternalServices/IMusicApi'

interface IMusicAPIAdapter{
    searchSongs(query: string) : Promise<Song[] | null>
    searchSamples(id: string): Promise<Song[] | null>
}

export default IMusicAPIAdapter