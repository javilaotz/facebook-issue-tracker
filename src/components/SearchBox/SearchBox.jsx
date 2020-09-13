import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

export default function SearchBox() {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>is:issue </InputGroupText>
      </InputGroupAddon>
      <Input placeholder="type any issue and press enter" />
    </InputGroup>
  )
}
