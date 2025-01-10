import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';

import {
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CButton,
  CCard,
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
    thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg'
  },
  {
    original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
    thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg'
  },
  {
    original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
    thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg'
  }
]

const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Detalhes
      </CButton>
      <CModal size="lg" alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <div style={{ justifyItems:'center'}}>
          <div style={{background:'black', width:'100%', height:'80%', alignItems:'center'}}>
              <ImageGallery showPlayButton={false} items={imagess} />
          </div>
        </div>
        <CModalBody>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Comprar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

import ReactImg from 'src/assets/images/react.jpg'

const Colors = () => {
  return (
    <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Lista de produtos</strong> <small>Examplo</small>
          </CCardHeader>
          <CRow>
            <CCol xs={3}>
              <CCardBody>
                <CCard style={{ width: '17rem' }}>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Primeiro produto</CCardTitle>
                    <CCardText>
                      Teste para card de tprodutos criado para educa&ccedil;&atilde;o mamtem&aacute;tica pela empresa mamor&eacute; educacional
                    </CCardText>

                    <div class="container">
                      <div class="row">
                        <div class="col">
                          {VerticallyCentered()}
                        </div>
                        <div class="col">
                          <CButton color="primary">Comprar</CButton>
                        </div>
                      </div>
                    </div>
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
