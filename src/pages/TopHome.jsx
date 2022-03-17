import React from 'react';
import {
  Button,
  Container,
  Navbar,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const top5 = ['GrahamCampbell','fabpot','weierophinney','rkh','josh'];

const TopHome = props => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>Top 5 GitHub Users</h1>
      <div>Tap the username to see more information</div>
      {top5.map((user, index) => (
        <Button key={index} variant='primary' onClick={() => navigate(`/person/${user}`)}>{user}</Button>
      ))}
    </>
  );
}

export default TopHome;
