import React from 'react'
import ReactImg from 'src/assets/images/react.jpg'
import FlatList from 'flatlist-react';
import VerticallyCentered from './Modal'
import { useSelector, useDispatch } from 'react-redux'

import {
  CContainer,
  CCardSubtitle,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CCardFooter,
  CInputGroup,
  CFormInput
} from '@coreui/react'

import { carrinho } from '../../services/CarrinhoCompras'
import { produtos } from '../../services/ListaProdutos'



const renderPerson = (produtos, idx) => {
  const dispatch = useDispatch()
  const carrinho = useSelector((state) => state.carrinho)

const  addProdutoCarrinho = () => {    
  dispatch({ type: 'addCarrinho', carrinho: produtos })
}

  return (
    <CCol style={{ paddingTop: 10, paddingBottom: 10 }}>
    <CCard>
      <CCardImage orientation="top" src={produtos.capa} />
      <CCardBody>
        <CCardTitle>{produtos.nome}</CCardTitle>
        < CCardSubtitle>{produtos.codigo}</ CCardSubtitle>
        <CCardText />
      </CCardBody>
        <CRow >
          <CCol md={10} >{VerticallyCentered(produtos.descricao, produtos.detalhes, addProdutoCarrinho)}</CCol>
        </CRow>
    </CCard>
  </CCol>
  );
}

const Colors = () => {
  return (
    <>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Lista de produtos</strong>
            </CCardHeader>
              <CRow xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 5 }} style={{ paddingTop: 30, paddingBottom: 50,paddingLeft:10, paddingRight:10 }}>
                <FlatList
                  list={produtos}
                  renderItem={renderPerson}
                  renderWhenEmpty={() => <div>Você ainda não adicionou produtos no seu carrinho.</div>}
                />
              </CRow>
          </CCard>
        </CCol>
    </>
  )
}

export default Colors
