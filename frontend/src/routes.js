import React from 'react'

const Quemsomos = React.lazy(() => import('./views/pages/quemsomos/Quemsomos'))
const SalaAula = React.lazy(() => import('./views/pages/salaAula/SalaAula'))
const CorteLaser = React.lazy(() => import('./views/pages/corteLaser/CorteLaser'))
const Impressora = React.lazy(() => import('./views/pages/impressora/Impressora'))
const Contatos = React.lazy(() => import('./views/pages/contatos/Contatos'))


const Colors = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/theme/quemsomos', name: 'Quemsomos', element: Quemsomos },
  { path: '/theme/salaAula', name: 'SalaAula', element: SalaAula },
  { path: '/theme/corteLaser', name: 'CorteLaser', element: CorteLaser },
  { path: '/theme/impressora', name: 'Impressora', element: Impressora },
  { path: '/theme/contatos', name: 'Contatos', element: Contatos },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
]

export default routes
