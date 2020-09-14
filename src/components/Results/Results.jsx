import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import { connect } from 'react-redux';
import { fetchIssues } from '../../redux/actions';

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
                {issue.title}
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
    if(isFetching) return <div>Loading...</div>;
    if(filtered) return this.setListItems(filtered);
    return this.setListItems(issues);
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