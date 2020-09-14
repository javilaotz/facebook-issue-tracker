import React from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import Results from './components/Results/Results';
import Result from './components/Result/Result';

import { connect } from 'react-redux';
import { fetchIssues } from './redux/actions';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Container>
        <SearchBox />
        <Switch>
          <Route exact path="/" component={Results} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  issues: state.issues.entries || false
});

export default connect(
  mapStateToProps,
  { fetchIssues }
)(App)
