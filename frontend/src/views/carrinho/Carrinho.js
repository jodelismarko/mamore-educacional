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

import { ContactUs } from '../../services/email/email'

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
          <ContactUs/>
        </COffcanvasBody>
      </COffcanvas>
    </>

  )
}

export default Carrinho
