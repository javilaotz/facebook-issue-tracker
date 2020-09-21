import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import { connect } from 'react-redux';
import { fetchIssues } from '../../redux/actions';
import SearchBox from '../SearchBox/SearchBox';

class Results extends Component {
  componentWillMount(){
    this.props.fetchIssues();
  }

  getStateColor = param => {
    switch (param) {
      case 'open':
        return 'success'
      
      case 'closed':
        return 'danger'
    
      default:
        return 'secondary'
    }
  }

  setListItems = (issues) => {
    return (
      <ListGroup>
        {issues.map(issue => {
          return (
            <ListGroupItem key={issue.id} className="justify-content-between">
                <Badge color={this.getStateColor(issue.state)} pill>{issue.state}</Badge>
                {' '}
                <Link to={`/result/${issue.number}`}>
                  {issue.title}
                </Link>
                {' '}
                <Badge pill>{issue.comments}</Badge>
            </ListGroupItem>
          )
        })}
      </ListGroup>
    )
  }

  render(){
    const { issues, filtered, isFetching } = this.props;
    if(isFetching) return (
      <>
        <SearchBox />
        <div>Loading...</div>
      </>
    );
    if(filtered) return (
      <>
        <SearchBox />
        {this.setListItems(filtered)}
      </>
    );
    return (
      <>
        <SearchBox />
        {this.setListItems(issues)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  issues: state.issues.entries,
  filtered: state.issues.filteredEntries,
  error: state.issues.error,
  isFetching: !state.issues.isFetched
});

export default connect(
  mapStateToProps, 
  { fetchIssues }
)(Results)