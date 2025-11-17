import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteMoiveAsync, GetAllMoiveAsync } from '../../Services/Action/Action';
import { useNavigate } from 'react-router';

import './HomePage.css';
import Silder from '../Silder/Silder';


const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, moive, searchText } = useSelector((state) => state.ReducerData);
    const { user } = useSelector((state) => state.AuthReducer);

    useEffect(() => {
        dispatch(GetAllMoiveAsync());
    }, []);

    const handleDelete = (id) => {
        dispatch(DeleteMoiveAsync(id))
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    }
    const filteredMovies = moive?.filter((m) => {
        if (!searchText) return true;
        const name = (m.name || "").toLowerCase();
        return name.includes(searchText.toLowerCase().trim());
    });




    return (
        <>
            <div className='py-1'>
                <Silder></Silder>
            </div>

            <Container className="py-4">
                <h2 className="mb-4">Movie List</h2>

                {isLoading ? (
                    <h4>LOADING...</h4>
                ) : !moive || moive.length === 0 ? (
                    <h4>No Data Found</h4>
                ) : filteredMovies.length === 0 ? (
                    <h4>No movies match your search</h4>
                ) : (
                    <Row className="g-3">
                        {filteredMovies.map((v) => (
                            <Col key={v.id || v.name} xs={12} sm={6} md={4} lg={3}>
                                <Card className="h-100 shadow-sm">
                                    {v.image ? (
                                        <div style={{ height: 200, overflow: 'hidden' }}>
                                            <Card.Img
                                                variant="top"
                                                src={v.image}
                                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                alt={v.name}
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <small>No image</small>
                                        </div>
                                    )}

                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{v.name || 'Untitled'}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {v.type} • {v.year}
                                        </Card.Subtitle>
                                        <Card.Text className="flex-grow-1" style={{ maxHeight: 72, overflow: 'hidden' }}>
                                            {v.desc || 'No description available.'}
                                        </Card.Text>

                                        <div className="d-flex gap-2 mt-2">
                                            {user && (
                                                <div>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => handleEdit(v.id)}
                                                    >
                                                        Edit
                                                    </Button>{' '}
                                                    <Button
                                                        variant="danger"
                                                        size="sm"
                                                        onClick={() => handleDelete(v.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}

            </Container>
        </>
    );
};

export default HomePage;