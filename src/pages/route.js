import React, { Component } from "react"
import Layout from "../components/layout"
import qrCode from "../images/qrCode.png"
import styled from "styled-components"
import { navigate } from "@reach/router"

export default class Route extends Component {
  state = {
    attempts: 0,
  }
  render() {
    return (
      <Layout>
        <Container>
          {console.log(this.props.location.state.props)}
          <h1>{this.props.location.state.props.title}</h1>
          <QRCode src={qrCode} />
          <SubContainer>
            <SubTitle>Attempts: </SubTitle>
            <Decrement />
            <Count>{this.state.attempts}</Count>
            <Increment />
          </SubContainer>
          <SubContainer>
            <SubTitle>Signatures: </SubTitle>
            <Increment />
            <Increment />
          </SubContainer>
          <Submit
            onClick={() => {
              navigate("/")
            }}
          >
            Submit
          </Submit>
        </Container>
      </Layout>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  flex-direction: column;
`
const QRCode = styled.img`
  height: 150px;
  width: 150px;
`
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`
const SubTitle = styled.h3`
  padding-right: 40px;
`
const Increment = styled.div`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 25px;
`
const Decrement = styled.div`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 25px;
`
const Count = styled.h3`
  padding-left: 20px;
  padding-right: 20px;
`
const Submit = styled.div`
  width: 80%;
  height: 50px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 5px;
  margin-top: 40px;
`
