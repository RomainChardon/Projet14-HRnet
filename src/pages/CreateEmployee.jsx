import Form from "../components/Form.jsx";
import React, {useState} from "react";
import {Modal} from "simpletext-modal-react";

function CreateEmployee() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");


    return (
        <div className="container">
            <div className="title">
                <h1>WealthHealth</h1>
            </div>
            <div className="content">
                {/*<Link to="/employee-list">*/}
                {/*    View Current Employees*/}
                {/*</Link>*/}

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