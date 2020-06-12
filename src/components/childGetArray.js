import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';

const ChildGetObject = (props) => {
  const {
    data
  } = props;
  return(
    <div>
      {
        data && data.map((singleData, index) => {
          return(
            // biasakan ketika looping array dan ada render
            // set key berdasarkan index
            <Row key={index}>
              <Col>{singleData.nama}</Col>
              <Col>{singleData.email}</Col>
            </Row>
          );
        })
      }
    </div>
  );
}

export default ChildGetObject;
