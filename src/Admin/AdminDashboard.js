import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import LabelData from "../Core/LabelData";
import {Link, } from 'react-router-dom'

function AdminDashboard() {




    return(
        <>
            <div style={{margin:"2rem"}}>
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>
                                Tag
                            </th>
                           
                           
                        </tr>
                    </thead>
                    <tbody >
                        {
                            LabelData && LabelData.length > 0
                            ?
                            LabelData.map((item) =>{
                                return(
                                    <tr >
                                        <td >
                                            {item.tag}
                                        </td>
                                       
                                       
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className="d-grid gap-2" to="/createtag">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </>
    )
}

export default AdminDashboard;