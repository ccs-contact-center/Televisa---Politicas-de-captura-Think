import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio7 from '../../assets/img/Audios/diapositiva 9 audio 1.mp3'


class TA5View extends Component {
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
              <h1><b>ADDRESS 2 (NÚMERO EXTERIOR )</b></h1>
              <ul>
               <li>En este campo se captura el Número Exterior. </li>
               <li>Este campo es numérico, por lo que no debe contener letras. </li>
               <li>En caso de que la Dirección que proporcione el cliente no tenga un número exterior, este campo 
                 se dejará en blanco.</li>
              </ul>
              <h1 className="">
                <b>ADDRESS 3 (NÚMERO INTERIOR )</b>
              </h1>
              <ul>
                <li>En este campo se captura el Número Interior y toda información de Lotes, Manzanas, Supermanzanas,
                   Entradas, Edificios, Departamentos, Locales, etc. </li>
                <li>No se capturarán referencias, como “Puerta Verde” o “Junto a la tienda”. Excepto aquéllas que 
                  formen parte de la dirección.</li>
              </ul>

            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio7}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default TA5View
