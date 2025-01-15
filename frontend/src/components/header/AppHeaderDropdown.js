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
  CContainer,
  CCard,
  CDropdown,
  CDropdownToggle,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  CCardFooter,
  COffcanvasHeader,
  CFormCheck,
  CForm,
  CFormLabel,
  CFormSelect,
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
        <COffcanvasHeader className="justify-content-md-between">
          <COffcanvasTitle>Lista de produtos</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>

        <CContainer style={{padding:5}}>
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
        </CContainer>

          <CContainer style={{ paddingRight: 3, paddingLeft: 5, paddingTop: 50, paddingBottom: 30 }} >
            <CForm className="row gy-2 gx-3 align-items-center">
              <CCol sm={8}>
                <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                  Nome
                </CFormLabel>
                <CFormInput id="autoSizingInput" placeholder="Nome Completo" />
              </CCol>
              <CCol sm={4}>
                <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                  Telefone
                </CFormLabel>
                <CFormInput id="autoSizingInput" placeholder="(xx) xxxx-xxxx" />
              </CCol>
              <CCol sm={12}>
                <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
                  E-mail
                </CFormLabel>
                <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput id="autoSizingInputGroup" placeholder="E-mail" />
                </CInputGroup>
              </CCol>
            </CForm>
          </CContainer>


            <CContainer style={{width:'80%'}}>
              <CRow>
                <CButton onClick={() => setVisible(false)} color="primary" type="submit">Solicitar Or&ccedil;amento</CButton>
              </CRow>
            </CContainer>
      </COffcanvas>
    </>

  )
}

export default AppHeaderDropdown
