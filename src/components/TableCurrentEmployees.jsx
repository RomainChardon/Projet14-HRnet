import {useSelector} from "react-redux";

function TableCurrentEmployees() {
    const {data} = useSelector((state) => state.employees)
    // TODO : Import datatables
    return (
        <div>
            <table id="employee-table" className="display">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Start Date</td>
                        <td>Departement</td>
                        <td>Date  of Birth</td>
                        <td>Street</td>
                        <td>City</td>
                        <td>State</td>
                        <td>Zip Code</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) => (
                        <tr>
                            <td>{e.firstname}</td>
                            <td>{e.lastname}</td>
                            <td>{e.startdate}</td>
                            <td>{e.department}</td>
                            <td>{e.birth}</td>
                            <td>{e.street}</td>
                            <td>{e.city}</td>
                            <td>{e.state}</td>
                            <td>{e.zip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableCurrentEmployees