import React, {useState,useEffect} from 'react'
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

const renderPerson = (carrinho, removeProdutoCarrinho) => {
    return (
        <CContainer style={{ padding: 5 }}>
            <CCard >
                <CRow className="g-0">
                    <CContainer style={{ position: 'absolute', background: '#5856d6', width: 5, right: 0, marginTop: -10, marginRight: -10, borderRadius: 25 }}>
                        <CButton  style={{ margin: 0, padding:0, width:3, marginLeft:-5 }} onClick={()=> removeProdutoCarrinho(carrinho)}  color="primary" type="submit">X</CButton>
                    </CContainer>
                    <CCol md={2} style={{alignContent:'center', paddingLeft:5}}>
                        <CCardImage src={carrinho.capa} />
                    </CCol>
                    <CCol md={6}>
                        <CCardBody>
                            <CCardSubtitle>{carrinho.nome}</CCardSubtitle>
                            <CCardText>{carrinho.codigo}</CCardText>
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
    );
}

const ListaCompras = () => {
    const dispatch = useDispatch()
    const carrinho = useSelector((state) => state.carrinho)
    const caunt = useSelector((state) => state.caunt)


    const removeProdutoCarrinho = (produtoSerRemovido) => {
        dispatch({ type: 'set', caunt: caunt - 1 }),
        dispatch({ type: 'removeCarrinho', carrinho: produtoSerRemovido })
    }

    return (
        <FlatList
            list={carrinho}
            renderItem={(item,k) => renderPerson(item, removeProdutoCarrinho)}
            renderWhenEmpty={() => <div style={{textAlign:'center'}}>Voc&ecirc; ainda n&atilde;o adicionou produtos no seu carrinho.</div>}
        />

    )
}

export default ListaCompras
