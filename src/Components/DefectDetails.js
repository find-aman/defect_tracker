import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class DefectDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = [{
            defectCategory: "UI",
            description: "Submit Button coming to the extreme left. Refer to the screnshot.",
            priority: 2,
            status: "Open",
            changeStatus: "Close Defect"
        }]
    }

    render() {
        return (
            <React.Fragment>
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
                        <table border="2">
                            <tr bgcolor="#077ff7" style={{ textAlign: "center" }}>
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
                            {this.state.map(details => {
                                return (
                                    <tr bgcolor="#cfefff" style={{ textAlign: "center" }}>
                                        <td>
                                            {details.defectCategory}
                                        </td>
                                        <td>
                                            {details.description}
                                        </td>
                                        <td>
                                            {details.priority}
                                        </td>
                                        <td>
                                            {details.status}
                                        </td>
                                        <td>
                                            {details.changeStatus}
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </tr>
                </table>
            </React.Fragment>
        )
    }
}

export default DefectDetails