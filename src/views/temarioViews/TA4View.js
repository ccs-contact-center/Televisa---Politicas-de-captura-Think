import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio6 from '../../assets/img/Audios/diapositiva 8 audio 1.mp3'


class TA4View extends Component {
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
              <h1><b>ADDRESS 1 (CALLE)</b></h1>
              <ul>
               <li>En este campo tiene que ir el nombre de la calle exclusivamente, sin número exterior ni número 
                 interior. </li>
               <li>La longitud de este campo es de 50 posiciones</li>
               <li>Para el Tipo de Vialidad hay que abreviarlo de acuerdo a SEPOMEX.</li>
               <li>No hay que abreviar el Nombre de la Vialidad.</li>
               <li>Utilizar solo caracteres alfanuméricos (A-Z) y (0-9)</li>
               <li>Solo se utilizará la palabra CALLE en la dirección cuando forme parte del nombre de la vialidad, 
                 como es el caso de las calles denominadas con números o con letras, Ejemplo: CALLE 45, CALLE B.</li>
              </ul>
              <p className="">
                <b>Ejemplos:</b>
              </p>
              <ul>
                <li>AMORES</li>
                <li>CALLE 45, CALLE B.</li>
                <li>BLV MANUEL AVILA CAMACHO</li>
              </ul>

            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio6}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default TA4View
