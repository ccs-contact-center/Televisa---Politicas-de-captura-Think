import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio5 from '../../assets/img/Audios/diapositiva 7 audio 1.mp3'


class TA4aView extends Component {
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
              <h1><b>DIRECCIÓN</b></h1>
              <p>Para la Dirección existen los siguientes campos:</p>
              <ul>
                <li><b>Address 1</b>: Nombre de la Calle. (Campo alfanumérico)</li>
                <li><b>Address 2</b>: Número Exterior. (Campo numérico)</li>
                <li><b>Address 3</b>: Número Interior. (Campo alfanumérico)</li>
                <li><b>City</b>: Colonia</li>
                <li><b>County</b>: Delegación o Municipio</li>
                <li><b>Zip/Postal</b>: Código Postal (No se captura Apartado Postal)</li>
                <li><b>State</b>: Estado abreviado (Ejemplo: CDMX) </li>
              </ul>
              <p className="">
                <b>Ejemplos:</b>
              </p>
              <div className="centrado-fil">
                <div>
                  <ul>
                    <li><b>Address 1</b>: AMORES</li>
                    <li><b>Address 2</b>: 321</li>
                    <li><b>Address 3</b>:  PISO 3</li>
                    <li><b>City</b>: DEL VALLE</li>
                    <li><b>County</b>: BENITO JUAREZ</li>
                    <li><b>Zip/Postal</b>: 03103</li>
                    <li><b>State</b>: CDMX</li>
                  </ul>
                </div>

              </div>


            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio5}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default TA4aView
