import React from 'react'
import FlatList from 'flatlist-react';

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

const renderPerson = (carrinho) => {
    return (
        <CContainer style={{ padding: 5 }}>
            <CCard >
                <CRow className="g-0">
                    <CContainer style={{ position: 'absolute', background: '#5856d6', width: 5, right: 0, marginTop: -10, marginRight: -10, borderRadius: 15 }}>
                        <CCardText style={{ marginLeft: -4, color: '#FFFFFF' }}>X</CCardText>
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

const ListaCompras = (props) => {
    return (
        <FlatList
            list={props.carrinho}
            renderItem={renderPerson}
            renderWhenEmpty={() => <div>Você ainda não adicionou produtos no seu carrinho.</div>}
        />

    )
}

export default ListaCompras
