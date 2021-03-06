import React, { Component } from "react";

import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import md5 from "md5";
import AuthService from "../services/AuthService";
import API_CCS from "../services/API_CCS";
import logo from "../assets/img/brand/logo.png";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.requestAvatar = this.requestAvatar.bind(this);
    this.Auth = new AuthService();
    this.API_CCS = new API_CCS();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.Auth.login(this.state.username, md5(this.state.password))

      .then(res => {
        var campaniaData = res.recordset[0].campania;

        this.setState({ campaign: campaniaData }, function() {
          this.requestAvatar()
            .then(res => {
              localStorage.removeItem("avatar");
              localStorage.setItem("avatar", res[0].avatar);
            })
            .catch(err => console.log(err));
        });

        this.props.history.replace("/Inicio");
      })
      .catch(err => {
        MySwal.fire({
          title: "Error al Iniciar Sesión",
          text:
            "Usuario o contraseña invalidos, por favor intenta de nuevo (" +
            err +
            ")",
          type: "error",
          confirmButtonColor: "#C00327",
          allowOutsideClick: true
        });

        this.setState({ username: "", password: "" });
      });
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  UNSAFE_componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/Inicio");
  }

  requestAvatar = async () => {
    const response = await this.API_CCS.getCampaignAvatar(this.state.campaign);
    return response;
  };

  render() {
    return (
      <div className="app flex-row align-items-center" id="bg">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleFormSubmit} className="text-center">
                    <img src={logo} alt="Logo CCS" style={{ width: "300px" }} />
                      <h1>Login</h1>
                      <p className="text-muted">Ingresa a tu Cuenta</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                          id="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          id="password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button
                            color="primary"
                            className="px-4"
                            disabled={!this.validateForm()}
                            type="submit"
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
