import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row,Spinner } from 'reactstrap'

class IndiceView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Indice</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
           
            <Col xs="12" >
              <h2 className="text-justify ">
                <ul>
                  <li>1.1 Que es el vencimiento o  manejo de objeciones.</li>
                  <li>1.2  Habilidades para e vencimiento  de objeciones.</li>
                  <li>1.3 Proceso de vencimiento de objeciones. </li>
                  <li>1.4 Principales escenarios  de objeciones clientes Safelite.</li>
                </ul>
              </h2>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default IndiceView
