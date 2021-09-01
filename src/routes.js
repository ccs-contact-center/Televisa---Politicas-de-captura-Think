import React from 'react';


const Inicio = React.lazy(() => import('./views/Inicio'));
const BienvenidaView = React.lazy(() => import('./views/temarioViews/BienvenidaView'));
const ObjetivoView = React.lazy(() => import('./views/temarioViews/ObjetivoView'));
const InstruccionView = React.lazy(() => import('./views/temarioViews/InstruccionView'));
const TA1View = React.lazy(() => import('./views/temarioViews/TA1View'));
const TA2View = React.lazy(() => import('./views/temarioViews/TA2View'));
const TA3View = React.lazy(() => import('./views/temarioViews/TA3View'));
const TA4View = React.lazy(() => import('./views/temarioViews/TA4View'));
const TA5View = React.lazy(() => import('./views/temarioViews/TA5View'));
const TA6View = React.lazy(() => import('./views/temarioViews/TA6View'));
const TA7View = React.lazy(() => import('./views/temarioViews/TA7View'));
const TA8View = React.lazy(() => import('./views/temarioViews/TA8View'));
const TA9View = React.lazy(() => import('./views/temarioViews/TA9View'));
const TA10View = React.lazy(() => import('./views/temarioViews/TA10View'));
const TA11View = React.lazy(() => import('./views/temarioViews/TA11View'));
const TA12View = React.lazy(() => import('./views/temarioViews/TA12View'));
const TA13View = React.lazy(() => import('./views/temarioViews/TA13View'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },
  { path: '/temarioViews/ObjetivoView', name: 'Objetivo', component: ObjetivoView },
  { path: '/temarioViews/InstruccionView', name: 'Instrucción', component: InstruccionView },
  { path: '/temarioViews/TA1View', name: '1.1 Que es el vencimiento o  manejo de objeciones P > 1', component: TA1View },
  { path: '/temarioViews/TA2View', name: '1.1 Que es el vencimiento o  manejo de objeciones P > 2', component: TA2View },
  { path: '/temarioViews/TA3View', name: '1.1 Que es el vencimiento o  manejo de objeciones P > 3', component: TA3View },
  { path: '/temarioViews/TA4View', name: '1.1 Que es el vencimiento o  manejo de objeciones P > 4', component: TA4View },

  { path: '/temarioViews/TA5View', name: '1.2  Habilidades para el vencimiento  de objeciones P > 1', component: TA5View },
  { path: '/temarioViews/TA6View', name: '1.2  Habilidades para el vencimiento  de objeciones P > 2', component: TA6View },

  { path: '/temarioViews/TA7View', name: '1.3 Proceso de vencimiento de objeciones P > 1', component: TA7View },
  { path: '/temarioViews/TA8View', name: 'Evaluación 1', component: TA8View },
  { path: '/temarioViews/TA9View', name: '1.3 Proceso de vencimiento de objeciones P > 2', component: TA9View },

  { path: '/temarioViews/TA10View', name: '1.4 Principales escenarios  de objeciones clientes Safelite P > 1', component: TA10View },
  { path: '/temarioViews/TA11View', name: '1.4 Principales escenarios  de objeciones clientes Safelite P > 2', component: TA11View },
  { path: '/temarioViews/TA12View', name: 'Evaluación 2', component: TA12View },
  { path: '/temarioViews/TA13View', name: 'Despedida', component: TA13View },

];


export default routes;
