import { useEffect, useState } from "react";
import {  Form, } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CreateUserAsync } from "../../Services/Action/Authentication";


const SignUp = () => {
    const dispatch = useDispatch();
    const { errMsg , iscreated } = useSelector(state => state.AuthReducer);
    const navigate = useNavigate();
    const [InputForm, setInputForm] = useState({
        email: "",
        password: ""
    })
    console.log("outside",iscreated);
    
    const handlechange = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...InputForm,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateUserAsync(InputForm));

    }
    useEffect(() => {
        console.log(iscreated);
        
        if (iscreated) {
            navigate('/signIn')
        }
    }, [iscreated])
    return (
        <>
            {errMsg ? <p>{errMsg}</p> : ""}
            

            <section className="py-5 signin-section">
                <div className="container">
                    <div className="auth-card row mx-auto align-items-center">
                        
                        <div className="col-12 col-md-6">
                            <div className="form-panel">
                                <h2 className="form-title">Sign UP</h2>

                                <Form onSubmit={handleSubmit} className="signin-form fullwidth-form">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="form-label w-100">Enter Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Email"
                                            name="email"
                                            onChange={handlechange}
                                            value={InputForm.email}
                                        />
                                        {Error.email && <span className="error">{Error.email}</span>}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="form-label w-100">Enter Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            onChange={handlechange}
                                            value={InputForm.password}
                                        />
                                        {Error.password && <span className="error">{Error.password}</span>}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="checkbox-wrap">
                                                <input type="checkbox" id="remember" />
                                                <label htmlFor="remember" className="ms-2">Remember me</label>
                                            </div>
                                        </div>

                                        <div className="d-grid mb-3">
                                            <button type="submit" className="btn btn-primary btn-main w-100">Signup</button>
                                        </div>

                                        <div className="text-center small mb-3">
                                            <p className="mb-1">
                                               Already  a Account ? <Link to={'/SignIn'}>SignIN</Link>
                                            </p>
                                        </div>


                                       
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
export default SignUp;