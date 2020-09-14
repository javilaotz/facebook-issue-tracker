import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import { connect } from 'react-redux';
import { fetchIssues } from '../../redux/actions';

class Results extends Component {
  componentWillMount(){
    this.props.fetchIssues();
  }

  setListItems = (issues) => {
    return (
      <ListGroup>
        {issues.map(issue => {
          return (
            <ListGroupItem key={issue.id} className="justify-content-between">
                <Badge pill>{issue.comments}</Badge>
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
    const { search, issues, error, isFetching } = this.props;
    if(isFetching) return <div>Loading...</div>;

    return this.setListItems(issues);
  }
}

const mapStateToProps = state => ({
  search: state.search,
  issues: state.issues.entries,
  error: state.issues.error,
  isFetching: !state.issues.isFetched
});

export default connect(
  mapStateToProps, 
  { fetchIssues }
)(Results)