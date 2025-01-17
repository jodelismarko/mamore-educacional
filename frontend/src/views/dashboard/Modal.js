import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { useSelector, useDispatch } from 'react-redux'

import {
  CModalFooter,
  CButton,
  CModal,
  CContainer,
  CModalTitle,
  CRow,
  CCol
} from '@coreui/react'


const VerticallyCentered = (descricao, detalhes, addProdutoCarrinho) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const carrinho = useSelector((state) => state.carrinho)
  return (
    <>
      <CRow style={{margin:0,padding:0, width:'128%', paddingBottom:2}}>
        <CCol xs={10} style={{margin:0,padding:0, paddingLeft:2, paddingRight:2}}>
          <CButton color="primary" onClick={() => setVisible(!visible)} style={{width:'100%'}} >
            Detalhes
          </CButton>
        </CCol>
        <CCol xs={1} style={{margin:0,padding:0}}>
          <CButton color="primary" onClick={() => addProdutoCarrinho()}>
            +
          </CButton>
        </CCol>
      </CRow>
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
                addProdutoCarrinho()
            }
            } color="primary">Comprar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default VerticallyCentered
