import React, { Component } from "react"
import styled from "styled-components"

import Route from "./route"
import { routes } from "../../dummyRoutes"

export default class RouteList extends Component {
  render() {
    return (
      <Container>
        {routes.map(item => {
          return (
            <Route
              label={item.label}
              points={item.points}
              completed={item.completed}
            />
          )
        })}
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
