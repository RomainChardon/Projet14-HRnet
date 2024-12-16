import {Link} from "react-router-dom";
import Form from "../components/Form.jsx";

function CreateEmployee() {
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employee-list">
                    View Current Employees
                </Link>

                <Form />
            </div>

        </div>
    )
}

export default CreateEmployee;