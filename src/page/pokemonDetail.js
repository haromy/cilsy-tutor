import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
} from 'react-bootstrap';

import axios from 'axios';

const PokemonDetail = (props) => {
  const {
    match,
    history,
  } = props;

  const [nama, setNama] = useState('');
  const [baseExperience, setBaseExperience] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if(match.params.namapokemon) {
      console.log(match.params.namapokemon);
      axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${match.params.namapokemon}`,
      }).then((res) => {
        console.log(res);
        if(res && res.data) {
          setNama(res.data.name);
          setBaseExperience(res.data.base_experience);
          setImage(res.data.sprites.front_default);
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
      <div>nama pokemon: {nama}</div>
      <div>baseExperience: {baseExperience}</div>
      <div>gambar:</div>
      <img style={{ width: 200, height: 'auto', borderWidth: 1}} alt="bendera" src={image} />
    </Container>
  );
}

export default PokemonDetail;