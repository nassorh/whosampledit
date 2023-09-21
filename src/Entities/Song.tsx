export default class Song{
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
