import React, { Component } from "react"
import styled from "styled-components"
import { AUTH_TOKEN } from "../constants"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "@reach/router"

export default class Login extends Component {
  state = {
    login: true,
    email: "",
    password: "",
    name: "",
  }
  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    navigate("/")
  }
  // local storage is not ideal. change to another method.
  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  render() {
    const SIGNUP_MUTATION = gql`
      mutation SignupMutation(
        $email: String!
        $password: String!
        $name: String!
      ) {
        signup(email: $email, password: $password, name: $name) {
          token
        }
      }
    `
    const LOGIN_MUTATION = gql`
      mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `
    const { login, email, password, name } = this.state
    return (
      <Container>
        <Logo>Compcard</Logo>
        <InputContainer>
          <Title>LOG IN</Title>
          {!login && (
            <Input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your Name"
            />
          )}
          <Label>Email</Label>
          <Input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="example@mail.com"
          />
          <Label>Password</Label>
          <Input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="text"
            placeholder="Password"
          />
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <Button onClick={mutation}>
                {login ? "Login" : "Create Account"}
              </Button>
            )}
          </Mutation>
          <div onClick={() => this.setState({ login: !login })}>
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </InputContainer>
        {console.log(this.state)}
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
const InputContainer = styled.div`
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
const Button = styled.div`
  margin-top: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  height: 35px;
  width: 150px;
`
