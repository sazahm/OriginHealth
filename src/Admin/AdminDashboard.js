import react, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import LabelData from "../Core/LabelData";
import {Link, useNavigate} from 'react-router-dom'

function AdminDashboard() {

    let history = useNavigate();

    const handleEdit = (id,tag) => {
        localStorage.setItem('Tag', tag)
    }

    const handleDelete = (id) => {
        var index = LabelData.map(function(e){
            return e.id
        }).indexOf(id);

        LabelData.splice(index,1);

        history('/admindashboard')

    }

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