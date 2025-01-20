import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CButton,
  CAvatar,
  CRow,
  CCol,
  CCardText,
  CContainer,
  CDropdown,
  CDropdownToggle,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  CForm,
  CFormLabel,
  COffcanvasTitle,
  CFormInput, CInputGroup, CInputGroupText
} from '@coreui/react'


import carrinhoIcon from '../../assets/images/avatars/1.jpg'

import ListaCompras from '../produtos/listaProdutos/ListaCompras'

const Carrinho = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const caunt = useSelector((state) => state.caunt)

  const limparCarrinho = () => {
    dispatch({ type: 'limparCarrinho' })
  }


  return (
    <>
      <CDropdown variant="nav-item">
        <CCardText style={{ position: 'absolute', color: 'red', marginLeft: 3, paddingTop: 20, zIndex: 100 }}>{caunt > 0 ? caunt : ''}</CCardText>
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

          <ListaCompras />

          <div style={{ margin: -20, padding: 0, paddingTop: 50, paddingBottom: 30 }} >
            <CForm className="row gy-2 gx-3 align-items-center" style={{ margin: 0, padding: 0 }}>
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
          </div>
          <CContainer style={{ width: '80%' }}>
            <CRow>
              <CButton onClick={() => {setVisible(false), limparCarrinho()}} color="primary" type="submit">Solicitar Or&ccedil;amento</CButton>
            </CRow>
          </CContainer>
        </COffcanvasBody>
      </COffcanvas>
    </>

  )
}

export default Carrinho
