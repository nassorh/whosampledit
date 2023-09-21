export default class Song{
    private _id: number = -1; //-1 indicates unset id
    private _api_path: string = ""; // Empty string for an unset API path
    private _title: string = "Unknown Title";
    private _artist_names: string = "Unknown Artist";
    private _full_title: string = "Unknown Full Title";
    private _image_url: string = ""; // Empty string for an unset image URL 
    private _song_samples: Song[] = []; // An empty array for song samples
    private _release_date: string = "Unknown Release Date";
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

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

    public get full_title(): string {
        return this._full_title;
    }

    public set full_title(value: string) {
        this._full_title = value;
    }

    public set artist_names(value: string) {
        this._artist_names = value;
    }

    public get image_url(): string {
        return this._image_url;
    }

    public set image_url(value: string) {
        this._image_url = value;
    }

    public get song_samples(): Song[] {
        return this._song_samples;
    }

    public set song_samples(value: Song[]) {
        this._song_samples = value;
    }
    public get release_date(): string {
        return this._release_date;
    }
    public set release_date(value: string) {
        this._release_date = value;
    }
}
