import {Link} from "react-router-dom";
import Form from "../components/Form.jsx";
import React, {useState} from "react";
import {Modal} from "simpletext-modal-react";

function CreateEmployee() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");


    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employee-list">
                    View Current Employees
                </Link>

                <Form setShowModal={setShow} setMessage={setMessage}/>
            </div>
            <Modal
                show={show}
                close={() => setShow(false)}
                message={message}
            />
        </div>
    )
}

export default CreateEmployee;