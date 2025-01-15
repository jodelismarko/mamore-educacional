import React from 'react'

const Quemsomos = React.lazy(() => import('./views/pages/quemsomos/Quemsomos'))
const Colors = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/theme/quemsomos', name: 'Quemsomos', element: Quemsomos },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
]

export default routes
