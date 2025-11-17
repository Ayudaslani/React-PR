import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddmoiveAsync } from '../../Services/Action/Action';
import { useNavigate } from 'react-router';
import './Addmoive.css'


const Addmoive = () => {
    const inisitalstate = {
        id: "",
        desc: "",
        name: "",
        category: "",
        type: "",
        year: "",
        image: ""
    }

    const [inputForm, setInputForm] = useState(inisitalstate);
    const [Error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isCreated } = useSelector(state => state.ReducerData)


    const handlechange = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        })
    }

    const fromVaildation = () => {
        const formError = {};

        if (inputForm.name == "") {
            formError.name = "Name is required !";
        }

        if (inputForm.desc == "") {
            formError.desc = "Description must be Required !";
        }
        if (inputForm.category == "") {
            formError.category = "category must be Required !";
        }
        if (inputForm.type == "") {
            formError.type = "type must be Required !";
        }
        if (inputForm.year == "") {
            formError.year = "year must be Required !";
        }
        if (inputForm.image == "") {
            formError.image = "Image must be Required !";
        }

        setError(formError);
        return Object.keys(formError).length != 0;

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!fromVaildation()) {
            inputForm.id = Math.floor(Math.random() * 100000);
            dispatch(AddmoiveAsync(inputForm));
        }

    }
    useEffect(() => {
        if (isCreated) {
            navigate('/');
        }
    }, [isCreated])

    return (
        <>
            <section>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <div className="add-moive-form col-6">
                            <Form onSubmit={handlesubmit}>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6 text-black">Enter Name :</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter movie name" value={inputForm.name} onChange={handlechange} />
                                    {Error.name ? <span style={{ color: 'red' }}>{Error.name}</span> : ""}


                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Description :</Form.Label>
                                    <Form.Control type="text" name='desc' value={inputForm.desc} placeholder="Enter Description" onChange={handlechange} />
                                    {Error.desc ? <span style={{ color: 'red' }}>{Error.desc}</span> : ""}
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter moive Type :</Form.Label>
                                    <Form.Select name='type' onChange={handlechange}>
                                        <option>Category Type</option>
                                        {["hollywood", "tollywood", "wollywood"].map((v) => (
                                            <option key={v} value={v}>{v}</option>
                                        ))}
                                    </Form.Select>
                                    {Error.type ? <span style={{ color: 'red' }}>{Error.type}</span> : ""}
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter category :</Form.Label>
                                    <Form.Select name='category' onChange={handlechange}>
                                        <option value="">--secect category --</option>
                                        {["action", "drama", "comedy", "horror"].map((v) => (
                                            <option key={v} value={v}>{v}</option>
                                        ))}

                                    </Form.Select>
                                    {Error.category ? <span style={{ color: 'red' }}>{Error.category}</span> : ""}
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Release Year :</Form.Label>
                                    <Form.Control type="number" name='year' value={inputForm.year} placeholder="Enter Release year" onChange={handlechange} />
                                    {Error.year ? <span style={{ color: 'red' }}>{Error.year}</span> : ""}
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Image URL  :</Form.Label>
                                    <Form.Control type="text" name='image' value={inputForm.image} placeholder="Enter Image URL" onChange={handlechange} />
                                    {Error.image ? <span style={{ color: 'red' }}>{Error.image}</span> : ""}
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>

                        </div>
                    </Row>
                </Container>
            </section>


        </>
    )
}
export default Addmoive;