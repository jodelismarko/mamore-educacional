import React, { useState } from 'react'

import {
  CButton,
  CAvatar,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCard,
  CDropdown,
  CDropdownToggle,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CFormInput, CInputGroup, CInputGroupText
} from '@coreui/react'

import avatar2 from '../../assets/images/avatars/2.jpg'
import avatar3 from '../../assets/images/avatars/3.jpg'
import avatar4 from '../../assets/images/avatars/4.jpg'
import avatar5 from '../../assets/images/avatars/5.jpg'
import carrinho from '../../assets/images/avatars/1.jpg'


const AppHeaderDropdown = () => {
  const [visible, setVisible] = useState(false)


  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <CAvatar src={carrinho} size="md" onClick={() => setVisible(true)} />
        </CDropdownToggle>
      </CDropdown>

      <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader className="justify-content-md-end">
          <COffcanvasTitle>Lista de compra</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>

        <CCard >
          <CRow className="g-0">
            <CCol md={2}>
              <CCardImage src={avatar2} />
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CCardTitle>Primeiro Produto</CCardTitle>
              </CCardBody>
            </CCol>
            <CCol md={4}>
              <CCardBody>
                <CInputGroup >
                  <CFormInput
                    placeholder="1"
                  />
                  <CButton type="button" color="primary" variant="outline" id="button-addon2">
                    +
                  </CButton>
                </CInputGroup>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
        <CCard >
          <CRow className="g-0">
            <CCol md={2}>
              <CCardImage src={avatar3} />
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CCardTitle>Segundo Produto</CCardTitle>
              </CCardBody>
            </CCol>
            <CCol md={4}>
              <CCardBody>
                <CInputGroup >
                  <CFormInput
                    placeholder="1"
                  />
                  <CButton type="button" color="primary" variant="outline" id="button-addon2">
                    +
                  </CButton>
                </CInputGroup>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
        <CCard >
          <CRow className="g-0">
            <CCol md={2}>
              <CCardImage src={avatar4} />
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CCardTitle>Terceiro Produto</CCardTitle>
              </CCardBody>
            </CCol>
            <CCol md={4}>
              <CCardBody>
                <CInputGroup >
                  <CFormInput
                    placeholder="1"
                  />
                  <CButton type="button" color="primary" variant="outline" id="button-addon2">
                    +
                  </CButton>
                </CInputGroup>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
        <CCard >
          <CRow className="g-0">
            <CCol md={2}>
              <CCardImage src={avatar5} />
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CCardTitle>Quarto Produto</CCardTitle>
              </CCardBody>
            </CCol>
            <CCol md={4}>
              <CCardBody>
                <CInputGroup >
                  <CFormInput
                    placeholder="1"
                  />
                  <CButton type="button" color="primary" variant="outline" id="button-addon2">
                    +
                  </CButton>
                </CInputGroup>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>

        <COffcanvasBody>
          <CFormInput
            id="floatingInput"
            floatingClassName="mb-3"
            floatingLabel="Nome"
            placeholder="Nome Completo"
          />
          <CFormInput
            type="email"
            id="floatingInput"
            floatingClassName="mb-3"
            floatingLabel="E-mail"
            placeholder="name@example.com"
          />
          <CFormInput
            id="floatingTelefone"
            floatingLabel="Telefone"
            placeholder="Telefone"
          />
        </COffcanvasBody>
          <CButton color="primary">Solicitar Or&ccedil;amento</CButton>
      </COffcanvas>
    </>

  )
}

export default AppHeaderDropdown
