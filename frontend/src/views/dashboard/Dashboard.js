import React from 'react'
import ReactImg from 'src/assets/images/react.jpg'
import FlatList from 'flatlist-react';
import VerticallyCentered from './Modal'
import { useDispatch } from 'react-redux'

import {
  CCardSubtitle,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow
} from '@coreui/react'

import { produtos } from '../../services/ListaProdutos'

const renderPerson = (produtosCarrinho) => {
  const dispatch = useDispatch()

  const addProdutoCarrinho = () => {
    dispatch({ type: 'addCarrinho', carrinho: produtosCarrinho })
  }

  return (
    <CCol style={{ paddingTop: 10, paddingBottom: 10 }}>
      <CCard>
        <CCardImage orientation="top" src={produtosCarrinho.capa} />
        <CCardBody>
          <CCardTitle>{produtosCarrinho.nome}</CCardTitle>
          < CCardSubtitle>{produtosCarrinho.codigo}</ CCardSubtitle>
          <CCardText />
        </CCardBody>
        <CRow >
          <CCol md={10} >{VerticallyCentered(produtosCarrinho.descricao, produtosCarrinho.detalhes, addProdutoCarrinho)}</CCol>
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
          <CRow xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 5 }} style={{ paddingTop: 30, paddingBottom: 50, paddingLeft: 10, paddingRight: 10 }}>
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
