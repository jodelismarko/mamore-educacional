import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

import ReactImg from 'src/assets/images/react.jpg'
import ReactImg2 from 'src/assets/images/principal.jpg'
import ReactImg3 from 'src/assets/images/logo.jpg'
import { left } from '@popperjs/core'

const Colors = () => {
  return (
    <>
      <CRow>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sala de Aula</strong>
          </CCardHeader>
        </CCard>
      </CRow >
    </>
  )
}

export default Colors
