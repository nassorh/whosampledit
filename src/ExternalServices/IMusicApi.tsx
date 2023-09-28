import Song from '../Entities/Song'

interface IMusicAPI{
    searchSongs(query: string) : Promise<[]>
    searchSamples(id: string): Promise<[]>
    // getSongDetails(id: string) : typeof Song
}

export default IMusicAPI;