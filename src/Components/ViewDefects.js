import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class ViewDefects extends React.Component {
    render() {
        return (
            <div>
                <table align="center">
                    <th>
                        <h1 style={{ textAlign: "center" }}>Defect Tracker</h1>
                    </th>
                    <tr>
                        <td align="center">
                            Logout
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            Add Defect View Defect
                        </td>
                    </tr>
                    <tr>
                        <table align="center">
                            <th>
                                <h2 style={{ textAlign: "center" }}>Filter Details</h2>
                            </th>
                            <tr>
                                Priority &nbsp;
                                <select>
                                    <option value="All">All</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </tr>
                            <tr>
                                Category &nbsp;
                                <select>
                                    <option value="UI">UI</option>
                                    <option value="Functional">Functional</option>
                                    <option value="Change Request">Change Request</option>
                                </select>

                            </tr>
                        </table>
                    </tr>
                    <tr>
                        <table>
                            <th>
                                <h2 style={{ textAlign: "center" }}>Defect Details</h2>
                            </th>
                            <tr>
                                <td align="center">
                                    Search Results: 3
                                </td>
                            </tr>
                            <tr>
                                <table border="1">
                                    <tr bgcolor="#077ff7">
                                        <th>
                                            Defect Category
                                        </th>
                                        <th>
                                            Description
                                        </th>
                                        <th>
                                            Priority
                                        </th>
                                        <th>
                                            Status
                                        </th>
                                        <th>
                                            Change Status
                                        </th>
                                    </tr>
                                    <tr bgcolor="#cfefff">
                                        <td align="center">
                                            UI
                                        </td>
                                        <td align="center">
                                            Submit Button coming to the extreme left. Refer to the screnshot.
                                        </td>
                                        <td align="center">
                                            2
                                        </td>
                                        <td align="center">
                                            Open
                                        </td>
                                        <td align="center">
                                            Close Defect
                                        </td>
                                    </tr>
                                </table>
                            </tr>
                        </table>
                    </tr>
                </table>
            </div >
        )
    }

}

export default ViewDefects