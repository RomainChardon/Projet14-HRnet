import {Link} from "react-router-dom";
import TableCurrentEmployees from "../components/TableCurrentEmployees.jsx";
import {addData} from "../redux/employeesSlice.jsx";
import {useDispatch} from "react-redux";
import {useState} from "react";

function ViewEmployee() {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault()
        const employee = {
            firstname: 'romain',
            lastname: 'chardon',
            birth: '26/11/2001',
            startdate: '16/12/2024',
            street: 'street',
            city: 'city',
            state: 'Alabama',
            zip: 'zip',
            department: 'Sales',
        };

        dispatch(addData(employee));

    }

    return (
        <div>
            <button onClick={handleClick}>add employee</button>
            <h1>Current Employees</h1>
            <TableCurrentEmployees/>
            <Link to="/">
                Home
            </Link>
        </div>
    )
}

export default ViewEmployee;