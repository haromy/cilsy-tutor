import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
} from 'react-bootstrap';

import axios from 'axios';

const PageWithParams = (props) => {
  const {
    match,
    history,
  } = props;

  const [nama, setNama] = useState('');
  const [ibukota, setIbuKota] = useState('');
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    if(match.params.name) {
      console.log(match.params.name);
      axios({
        method: 'GET',
        url: `https://restcountries.eu/rest/v2/currency/${match.params.name}`
      }).then((res) => {
        if(res && res.data) {
          const tempData = res.data[0];
          setNama(tempData.name);
          setIbuKota(tempData.capital);
          setFlag(tempData.flag);
        }
      })
    }
  }, [match]);

  return (
    <Container>
      <Button
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <div>mata uang: {match.params.name}</div>
      <div>nama negara: {nama}</div>
      <div>ibukota: {ibukota}</div>
      <div>bendera:</div>
      <img style={{ width: 200, height: 'auto', borderWidth: 1}} alt="bendera" src={flag} />
    </Container>
  );
}

export default PageWithParams;