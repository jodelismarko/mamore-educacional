import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import ReactImg from 'src/assets/images/react.jpg'
import VerticallyCentered from './Modal'
import {
  CModalBody,
  CContainer,
  CModalHeader,
  CCardSubtitle,
  CModalFooter,
  CCardFooter,
  CModalTitle,
  CButton,
  CCard,
  CCardGroup,
  CModal,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCarousel, CCarouselItem, CImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

const imagess = [
  {
    original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
  },
  {
    original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
  },
  {
    original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
  }
]



const Colors = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Lista de produtos</strong>
            </CCardHeader>
            <CRow>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Puzzel 3D</CCardTitle>
                      < CCardSubtitle>Cod: Ma205</ CCardSubtitle>
                      <CCardText>
                        Teste para card de tprodutos criado para educa&ccedil;&atilde;o mamtem&aacute;tica pela empresa mamor&eacute; educacional
                      </CCardText>
                      <CContainer>
                        {VerticallyCentered()}
                        <CButton color="primary">Comprar</CButton>
                      </CContainer>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Segundo produto</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#Modals">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Terceiro produto</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Quarto produto</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
              <CCol xs={3}>
                <CCardBody>
                  <CCard style={{ width: '17rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card&#39;s content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Colors
