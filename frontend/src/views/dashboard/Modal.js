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
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const caunt = useSelector((state) => state.caunt)

  return (
    <>
      <CRow style={{margin:0,padding:0, width:'135%', paddingBottom:2}}>
        <CCol xs={10} style={{margin:0,padding:0, paddingLeft:2, paddingRight:2}}>
          <CButton color="primary" onClick={() => setVisible(!visible)} style={{width:'100%'}} >
            Detalhes
          </CButton>
        </CCol>
        <CCol xs={1} style={{margin:0,padding:0}}>
          <CButton color="primary" onClick={() => {
              dispatch({ type: 'set', caunt: caunt + 1 }),
              addProdutoCarrinho()
            }}
>            +
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
              dispatch({ type: 'set', caunt: caunt + 1 }),
              addProdutoCarrinho(),
              setVisible(!visible)
            }
            } color="primary">Comprar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default VerticallyCentered
