export interface AutocompleteQueryParams {
    q: string;
    limit?: number;
    lat?: number;
    lon?: number;
    postcode?: string;
    citycode?: string;
    type?: string;
    autocomplete?: number;
    [key: string]: any;
}

export interface AutocompleteResponse {
    type: string
    version: string
    features: AutocompleteFeature[]
    attribution: string
    licence: string
    query: string
    limit: number
}

export interface AutocompleteFeature {
    type: string
    geometry: AutocompleteGeometry
    properties: AutocompleteProperties
}

export interface AutocompleteGeometry {
    type: string
    coordinates: number[]
}

export interface AutocompleteProperties {
    label: string
    score: number
    housenumber: string
    id: string
    name: string
    postcode: string
    citycode: string
    x: number
    y: number
    city: string
    context: string
    type: string
    importance: number
    street: string
    banId?: string
}
