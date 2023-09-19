export class Song{
    private _api_path: string = "";
    private _title: string = "";
    private _artist_names: string = "";
    private _url: string = "";
    private _song_samples: Song[] = [];

    public get api_path(): string {
        return this._api_path;
    }

    public set api_path(value: string) {
        this._api_path = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get artist_names(): string {
        return this._artist_names;
    }

    public set artist_names(value: string) {
        this._artist_names = value;
    }

    public get url(): string {
        return this._url;
    }

    public set url(value: string) {
        this._url = value;
    }

    public get song_samples(): Song[] {
        return this._song_samples;
    }

    public set song_samples(value: Song[]) {
        this._song_samples = value;
    }
}

const test_song = new Song();
test_song.api_path = "/songs/378195"
test_song.artist_names = "Sia"
test_song.title = "Chandelier"
test_song.url = "https://genius.com/songs/378195/apple_music_player"

//Samples
const sample_1 = new Song()
sample_1.title = "Sample_1"
const sample_2 = new Song()
sample_2.title = "Sample_2"
const sample_3 = new Song()
sample_3.title = "Sample_3"

test_song.song_samples = [
    sample_1,
    sample_2,
    sample_3
]
export default test_song;