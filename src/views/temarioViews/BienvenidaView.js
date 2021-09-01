import React, { Component } from 'react'
import { CardBody, CardHeader, Row, Col, Spinner } from 'reactstrap'
import 'animate.css';
import bienvenida from '../../assets/img/s/bienvenida.png'
import ReactAudioPlayer from 'react-audio-player';
import audio1 from '../../assets/img/Audios/diapositiva 1 audio 1.mp3'

class BienvenidaView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )
  render() {
    return (
      <div>
        <CardHeader className="text-center" >
          <h1>¡Bienvenid@! </h1>
        </CardHeader>
        <CardBody className="text-center">
          <Row className="centrado-fila">

            <Col xs="12">
              <img
                src={bienvenida}
                //style={{ width: 500 }}
                alt="bienvenida"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
              <div className="animated  bounceInLeft delay-1s">
                <h1 className="">POLÍTICAS DE CAPTURA THINK. <br />
                  (TODO EN MAYUSCULAS)</h1>
              </div>
              <ReactAudioPlayer
                src={audio1}
                autoPlay
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default BienvenidaView
