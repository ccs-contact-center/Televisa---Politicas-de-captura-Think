import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio3 from '../../assets/img/Audios/diapositiva 5 audio 1.mp3'

class TA2View extends Component {
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
              <h1><b>NOMBRE (FIRST NAME)</b></h1>
              <ul>
                <li>Este campo tiene una longitud de 40 posiciones.</li>
                <li>En este campo se capturarán el o los nombres del cliente. </li>
                <li>Este campo es alfabético (A-Z).</li>
                <li>No utilizar “/” para separar nombres.</li>
                <li>Siempre deberá haber información en este campo.</li>
                <li>En caso de que el nombre exceda esta longitud, hay que truncarlo, es decir, no hay que abreviar 
                  los nombres. De esta forma podremos tener una estandarización en la entrada de nombres.</li>
                <li>La captura de dos o más nombres de distinto genero (masculino/femenino), no deberá ser separada 
                  por ninguna conjunción (Y, E). </li>
              </ul>
             <p><b>Ejemplos:</b></p>
             <ul>
               <li>MANUEL BARBARA</li>
               <li>BLANCA IVAN</li>
               <li>JUAN LETICIA MIGUEL</li>
             </ul>
            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio3}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default TA2View
