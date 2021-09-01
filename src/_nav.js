export default {
  items: [
    {
      title: true,
      name: 'Temario',
      class: 'text-center',
    },
    {
      name: 'Inicio',
      icon: 'icon-home',
      url: '/temarioViews/BienvenidaView',
    },
    {
      name: 'Objetivos',
      icon: 'icon-speech',
      url: '/temarioViews/ObjetivoView',
    },
    {
      name: 'Instrución',
      icon: 'icon-tag',
      url: '/temarioViews/InstruccionView',
    },
    {
      name: 'Que es el.... objeciones',
      icon: 'icon-tag',
      children: [
        {
          name: 'Que es el  ...objeciones P > 1',
          url: '/temarioViews/TA1View',
          icon: 'icon-flag',
        },
        {
          name: 'Que es el  ...objeciones P > 2',
          url: '/temarioViews/TA2View',
          icon: 'icon-flag',
        },
        {
          name: 'Que es el  ...objeciones P > 3',
          url: '/temarioViews/TA3View',
          icon: 'icon-flag',
        },
        {
          name: 'Que es el  ...objeciones P > 4',
          url: '/temarioViews/TA4View',
          icon: 'icon-flag',
        },
      ],

    },

    {
      name: 'Habilidades... objeciones',
      icon: 'icon-tag',
      children: [
        {
          name: 'Habilidades... objeciones P > 1',
          url: '/temarioViews/TA5View',
          icon: 'icon-flag',
        },
        {
          name: 'Habilidades... objeciones P > 2',
          url: '/temarioViews/TA6View',
          icon: 'icon-flag',
        },
      ],

    },

    {
      name: 'Proceso de...objeciones',
      icon: 'icon-tag',
      children: [
        {
          name: 'Principales... clientes Safelite P > 1',
          url: '/temarioViews/TA7View',
          icon: 'icon-flag',
        },
        {
          name: 'Evaluación',
          url: '/temarioViews/TA8View',
          icon: 'icon-puzzle',
        },
        {
          name: 'Principales... clientes Safelite P > 2',
          url: '/temarioViews/TA9View',
          icon: 'icon-flag',
        },
      ],

    },
    {
      name: 'Principales... clientes Safelite',
      icon: 'icon-tag',
      children: [
        {
          name: 'Principales... clientes Safelite P > 1',
          url: '/temarioViews/TA10View',
          icon: 'icon-flag',
        },
        {
          name: 'Principales... clientes Safelite P > 2',
          url: '/temarioViews/TA11View',
          icon: 'icon-flag',
        },
        {
          name: 'Evaluación',
          url: '/temarioViews/TA12View',
          icon: 'icon-puzzle',
        },
      ],
      

    },
    {
      name: 'Despedida',
      url: '/temarioViews/TA13View',
      icon: 'icon-paper-plane',
    },
  ],
}
