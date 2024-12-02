import {Link} from "react-router-dom";

function CreateEmployee() {
    return (
        <div>
            <h1>HRnet</h1>
            <Link to="/employee-list">
                View Current Employees
            </Link>
        </div>
    )
}

export default CreateEmployee;