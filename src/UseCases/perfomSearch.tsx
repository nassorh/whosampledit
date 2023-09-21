import IMusicAPIAdapter from "../Adapaters/IMusicAPIAdapter";
import Song from "../Entities/Song";

class SearchService{
    private musicAPIAdapter : IMusicAPIAdapter

    constructor(musicAPIAdapter: IMusicAPIAdapter){
        this.musicAPIAdapter = musicAPIAdapter;
    }
    
    performSearch(searchTerm: string): Promise<Song[] | null> {
        return this.musicAPIAdapter.searchSongs(searchTerm);
    }
}

export default SearchService;