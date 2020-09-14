import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

import { connect } from 'react-redux';
import { searchIssues } from '../../redux/actions';

const SearchBox = props => {
  const searchHandler = e => {
    props.searchIssues(e.target.value);
  }

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>is:issue </InputGroupText>
      </InputGroupAddon>
      <Input onChange={searchHandler} value={props.search} placeholder="type any issue and press enter" />
    </InputGroup>
  )
} 

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps, 
  { searchIssues }
)(SearchBox)
