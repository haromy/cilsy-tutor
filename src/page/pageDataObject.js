import React, { Component } from 'react';
import {
  Container,
} from 'react-bootstrap';
import ChildGetObject from '../components/childGetObject';
import ChildGetArray from '../components/childGetArray';

class DataObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectData: {
        a: 1,
        b: 2,
        c: 3,
      },
      arrayData: [
        { nama:'john doe 1', email:'john.doe1@example.com' },
        { nama:'john doe 2', email:'john.doe2@example.com' },
        { nama:'john doe 3', email:'john.doe3@example.com' },
        { nama:'john doe 4', email:'john.doe4@example.com' },
        { nama:'john doe 5', email:'john.doe5@example.com' },
        { nama:'john doe 6', email:'john.doe6@example.com' }
      ]
    }
  }

  render() {
    // ini fungsi destructur data
    // biasakan seperti ini
    // karena nantinya di dunia kerja ada penggunaan eslint
    // eslint adalah code reviewer
    const {
      objectData,
      arrayData
    } = this.state;
    return(
      <Container>
        <ChildGetObject
          data={objectData}
        />
        <ChildGetArray
          data={arrayData}
        />
      </Container>
    )
  }
}

export default DataObject;