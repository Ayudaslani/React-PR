import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Header.css'
import { Link } from 'react-router';
const Header = () => {

    return (
        <>
            

            <section className='header-section'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <div className='col-4'>
                            <Link to={'/'}><img src='../src/Image/logo.png'  className='logo-image'></img></Link>
                        </div>
                        <div className='col-4'>
                            
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <Link to={'/Addmoive'} className='btn btn-add-moive btn-danger'>Add Moive</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Header;