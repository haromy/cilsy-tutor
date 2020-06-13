import React from 'react';
import {
  Container
} from 'react-bootstrap';

const PageWithParams = (props) => {
  // destructure props
  const { match, location } = props;

  // destructure params
  const {
    params
  } = match;

  // destructure location
  const {
    state
  } = location;

  return (
    <Container>
      <div>{params.nama}</div>
      <div>Nama buah : {state && state.nama}</div>
      <div>Total : {state && state.total}</div>
      <div>harga : {state && state.harga}</div>
    </Container>
  );
}

export default PageWithParams;