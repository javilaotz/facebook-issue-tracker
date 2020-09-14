import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

import { connect } from 'react-redux';
import { searchIssues, filterIssues, fetchIssues } from '../../redux/actions';

const SearchBox = props => {

  const searchHandler = e => {
    props.searchIssues(e.target.value);
  }

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();

      if(props.issues && props.search){
        const filtered = props.issues.filter(issue => issue.title.toLowerCase().search(props.search.toLowerCase()) !== -1)
        props.filterIssues(filtered)
      }

      if(e.target.value === ''){
        props.fetchIssues();
      }
    }
  }

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>is:issue </InputGroupText>
      </InputGroupAddon>
      <Input onKeyUp={handleKeyPress} onChange={searchHandler} value={props.search} placeholder="type any issue and press enter" />
    </InputGroup>
  )
} 

const mapStateToProps = state => ({
  search: state.search,
  issues: state.issues.entries
});

export default connect(
  mapStateToProps, 
  { searchIssues, filterIssues, fetchIssues }
)(SearchBox)
