import React from 'react';
import {
  Container
} from 'react-bootstrap';

const PageWithParams = (props) => {
  console.log(props);
  const {
    match
  } = props;
  return (
    <Container>
      <div>{match.params.nama}</div>
    </Container>
  );
}

export default PageWithParams;