// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router';
// import { signOutuserAsync } from '../../Services/Action/Authentication';
// const Header = () => {
//     const { user } = useSelector(state => state.AuthReducer);
//     const dispatch = useDispatch();

//     const handleLogout = () => {
//         dispatch(signOutuserAsync());
//     }
//     return (
//         <>
//             <Navbar className="bg-body-tertiary">
//                 <Container>
//                     <Navbar.Brand href="/">Moive APP</Navbar.Brand>
//                     <Navbar.Toggle />

//                     <Navbar.Collapse className="justify-content-end">
//                         {user && (
//                             <div className="user-dropdown-content">
//                                 <p className="user-email">{user.email}</p>
//                                 <button className="btn logout-btn" onClick={handleLogout}>
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                         <Navbar.Text>

//                             {
//                                 user ? <Link to='/add' className='btn btn-primary'>Add Moive</Link> :
//                                     <Link to='/signIn' className='btn btn-primary'>Sign</Link>
//                             }


//                         </Navbar.Text>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     )
// }
// export default Header;
// Header.jsx
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';          // <-- use react-router-dom
import { signOutuserAsync } from '../../Services/Action/Authentication';
import './Header.css';                            // <-- import the CSS below

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
