import {useSelector} from "react-redux";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import languageFr from 'datatables.net-plugins/i18n/fr-FR.mjs';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';

DataTable.use(DT);

function TableCurrentEmployees() {
    const {data} = useSelector((state) => state.employees)
    const columns = [
        { data: 'firstname' },
        { data: 'lastname' },
        { data: 'start' },
        { data: 'department' },
        { data: 'birth' },
        { data: 'street' },
        { data: 'city' },
        { data: 'state' },
        { data: 'zip' },
    ];

    return (
        <DataTable
            className="display"
            columns={columns}
            data={data}
            options={
                {language:languageFr}
            }
        >
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
        </DataTable>
    )
}

export default TableCurrentEmployees