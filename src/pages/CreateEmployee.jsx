import {Link} from "react-router-dom";
import Form from "../components/Form.jsx";

function CreateEmployee() {
    return (
        <div>
            <h1>HRnet</h1>
            <Form />

            <Link to="/employee-list">
                View Current Employees
            </Link>
        </div>
    )
}

export default CreateEmployee;