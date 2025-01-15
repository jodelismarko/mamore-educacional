import React from 'react'
import FlatList from 'flatlist-react';
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

const renderPerson = (person, idx) => {
    return (
        <CContainer style={{padding:5, marginLeft:-20}}>
        <CCard >
          <CRow className="g-0">
            <CCol md={2}>
              <CCardImage src={avatar2} />
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CCardTitle>Primeiro Produto</CCardTitle>
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

const people = [
    { firstName: 'Elson', lastName: 'Correia', info: { age: 24 } },
    { firstName: 'John', lastName: 'Doe', info: { age: 18 } },
    { firstName: 'Jane', lastName: 'Doe', info: { age: 34 } },
    { firstName: 'Maria', lastName: 'Carvalho', info: { age: 22 } },
    { firstName: 'Kelly', lastName: 'Correia', info: { age: 23 } },
    { firstName: 'Don', lastName: 'Quichote', info: { age: 39 } },
    { firstName: 'Marcus', lastName: 'Correia', info: { age: 0 } },
    { firstName: 'Bruno', lastName: 'Gonzales', info: { age: 25 } },
    { firstName: 'Alonzo', lastName: 'Correia', info: { age: 44 } }
]

const Lista = (props) => {
    return (
        <ul>
            <FlatList
                list={props.people}
                renderItem={renderPerson}
                renderWhenEmpty={() => <div>List is empty!</div>}
                sortBy={["firstName", { key: "lastName", descending: true }]}
            />
        </ul>
    )
}

export default Lista
