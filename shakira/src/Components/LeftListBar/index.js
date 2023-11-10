import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import axios from 'axios';
import { BsFillXCircleFill } from 'react-icons/bs';

const LeftListBarComponent = ({ selectedGenres, setSelectedGenres, genres, setGenres, type, setPage }) => {
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const GetDataList = async () => {
        const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
        setGenres(genres);
    };

    useEffect(() => {
        GetDataList();
        return () => {
            setGenres([]);
        };
        //eslint-disable-next-line
    }, []);

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };
    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };

    return (
        <div className="container">
            <Row>
                <Col>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {genres && genres.length > 0 ? (
                                genres.map((item) => {
                                    return (
                                        <Dropdown.Item key={item.id} onClick={() => handleAdd(item)}>
                                            {item.name}
                                        </Dropdown.Item>
                                    );
                                })
                            ) : (
                                <Dropdown.Item disabled>Loading content...</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col>
                    <aside className="asideBar">
                        <h3> </h3>
                        <ListGroup>
                            {selectedGenres &&
                                selectedGenres.map((item) => {
                                    return (
                                        <ListGroup.Item className="selected" key={`${item.id}newtag`}>
                                            {item.name}
                                            <i onClick={() => handleRemove(item)}>
                                                <BsFillXCircleFill />
                                            </i>
                                        </ListGroup.Item>
                                    );
                                })}
                        </ListGroup>
                    </aside>
                </Col>
            </Row>
        </div>
    );
};

export default LeftListBarComponent;
