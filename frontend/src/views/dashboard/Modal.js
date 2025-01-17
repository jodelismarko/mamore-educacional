import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { useSelector, useDispatch } from 'react-redux'

import {
  CModalBody,
  CModalFooter,
  CButton,
  CModal,
  CContainer,
  CCardText,
  CModalTitle
} from '@coreui/react'


const VerticallyCentered = (descricao, detalhes,addProdutoCarrinho) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const carrinho = useSelector((state) => state.carrinho)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Detalhes
      </CButton>
      <CModal size="lg" alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CContainer style={{ justifyItems: 'center' }}>
          <CContainer style={{ background: 'black', width: '100%', height: '100%', alignItems: 'center', padding: 3 }}>
            <ImageGallery showPlayButton={false} showBullets={true} items={detalhes} />
          </CContainer>
        </CContainer>
        <CModalTitle style={{ padding: 20, textAlign: 'justify' }}>
          {descricao}
        </CModalTitle>
        <CModalFooter>
          <CButton
            onClick={() => {
              setVisible(!visible),
              addProdutoCarrinho(descricao)
              }
            } color="primary">Comprar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default VerticallyCentered
