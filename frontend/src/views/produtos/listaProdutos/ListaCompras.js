import React from 'react'
import FlatList from 'flatlist-react';
import PlainList from 'flatlist-react';
import ReactImg from 'src/assets/images/react.jpg'
import VerticallyCentered from '../../dashboard/Modal'
import {
    CCardSubtitle,
    CButton,
    CAvatar,
    CRow,
    CCol,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CContainer,
    CCard,
    CDropdown,
    CDropdownToggle,
    CCloseButton,
    COffcanvas,
    COffcanvasBody,
    CCardFooter,
    COffcanvasHeader,
    CFormCheck,
    CForm,
    CFormLabel,
    CFormSelect,
    COffcanvasTitle,
    CFormInput, CInputGroup, CInputGroupText,
} from '@coreui/react'

import avatar2 from '../../../assets/images/avatars/2.jpg'
import avatar3 from '../../../assets/images/avatars/3.jpg'
import avatar4 from '../../../assets/images/avatars/4.jpg'
import avatar5 from '../../../assets/images/avatars/5.jpg'
import carrinhoIcon from '../../../assets/images/avatars/1.jpg'

const renderPerson = (carrinho, idx) => {
    return (
        <CContainer style={{ padding: 5 }}>
            <CCard >
                <CRow className="g-0">
                    <CContainer style={{ position: 'absolute', background: '#5856d6', width: 5, right: 0, marginTop: -10, marginRight: -10, borderRadius: 15 }}>
                        <CCardText style={{ marginLeft: -4, color: '#FFFFFF' }}>X</CCardText>
                    </CContainer>
                    <CCol md={2} style={{alignContent:'center', paddingLeft:5}}>
                        <CCardImage src={carrinho.imagens.miniatura} />
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
            renderWhenEmpty={() => <div>Voc� ainda n�o adicionou produtos no seu carrinho.</div>}
        />

    )
}

export default ListaCompras
