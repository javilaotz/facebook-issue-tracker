import React from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import Results from './components/Results/Results';
import Result from './components/Result/Result';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SearchBox />
        <Results />
        <Result />
      </Container>
    </div>
  );
}

export default App;
