import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilDrop,cilApple,cilAddressBook,cilBlurCircular,cilCasino,cilEnvelopeLetter,cilPeople} from '@coreui/icons'

import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Produtos',
    to: '/theme/colors',
    icon: <CIcon icon={cilApple} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Na sala de Aula',
    to: '/theme/salaAula',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Projetos',
  },
  {
    component: CNavItem,
    name: 'Corte a Laser',
    to: '/theme/corteLaser',
    icon: <CIcon icon={cilBlurCircular} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Impressora 3D',
    to: '/theme/impressora',
    icon: <CIcon icon={cilCasino} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Empresa',
  },
  {
    component: CNavItem,
    name: 'Contatos',
    to: '/theme/contatos',
    icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Quem Somos',
    to: '/theme/quemsomos',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
]

export default _nav
