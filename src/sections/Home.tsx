import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home: React.FC = () => (
  <Container>
    <Jumbotron className="mt-5">
      <h1>
        CRA TypeScript Bootstrap Template{' '}
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </h1>
      <p>Ready to roll !</p>
    </Jumbotron>
  </Container>
)

export default Home
