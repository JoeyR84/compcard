import React, { Component } from "react"
import styled from "styled-components"

import RouteListItem from "./routeListItem"
import { routes } from "../../dummyRoutes"

export default class RouteList extends Component {
  render() {
    return (
      <Container>
        {routes.map(item => {
          return (
            <RouteListItem
              label={item.label}
              points={item.points}
              completed={item.completed}
              title={item.title}
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
