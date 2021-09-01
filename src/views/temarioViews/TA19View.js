import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader, } from 'reactstrap'
import diapositiva43video1 from '../../assets/img/s/diapositiva43video1.mp4'
import ReactPlayer from 'react-player';

class TA19View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )
  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left" style={{ paddingBottom: "0px" }}>
          <h5> AUTENTICACIÓN CASOS ATÍPICOS</h5>
        </CardHeader>
        <CardBody >
          <Row className="centrado-fila">
            <Col xs="3">
              <ReactPlayer
                playing={true}
                width={400}
                url={diapositiva43video1}
                style={{ cursor: "pointer" }}
              />
            </Col>
            <Col xs="5">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                    Recuerda que debemos
                    respetar las <b>políticas de captura</b>, además de aplicar el proceso de manera correcta en 
                    cada interacción.
                  </p>
                  <p>
                    El departamento de capacitación a creado este curso para resolver tus dudas, <b>¡tu papel es muy
                      importante!</b> Gracias por tu tiempo, ¡Hasta luego!
                  </p>
                </div>
              </div>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TA19View
