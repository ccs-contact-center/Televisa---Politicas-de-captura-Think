import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio4 from '../../assets/img/Audios/diapositiva 6 audio 1.mp3'


class TA3View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left " style={{ paddingBottom: "0px" }}>
        <h5> POLÍTICAS DE CAPTURA THINK</h5>
        </CardHeader>
        <CardBody >
          <Row className="centrado-fila">
           
            <Col xs="12">
              <h1><b>APELLIDOS PATERNO/MATERNO (LAST NAME)</b></h1>
              <ul>
                <li>Este campo tiene una longitud de 40 posiciones.</li>
                <li>En este campo se capturarán los apellidos del cliente. </li>
                <li>Dado que en Think no existe un campo para el apellido materno y otro para el apellido 
                  paterno, en este campo se encuentran ambos apellidos separados por una diagonal “/”</li>
                  <li>No hay que agregar espacios antes o después de la diagonal.</li>
              </ul>
              <p className="">
                <b>Ejemplos:</b>
              </p>
              <ul>
                <li>AGUILAR/GASCA</li>
                <li>HERNANDEZ/JUAREZ</li>
                <li>JIMENEZ/OLVERA</li>
              </ul>

            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio4}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default TA3View
