import {AutocompleteQueryParams, AutocompleteResponse} from "../types";

export default class AutocompleteAPI {
    private baseURL: string;

    constructor(baseURL = 'https://api-adresse.data.gouv.fr') {
        this.baseURL = baseURL;
    }

    private buildQueryString(params: AutocompleteQueryParams): string {
        return Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
    }

    public async searchAddress(params: AutocompleteQueryParams): Promise<AutocompleteResponse> {
        const queryString = this.buildQueryString(params);
        const url = `${this.baseURL}/search/?${queryString}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: AutocompleteResponse = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Erreur lors de la recherche d'adresse: ${error}`);
        }
    }

    public async autocompleteAddress(query: string, limit: number = 5): Promise<AutocompleteResponse> {
        return this.searchAddress({ q: query, autocomplete: 1, limit });
    }
}