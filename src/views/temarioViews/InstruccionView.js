import React, { Component } from 'react'
import { CardBody, Col, Row, Spinner } from 'reactstrap'
import Diapositiva2video1 from '../../assets/img/s/Diapositiva2video1.mp4'
import ReactPlayer from 'react-player'

class InstruccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        {/* <CardHeader className="text-left">
          <h3>Instrucciones</h3>
        </CardHeader> */}
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
                <ReactPlayer
                playing={true}
                  width={400}
                  url={Diapositiva2video1}
                  style={{ cursor: "pointer" }}
                />
            </Col>
            <Col xs="4">
              <div className="slideInUp">
                <div className="globo ">
                  <p>
                  Hola soy Sergio y te guiare en el curso  “<b>Políticas de Captura Think</b>”<br />
                    ¡Comencemos!
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
export default InstruccionView
