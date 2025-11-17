import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutuserAsync } from '../../Services/Action/Authentication';
import './Header.css';
import { setSearchText } from '../../Services/Action/Action';


const Header = () => {
    const { user } = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(signOutuserAsync());
    }

    return (
        <Navbar className="app-navbar" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand">
                    Moive <span className="brand-accent">APP</span>
                </Navbar.Brand>



                <Navbar.Toggle aria-controls="main-nav" />

                <Navbar.Collapse id="main-nav" className="justify-content-end">
                    <form className="search-box me-3">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            onChange={(e) => dispatch(setSearchText(e.target.value))} 
                            
                        />
                    </form>
                    <div className="nav-actions">
                        {user ? (
                            <div className="user-block">
                                <div className="user-email">{user.email}</div>
                                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <div className="auth-links">
                                <Link to="/signin" className="btn btn-primary">Sign In</Link>

                            </div>
                        )}

                        {
                            user ?
                                <Link to="/add" className="btn btn-primary add-btn">Add Moive</Link> : ""
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
