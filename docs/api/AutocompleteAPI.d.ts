import { AutocompleteQueryParams, AutocompleteResponse } from "../types";
export default class AutocompleteAPI {
    private baseURL;
    constructor(baseURL?: string);
    private buildQueryString;
    searchAddress(params: AutocompleteQueryParams): Promise<AutocompleteResponse>;
    autocompleteAddress(query: string, limit?: number): Promise<AutocompleteResponse>;
}
