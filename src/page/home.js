import React, { Component } from 'react';
import {
  Container,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      listPokemon: []
    }
  }

  componentDidMount() {
    console.log('fired');
    axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'
    }).then((res) => {
      if(res && res.data) {
        this.setState({
          listPokemon: res.data.results
        })
      };
    })
  }

  render() {
    const {
      listPokemon
    } = this.state;
    console.log(listPokemon)
    return (
      <Container>
        <div>Home page</div>
        <Row>
          <Col md={4}  lg={4}>
            <Link to='/Login'>
              <Button>
                Login
              </Button>
            </Link>
          </Col>
          <Col md={4}  lg={4}>
            <Link to='/register'>
              <Button>
                Register
              </Button>
            </Link>
          </Col>
          <Col md={4}  lg={4}>
            <Link to='/page-data-object'>
              <Button>
                page object
              </Button>
            </Link>
          </Col>
          <Col md={4}  lg={4}>
            <Link to='/product/ini-product-semangka'>
              <Button>
                param ini-product-semangka
              </Button>
            </Link>
          </Col>
          <Col md={4} lg={4}>
            <Link to='/product/ini-product-mangga'>
              <Button>
                param ini-product-mangga
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col md={4} lg={4}>
            <Link to='/mata-uang/idr'>
              <Button>
                currency idr
              </Button>
            </Link>
          </Col>
          <Col md={4} lg={4}>
            <Link to='/mata-uang/usd'>
              <Button>
                currency usd
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          {
            listPokemon && listPokemon.map((el, index) => {
              return (
                <Col md={4} lg={4} key={index} style={{ margin: 5 }}>
                  <Link to={`/pokemon-detail/${el.name}`}>
                    <Button>
                      pokemon {el.name}
                    </Button>
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    );
  }
};

export default Home;
