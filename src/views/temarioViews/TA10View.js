import React, { Component } from 'react'
import {
  CardBody, Col, Row, Spinner, CardHeader,
  //Button, 
  Form, FormGroup, Label, Input
} from 'reactstrap'
import Modal1 from './components/modales'
import excelente from '../../assets/img/s/excelente.png'
import intentalodenuevo from '../../assets/img/s/intentalodenuevo.png'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../assets/img/Audios/diapositiva 16 audio 1.mp3'
import audio2 from '../../assets/img/Audios/intentalo de nuevo.mp3'
import audio3 from '../../assets/img/Audios/excelente.mp3'

import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class TA17View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )


  constructor(props) {
    super(props)
    this.Auth = new AuthService();
    this.state = {
      modal: false,

      acierto1: "",
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'casosAtipicos',


    }

    this.toggleM = this.toggleM.bind(this)
  }

  toggleM(modIndex) {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))

    this.setState({ modalIndex: modIndex })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state.evaluacion)
      alert('Se guardo la encuesta número ' + respuesta[0].id)
    } catch (err) {
      console.log('loggea si hay un error')
    }
  }

  dosFun() {
    this.onSave.bind(this);
    this.toggleM()

  }

  render() {
    return (
      <div className="animated fadeIn">
        <ReactAudioPlayer
          src={audio}
          autoPlay
        />
        <CardHeader className="text-left" style={{ paddingBottom: "0px" }}>
          <h5> POLÍTICAS DE CAPTURA THINK</h5>
        </CardHeader>
        <CardBody >
          <Row className="centrado-fila">
            <Col xs="12">
              <h1>2.  Puedes escribir en minúsculas los datos del suscriptor   </h1>
            </Col>

            <Col xs="4">
              <div>
                <Form>
                  <div>
                    <FormGroup
                      tag="fieldset"
                    >
                      <FormGroup check>
                        <div className="centrado-fil">


                          <div>
                            <Label check>
                              <Input
                                type="radio"
                                name="acierto1"
                                id="acierto1"
                                value="1"
                                onClick={() => this.toggleM(2)}
                                onChange={this.onChange.bind(this)}

                              />
                              A) Verdadero.
                            </Label>
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup check>
                        <div className="centrado-fil">
                          <div>
                            <Label check>
                              <Input
                                type="radio"
                                name="acierto1"
                                id="acierto1"
                                value="0"
                                onClick={() => this.toggleM(1)}
                                onChange={this.onChange.bind(this)}
                              />
                              B) Falso.
                            </Label>
                          </div>
                        </div>
                      </FormGroup>
                      {/* <FormGroup check>
                        <div className="centrado-fil">
                          <div>
                            <Label check>
                              <Input
                                type="radio"
                                name="acierto1"
                                id="acierto1"
                                value="0"
                                onClick={() => this.toggleM(3)}
                                onChange={this.onChange.bind(this)}
                              />
                              Guion medio.
                            </Label>
                          </div>
                        </div>
                      </FormGroup> */}
                    </FormGroup>
                  </div>
                  <div className="centrado-fila mt-3">
                    {/* <Button
                      color="primary"
                      onClick={this.onSave.bind(this)}
                    >
                      Enviar
                    </Button> */}
                  </div>
                </Form>
              </div>
              <div>
                {this.state.modal ? (
                  <Modal1
                    cerrar={() => this.toggleM()}
                    // title={
                    //   this.state.modalIndex === 1
                    //     ? '¡EXCELENTE!'
                    //     : this.state.modalIndex === 2
                    //       ? '¡INTENTALO DE NUEVO!'
                    //       : this.state.modalIndex === 3
                    //         ? '¡INTENTALO DE NUEVO!'
                    //         : null
                    // }

                    body={
                      this.state.modalIndex === 1 ? (
                        <div className="centrado-fila">
                          <ReactAudioPlayer
                            src={audio3}
                            autoPlay
                          />
                          <div className="centrado-fila">
                            <img
                              src={excelente}
                              style={{ width: 400 }}
                              alt="excelente"
                              className="img-fluid  animated  bounceInRight delay"
                            />
                          </div>
                        </div>

                      ) : this.state.modalIndex === 2 ? (
                        <div className="centrado-fila">
                          <ReactAudioPlayer
                            src={audio2}
                            autoPlay
                          />
                          <div className="centrado-fila">
                            <img
                              src={intentalodenuevo}
                              style={{ width: 400 }}
                              alt="intentalodenuevo"
                              className="img-fluid  animated  bounceInRight delay"
                            />
                          </div>
                        </div>
                      ) : this.state.modalIndex === 3 ? (
                        <div className="centrado-fila">
                          <ReactAudioPlayer
                            src={audio2}
                            autoPlay
                          />
                          <div className="centrado-fila">
                            <img
                              src={intentalodenuevo}
                              style={{ width: 400 }}
                              alt="intentalodenuevo"
                              className="img-fluid  animated  bounceInRight delay"
                            />
                          </div>
                        </div>
                      ) : null
                    }
                  />
                ) : null}
              </div>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA17View
