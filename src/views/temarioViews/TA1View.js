import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner, CardHeader } from 'reactstrap'
import diapositiva4video1 from '../../assets/img/s/diapositiva4video1.mp4'
import ReactPlayer from 'react-player'

class TA1View extends Component {
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
            <Col xs="3">
              <ReactPlayer
                playing={true}
                width={300}
                url={diapositiva4video1}
              />
            </Col>
            <Col xs="4">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                  Las políticas para captura en Think nos indican que todos los campos se llenan siempre con  
                  <b> letras mayúsculas</b>. 
                  </p>
                  <p>A continuación se muestran los diferentes rubros para las 
                    <b>POLÍTICAS DE CAPTURA DE LA INFORMACIÓN DEL CLIENTE EN THINK</b>.</p>
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
export default TA1View
