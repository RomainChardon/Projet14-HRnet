import Form from "../components/Form.jsx";
import React, {useState} from "react";
import {Modal} from "simpletext-modal-react";
import {Link} from "react-router-dom";

function CreateEmployee() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");


    return (
        <div>
            <div className="link-bar">
                <Link to="/employee-list">
                    View Current Employees
                </Link>
            </div>
            <div className="container">
                <div className="title">
                    <h1>WealthHealth</h1>
                </div>
                <div className="content">
                    <Form setShowModal={setShow} setMessage={setMessage}/>
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

export default CreateEmployee;