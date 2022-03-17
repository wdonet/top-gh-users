import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Col,
  Container,
  Image,
  Navbar,
  Row,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.github.com/users/';

const Person = props => {
  const { name } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (name) {
      fetch(`${BASE_URL}${name}`)
        .then(response => response.json())
        .then(({ avatar_url: avatar, location, name: fullName }) => setData({ avatar, location, fullName }))
    }
  }, name);

  const { avatar, location, fullName } = data || {};

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Breadcrumb>
              <Breadcrumb.Item href="/" className='backNavbar'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active >Person</Breadcrumb.Item>
            </Breadcrumb>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image thumbnail={true} src={avatar} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <div>{fullName}</div>
            <div>{location}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Person;
