import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader, } from 'reactstrap'
import diapositiva12video1 from '../../assets/img/s/diapositiva12video1.mp4'
import ReactPlayer from 'react-player';


class TA8View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )
  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left" style={{ paddingBottom: "0px" }}>
          <h5> POLÍTICAS DE CAPTURA THINK</h5>
        </CardHeader>
        <CardBody >
          <Row className="centrado-fila">
            <Col xs="3">
              <ReactPlayer
                playing={true}
                width={400}
                url={diapositiva12video1}
              />
            </Col>
            <Col xs="4">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                    Bien ahora sabes cual es la manera correcta de capturar en think.
                  </p>
                  <p>A continuación realizaras una evaluación para reforzar lo aprendido ¡Éxito!</p>
                </div>
              </div>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br />
            </Col>
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA8View
