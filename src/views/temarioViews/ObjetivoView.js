import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player';
import audio2 from '../../assets/img/Audios/diapositiva 3 audio 1.mp3'


class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )


  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>OBJETIVOS DEL CURSO.</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" className="text-justify">
              <p>
                <b>Conocerás</b> Conocerás las políticas para la captura correcta en el aplicativo de Think y
                nuevos además de como identificar cada rubro a capturar.
              </p>
              <p>
                <b>Analizaras</b> cuales son los puntos esenciales dentro de las políticas de captura en Think y nuevos.
              </p>
              <p>
                <b>Aplicaras</b> los conocimilos conocimientos adquiridos y proceso correcto de captura de acuerdo
                con las políticas de Think.
              </p>
            </Col>
          </Row>
          <ReactAudioPlayer
            src={audio2}
            autoPlay
          />
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
