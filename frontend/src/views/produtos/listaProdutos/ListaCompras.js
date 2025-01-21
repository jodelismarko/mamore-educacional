import React, { useState, useEffect } from 'react'
import FlatList from 'flatlist-react';
import { useSelector, useDispatch } from 'react-redux'

import {
    CCardSubtitle,
    CButton,
    CRow,
    CCol,
    CCardImage,
    CCardBody,
    CCardText,
    CContainer,
    CCard,
    CFormInput, CInputGroup,
} from '@coreui/react'

const renderPerson = (item, removeProdutoCarrinho, addQtdeProdutoCarrinho, removeQtdeProdutoCarrinho) => {
    const dispatch = useDispatch()


    return (
        <CContainer style={{ padding: 5 }}>
            <CCard >
                <CRow className="g-0">
                    <CContainer style={{ position: 'absolute', background: '#5856d6', width: 5, right: 0, marginTop: -10, marginRight: -10, borderRadius: 25 }}>
                        <CButton style={{ margin: 0, padding: 0, width: 3, marginLeft: -5 }} onClick={() => removeProdutoCarrinho(item)} color="primary" type="submit">X</CButton>
                    </CContainer>
                    <CCol md={2} style={{ alignContent: 'center', paddingLeft: 5 }}>
                        <CCardImage src={item.capa} />
                    </CCol>
                    <CCol md={6}>
                        <CCardBody>
                            <CCardSubtitle>{item.nome}</CCardSubtitle>
                            <CCardText>{item.codigo}</CCardText>
                        </CCardBody>
                    </CCol>
                    <CCol md={2}>
                        <CCardBody>
                            <CButton color="primary" variant="outline">{item.qtde}</CButton>
                        </CCardBody>
                    </CCol>
                    <CCol md={2} >
                        <CCardBody style={{margin:0, padding:0}}>
                            <CRow >
                                <CButton style={{margin:0, padding:0, paddingTop:-5, width:25, marginTop:16, height:20}}
                                    onClick={() => addQtdeProdutoCarrinho(item)}
                                    type="button" color="primary"  >
                                    +
                                </CButton>
                            </CRow>
                            <CRow >
                                <CButton style={{margin:0, padding:0, width:25, height:20}}
                                    onClick={() => removeQtdeProdutoCarrinho(item)}
                                    type="button" color="primary">
                                    -
                                </CButton>
                            </CRow>
                        </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
        </CContainer>
    );
}

const ListaCompras = () => {
    const dispatch = useDispatch()
    const carrinho = useSelector((state) => state.carrinho)
    const caunt = useSelector((state) => state.caunt)
    const teste = useSelector((state) => state.teste)

    const removeProdutoCarrinho = (produtoSerRemovido) => {
        dispatch({ type: 'set', caunt: caunt - 1 }),
            dispatch({ type: 'removeCarrinho', carrinho: produtoSerRemovido })
    }

    const addQtdeProdutoCarrinho = (produtoQuantidade) => {
        dispatch({ type: 'set', teste: !teste }),
            dispatch({ type: 'addQtdeCarrinho', produtoQuantidade })
    }

    const removeQtdeProdutoCarrinho = (produtoQuantidade) => {
        dispatch({ type: 'set', teste: !teste }),
            dispatch({ type: 'removeQtdeCarrinho', produtoQuantidade })
    }

    return (
        <FlatList
            list={carrinho}
            renderItem={(item, k) => renderPerson(item, removeProdutoCarrinho, addQtdeProdutoCarrinho, removeQtdeProdutoCarrinho)}
            renderWhenEmpty={() => <div style={{ textAlign: 'center' }}>Voc&ecirc; ainda n&atilde;o adicionou produtos no seu carrinho.</div>}
        />

    )
}

export default ListaCompras
