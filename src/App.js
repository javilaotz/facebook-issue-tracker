import React from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import Result from './components/Result/Result';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Container>        
        <Switch>
          <Route exact path="/" component={Results} />
          <Route path="/result" component={Result} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
