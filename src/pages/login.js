import React, { Component } from "react"
import styled from "styled-components"

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Logo>Compcard</Logo>
        <InputContainer>
          <Title>LOG IN</Title>
          <Label>Email</Label>
          <Input />
          <Label>Password</Label>
          <Input />
          <Button type="submit">Submit</Button>
        </InputContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  height: 640px;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 60px;
`
const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
const Logo = styled.h1``
const Title = styled.h3``
const Input = styled.input`
  border: 1px solid #000;
  height: 35px;
  width: 200px;
`
const Label = styled.p`
  padding-top: 10px;
  margin-top: 10px;
`
const Button = styled.button`
  margin-top: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  height: 35px;
  width: 150px;
`
