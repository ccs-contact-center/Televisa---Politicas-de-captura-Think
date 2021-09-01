import React, { Component } from 'react'
import { CardHeader,Spinner} from 'reactstrap'

class Header extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left" style={{paddingBottom:"0px"}}>
          <h5> GESTION DE VANTAS, VENCIMIENTO DE OBJECIONES.</h5>
          <h5> &nbsp;&nbsp;-1.1 Que es el vencimiento o  manejo de objeciones.</h5>
        </CardHeader>
      </div>
    )
  }
}



export default Header;