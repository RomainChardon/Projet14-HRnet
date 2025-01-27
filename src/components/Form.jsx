import React, {useEffect, useState} from "react";
import StateOption from "./StateOption.jsx";
import stateJson from "/src/assets/json/state.json"
import {useDispatch} from "react-redux";
import {addData} from "../redux/employeesSlice.jsx";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function Form({setShowModal, setMessage}) {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState();
    const [birthDate, setBirthDate] = useState();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        birth: '',
        start: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        department: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }))
    }

    const handleChangeStartDate = (e) => {
        setStartDate(e)
        const str = e.toLocaleDateString(
            "en-GB"
        )
        setFormData((data) => ({
            ...data,
            ["start"]: str,
        }))
    }

    const handleChangeBirthDate = (e) => {
        setBirthDate(e)
        const str = e.toLocaleDateString(
            "en-GB"
        )
        setFormData((data) => ({
            ...data,
            ["birth"]: str,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addData(formData));
        setFormData({
            firstname: '',
            lastname: '',
            birth: '',
            start: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            department: '',
        });

        setShowModal(true);
        setMessage("Employee created successfully !");
    }

    // TODO : import date picker
    // TODO: import selectmenu
    return (
        <div>
            <h2>Create Employee</h2>

            <form onSubmit={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="firstname" value={formData.firstname} onChange={handleChange}/>

                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="lastname" value={formData.lastname} onChange={handleChange}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker
                    showIcon
                    dateFormat='dd/MM/yyyy'
                    placeholderText=" jj / mm / aaaa"
                    selected={birthDate}
                    onChange={handleChangeBirthDate}
                />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker
                    showIcon
                    dateFormat='dd/MM/yyyy'
                    placeholderText=" jj / mm / aaaa"
                    selected={startDate}
                    onChange={handleChangeStartDate}
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" value={formData.street} onChange={handleChange}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" value={formData.city} onChange={handleChange}/>

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" value={formData.state} onChange={handleChange}>
                        {stateJson.map((value) => (
                            <StateOption key={value.name} value={value}/>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zip" value={formData.zip} onChange={handleChange}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" value={formData.department} onChange={handleChange}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Form;