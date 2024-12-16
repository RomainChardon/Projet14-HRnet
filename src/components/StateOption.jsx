import React from "react";

function StateOption({value}) {
    return (
        <option key={value.name} value={value.abbreviation}>{value.name}</option>
    )
}

export default StateOption;