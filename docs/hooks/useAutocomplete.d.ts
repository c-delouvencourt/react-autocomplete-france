import React from "react";
import { AutocompleteFeature } from "../types";
interface UseAutocompleteProps {
    onSuggestionSelected?: (suggestion: AutocompleteFeature) => void;
    debounce?: number;
    limit?: number;
    hasWatermark?: boolean;
    containerStyle?: React.CSSProperties;
    suggestionStyle?: React.CSSProperties;
}
declare function useAutocomplete({ onSuggestionSelected, debounce, limit, hasWatermark, containerStyle, suggestionStyle }: UseAutocompleteProps): {
    ref: React.RefObject<HTMLInputElement>;
};
export default useAutocomplete;
