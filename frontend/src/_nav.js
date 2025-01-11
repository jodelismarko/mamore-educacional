import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilDrop} from '@coreui/icons'
import { CNavItem,CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Produtos',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Na sala de Aula',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Projetos',
  },
  {
    component: CNavItem,
    name: 'Corte a Laser',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Impressora 3D',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Empresa',
  },
  {
    component: CNavItem,
    name: 'Contatos',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Quem Somos',
    to: '/theme/Quemsomos',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
]

export default _nav
