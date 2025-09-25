import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './TeamChef.css'

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const TeamChef = () => {

    let TeamChefobj = [
        {
            "img": "/src/image/team-1.jpg",
            "Name": "Angel Juliya",
            "chef": "Senior Chef"
        }
        , {
            "img": "/src/image/team-2.jpg",
            "Name": "Morrish Khan",
            "chef": "Chef of Head"
        }
        , {
            "img": "/src/image/team-3.jpg",
            "Name": "Willium John",
            "chef": "Junior Chef"
        }
        , {
            "img": "/src/image/team-4.jpg",
            "Name": "Millana kamal",
            "chef": "Assistant Chef"
        }
        , {
            "img": "/src/image/team-5.jpg",
            "Name": "Robert Smith",
            "chef": "Grilled Chef"
        }
        , {
            "img": "/src/image/team-6.jpg",
            "Name": "Ninan Michal",
            "chef": "Roast Chef"
        }
    ]

    return (
        <>
            <section className='TeamChef-section'>
                <Container>
                    <Row>
                        {TeamChefobj.map((v, i) => {
                            return (
                                <>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className='Team-chef'>
                                            <div className="chef-image">
                                                <img src={v.img}></img>
                                                <div className='social-icons'>
                                                    <FaFacebookF className='icon' />
                                                    <FaTwitter className='icon' />
                                                    <FaInstagram className='icon' />
                                                </div>

                                            </div>
                                            <div className="chef-content">
                                                <h3>{v.Name}</h3>
                                                <p>{v.chef}</p>
                                                
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TeamChef;