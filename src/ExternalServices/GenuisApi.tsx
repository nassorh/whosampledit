import IMusicAPI from './IMusicApi'
import axios from 'axios';

class GenuisApi implements IMusicAPI{
    private readonly baseUrl: string;
    private readonly accessToken: string | undefined;

    constructor(accessToken: string | undefined){
        if (accessToken === undefined){
            throw new Error("Access token is undefined")
        }

        // this.baseUrl = 'https://api.genius.com'
        this.baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.genius.com'
        this.accessToken = accessToken
    }

    searchSongs(query: string): Promise<[]> {
        if (query.length === 0){
            return Promise.reject(new Error("Query is empty"));
        }

        return axios
        .get(`${this.baseUrl}/search`,{
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            },
            params: {
                q: query
            },
        })
        .then((response) => {
            const songs = response.data.response.hits

            if(songs.length === 0){
                return Promise.reject(new Error("No songs"));
            }

            return songs;
        })
        .catch((err) => {
            throw err
        })
    }

    searchSamples(id: string): Promise<[]> {
        if (id.length === 0){
            return Promise.reject(new Error("Query is empty"));
        }

        return axios
        .get(`${this.baseUrl}/songs/${id}`,{
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        })
        .then((response) => {
            const songs = response.data.response.song.song_relationships[1].songs
            if(songs.length === 0){
                return Promise.reject(new Error("No songs"));
            }

            return songs;
        })
        .catch((err) => {
            throw err
        })
    }
}

export default GenuisApi