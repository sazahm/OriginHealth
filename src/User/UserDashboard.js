import react, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Core/Data";
import {Link, useNavigate} from 'react-router-dom'

function UserDashboard() {

    let history = useNavigate();

    const handleEdit = (id,tag) => {
        localStorage.setItem('Tag', tag)
        localStorage.setItem('Id', id)
    }

    const handleDelete = (id) => {
        var index = Data.map(function(e){
            return e.id
        }).indexOf(id);

        Data.splice(index,1);

        history('/userdashboard')

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
                            <th>
                                Image
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            Data && Data.length > 0
                            ?
                            Data.map((item) =>{
                                return(
                                    <tr >
                                        <td >
                                            {item.tag}
                                        </td>
                                        <td>
                                        <img className="animalimage" src={item.image} alt="Logo" />
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.tag)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
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
                {/* <Link className="d-grid gap-2" to="/create">
                    <Button size="lg">Create</Button>
                </Link> */}
            </div>
        </>
    )
}

export default UserDashboard;