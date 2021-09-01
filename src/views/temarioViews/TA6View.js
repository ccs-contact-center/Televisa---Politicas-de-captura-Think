import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio8 from '../../assets/img/Audios/diapositiva 10 audio 1.mp3'


class TA6View extends Component {
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
              <h1><b>CITY (COLONIA)</b></h1>
              <ul>
               <li>La longitud de este campo es de 25 posiciones.  </li>
               <li>No deberá capturarse ninguna información que no corresponda al contenido de cada campo. </li>
               <li>No se permitirán apartados postales, zonas militares, plazas comerciales, y mercados.</li>
               <li>No se permitirán domicilios conocidos, carreteras o kilómetros sin especificar.</li>
              </ul>
              

            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio8}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default TA6View
