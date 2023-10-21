export interface collection{
    id?:number,
    name?:string,
    poster_path?:string,
    backdrop_path?:string
}
export interface genre{
    id?:number,
    name?:string
}
export interface company{
    id?:number,
    logo_path?:string,
    name?:string,
    origin_country?:string
}
export interface country{
    iso_3166_1?:string,
    name?:string

}
export interface language{
    english_name?:string,
    iso_639_1?:string,
    name?:string
}
export interface fetchedMovie{
    adult?:boolean,
    backdrop_path?:string,
    belongs_to_collection?:collection | null,
    budget?:number,
    genres?:genre[],
    homepage?:string,
    id?:number,
    imdb_id?:string,
    original_language?:string,
    original_title?:string,
    overview?:string,
    popularity?:number,
    poster_path?:string,
    production_companies?:company[],
    production_countries?:country[],
    release_date?:string,
    revenue?:number,
    runtime?:number,
    spoken_languages?:language[],
    status?:string,
    tagline?:string,
    title?:string,
    video?:boolean,
    vote_average?:number,
    vote_count?:number
}