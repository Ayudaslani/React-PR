import './addreview.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { GetstrorageData, Setstoragedata } from '../services/storage';
import './Reviewcard.css'

const Addreview = () => {
    const initalstate = {
        id: "",
        name: "",
        postion: "",
        companyname: "",
        rating: "",
        desc: "",
        image: ""
    }


    const [inputform, setinputform] = useState(initalstate);
    const [showdata, setshowdata] = useState([]);
    const [error, seterror] = useState({});

    useEffect(() => {
        let data = GetstrorageData();
        setshowdata(data)

    }, []);
    const handlechange = (e) => {
        const { name, value } = e.target;
        setinputform({ ...inputform, [name]: value });
    }

    const fromValidation = () => {
        const Formerror = {};

        if (inputform.name == "") {
            Formerror.name = "Name Is Not Empty !"
        }
        if (inputform.postion == "") {
            Formerror.postion = "Postion is Not Empty !";
        }
        if (inputform.companyname == "") {
            Formerror.companyname = "Company name is Required !";
        }
        if (inputform.rating == "") {
            Formerror.rating = "Rating is Must Be Required !";
        }

        if (inputform.desc == "") {
            Formerror.desc = "descripiton  is Must Be Required !";
        }
        if (inputform.image == "") {
            Formerror.image = "Image is Must Be Required !";
        }

        seterror(Formerror);

        return Object.keys(Formerror).length != 0;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fromValidation()) {
            inputform.id = Math.floor(Math.random() * 100000);
            let oldData = GetstrorageData();
            oldData.push(inputform);
            Setstoragedata(oldData);
            setshowdata(oldData)
            setinputform(initalstate);
        }
    }

    return (
        <>

            <h3 align="center" className='p-4'> Write a Review & Discover Others</h3>
            <div className='d-flex justify-content-center addreivew'>
                <Form className='col-10 col-lg-5' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="name" name="name" value={inputform.name} placeholder="Enter name" onChange={handlechange} />
                        {error.name ? <span>{error.name}</span> : ""}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Postion</Form.Label>
                        <Form.Control type="text" name='postion' value={inputform.postion} onChange={handlechange} placeholder="Enter Postion" />
                        {error.postion ? <span>{error.postion}</span> : ""}

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" name='companyname' value={inputform.companyname} onChange={handlechange} placeholder="Enter Company Name" />
                        {error.companyname ? <span>{error.companyname}</span> : ""}

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>rating</Form.Label>
                        <Form.Control type="number" name='rating' value={inputform.rating} onChange={handlechange} placeholder="Enter rating" />
                        {error.rating ? <span>{error.rating}</span> : ""}

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='desc' value={inputform.desc} onChange={handlechange} placeholder="Enter description" />
                        {error.desc ? <span>{error.desc}</span> : ""}

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name='image' value={inputform.image} onChange={handlechange} placeholder="Enter Image URL" />
                        {error.image ? <span>{error.image}</span> : ""}

                    </Form.Group>
                    <Button className='col-12'  type='submit' >Submit</Button>
                </Form>
            </div>
            <div className="container">
                <div className="row">
                    {
                        showdata.map((v, i) => {
                            return (
                                <>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card-wrapper">
                                            <div className="card">
                                                <div className="profile">
                                                    <div className="profile-icon"><img src={v.image} className='profile-img'></img></div>
                                                    <div className="profile-info">
                                                        <h3>{v.name}</h3>
                                                        <p>{v.postion}</p>
                                                    </div>
                                                </div>
                                                <div className="stars">  {"★".repeat(v.rating) + "☆".repeat(5 - v.rating)}</div>
                                                <p className="review">
                                                    <p>{v.companyname}</p>
                                                    <p>{v.desc}</p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}
export default Addreview;