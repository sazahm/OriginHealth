import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LabelData from "../Core/LabelData";
import {v4 as uuid} from "uuid";
import { useNavigate} from 'react-router-dom'

function Add(){

    const[tag, setTag] = useState("");

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a=tag;

        LabelData.push({id: uniqueId, tag: a});

        history("/admindashboard");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setTag(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>;
}
export default Add;