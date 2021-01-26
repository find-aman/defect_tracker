import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class DefectDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defectDetails: []
        }
    }

    componentDidMount() {
        axios.get('db.json')
            .then(result =>
                this.setState({
                    defectDetails: result.data
                })
            )
            .catch(error =>
                this.setState({
                    error
                })
            );
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
                            {this.state.defectDetails.map(details => {
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