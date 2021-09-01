import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../assets/img/Audios/diapositiva 11 audio 1.mp3'


class TA7View extends Component {
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
              <h1><b>PHONE (TELEFONO)</b></h1>
              <ul>
               <li>La longitud de este campo es de 10 posiciones.  </li>
               <li>Todos los números telefónicos deberán incluir su respectiva clave LADA. </li>
               <li>No se capturarán extensiones.</li>
              </ul>
              <h1><b>E-MAIL</b></h1>
              <ul>
                <li>Deberán solicitar la dirección de correo electrónico en todas las llamadas. </li>
              </ul>
              

            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default TA7View
