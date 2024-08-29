import {useAutocomplete} from "../../hooks";

export function ExampleAutocomplete() {

    const {ref } = useAutocomplete({});

    return (
        <div>
            <h1>Test de recherche</h1>
            <input ref={ref} name={"search"} style={{
                position: 'relative',
                width: '300px',
                padding: '8px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
            }}/>
        </div>
    )
}