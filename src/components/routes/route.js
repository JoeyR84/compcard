import React, { Component } from "react"
import styled from "styled-components"

export default class route extends Component {
  render() {
    return (
      <Container>
        <Label>{this.props.label}</Label>
        <Points>{this.props.points}</Points>
        <Icon />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #000;
  justify-content: space-between;
  align-items: center;
`
const Label = styled.h2`
  padding-left: 15px;
`
const Points = styled.h2``
const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background-color: #000;
`
