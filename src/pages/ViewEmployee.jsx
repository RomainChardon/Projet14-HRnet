import {Link} from "react-router-dom";
import TableCurrentEmployees from "../components/TableCurrentEmployees.jsx";
import {addData} from "../redux/employeesSlice.jsx";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {Modal} from "simpletext-modal-react";
import Form from "../components/Form.jsx";

function ViewEmployee() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault()
        const employee = {
            firstname: 'romain',
            lastname: 'chardon',
            birth: '26/11/2001',
            start: '16/12/2024',
            street: 'street',
            city: 'city',
            state: 'Alabama',
            zip: 'zip',
            department: 'Sales',
        };

        dispatch(addData(employee));
        setShow(true);
        setMessage("Employee created successfully !");

    }

    return (
        <div>
            <div className="link-bar">
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className="container">
                <div className="title">
                    <h1>Current Employees</h1>
                    <button onClick={handleClick}>add an employee quickly</button>

                </div>
                <div className="content">
                    <TableCurrentEmployees/>
                </div>

                <Modal
                    show={show}
                    close={() => setShow(false)}
                    message={message}
                />
            </div>
        </div>
)
}

export default ViewEmployee;