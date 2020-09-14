import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const SearchBox = () => {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>is:issue </InputGroupText>
      </InputGroupAddon>
      <Input  placeholder="type any issue and press enter" />
    </InputGroup>
  )
}

export default SearchBox;
