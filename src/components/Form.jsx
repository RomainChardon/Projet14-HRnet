import {useState} from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        birth: '',
        startdate: '',
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form : ', formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" name="firstname" value={formData.firstname} onChange={handleChange}/>

            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" name="lastname" value={formData.lastname} onChange={handleChange}/>

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input type="text" id="date-of-birth" name="birth" value={formData.birth} onChange={handleChange}/>

            <label htmlFor="start-date">Start Date</label>
            <input type="text" id="start-date" name="start-date" value={formData.startdate} onChange={handleChange}/>

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" name="street" value={formData.street} onChange={handleChange}/>

                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" value={formData.city} onChange={handleChange}/>

                <label htmlFor="state">State</label>
                <select name="state" id="state" value={formData.state} onChange={handleChange}></select>

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
    )
}

export default Form;