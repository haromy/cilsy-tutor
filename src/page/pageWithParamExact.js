import React from 'react';
import {
  Container
} from 'react-bootstrap';

const PageWithParams = (props) => {
  console.log(props.nama);
  const {
    match
  } = props;
  return (
    <Container>
      <div>exact</div>
    </Container>
  );
}

export default PageWithParams;