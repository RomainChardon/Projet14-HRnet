import {Link} from "react-router-dom";

function ViewEmployee() {
    return (
        <div>
            <h1>Current Employees</h1>

            <Link to="/">
                Home
            </Link>
        </div>
    )
}

export default ViewEmployee;