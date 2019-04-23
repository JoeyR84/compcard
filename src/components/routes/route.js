import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

export default class route extends Component {
  render() {
    return (
      <Link
        to="route"
        state={{ props: this.props }}
        style={{
          textDecoration: "none",
          paddingBottom: 5,
        }}
      >
        <Container>
          <Label>{this.props.label}</Label>
          <Points>{this.props.points}</Points>
          <Icon />
        </Container>
      </Link>
    )
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`
const Label = styled.h2`
  padding-left: 15px;
  color: #000;
`
const Points = styled.h2`
  color: #000;
`
const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background-color: #000;
`
