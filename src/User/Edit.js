import React, {useState, useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Core/Data";
import LabelData from "../Core/LabelData";
import { useNavigate} from 'react-router-dom'

function Edit(){

    const[tag, setTag] = useState("");
    const[id, setId] = useState("");

    let history = useNavigate();

    var index = Data.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) => {
        e.preventDefault();

        let a = Data[index];
        a.tag = tag;

        history("/userdashboard");
    }

    useEffect(() => {
        setTag(localStorage.getItem('Tag'))
        setId(localStorage.getItem('Id'))
    },[])
    console.log(LabelData)
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}} onChange={(e) => setTag(e.target.value)}>
            <Form.Group className="mb-3" controlId="formName">
            <Form.Select>
                <option>Select Tag</option>
            {LabelData.map((data, index) => (
                 <option>{data.tag}</option>
            ))}
            </Form.Select>
           
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
        </div>
    )

}

export default Edit;