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
import carrinhoIcon from '../../assets/images/avatars/1.jpg'

import ListaCompras from '../produtos/listaProdutos/ListaCompras'

import { carrinho } from '../../services/CarrinhoCompras'


const Carrinho = () => {
  const [visible, setVisible] = useState(false)


  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <CAvatar src={carrinhoIcon} size="md" onClick={() => setVisible(true)} />
        </CDropdownToggle>
      </CDropdown>

      <COffcanvas placement="end" scroll={true} visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader className="justify-content-md-between">
          <COffcanvasTitle>Lista de produtos</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>

          <ListaCompras carrinho={carrinho} />


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


          <CContainer style={{ width: '80%' }}>
            <CRow>
              <CButton onClick={() => setVisible(false)} color="primary" type="submit">Solicitar Or&ccedil;amento</CButton>
            </CRow>
          </CContainer>
        </COffcanvasBody>


      </COffcanvas>
    </>

  )
}

export default Carrinho
