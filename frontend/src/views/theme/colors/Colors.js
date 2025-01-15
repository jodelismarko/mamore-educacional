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
  CCardSubtitle,
  CCol,
  CRow,
} from '@coreui/react'

const imagess = [
  {
    original: 'https://i.ibb.co/1qt07CS/001-800x600.png',
    thumbnail: 'https://i.ibb.co/PG23JHN/001-80x60.png'
  },
  {
    original: 'https://i.ibb.co/jDcfpxc/002-800x600.png',
    thumbnail: 'https://i.ibb.co/Lhk5psG/002-80x60.png'
  },
  {
    original: 'https://i.ibb.co/1255FN1/003-800x600.png',
    thumbnail: 'https://i.ibb.co/GM5QP7M/003-80x60.png'
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
import ReactImg2 from 'src/assets/images/principal.jpg'

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
                <CCard style={{ width: '15rem' }}>
                  <CCardImage orientation="top" src={ReactImg2} />
                  <CCardBody>
                    <CCardTitle>Puzzel 3D</CCardTitle>
                    < CCardSubtitle>Cod: Ma205</ CCardSubtitle>
                  
                     <div class="card-footer bg-transparent border-success">
                     <CRow>
                      <CCol xs={6}>
                          {VerticallyCentered()}
                      </CCol>
                      <CCol xs={6}>
                        <CButton color="primary">Comprar</CButton>
                      </CCol>
                    </CRow>
                     </div>
                    
                  </CCardBody>
                </CCard>
              </CCardBody>
            </CCol>
            <CCol xs={3}>
              <CCardBody>
                <CCard style={{ width: '14rem' }}>
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
                <CCard style={{ width: '14rem' }}>
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
                <CCard style={{ width: '14rem' }}>
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
          </CRow>
          <CRow>
            <CCol xs={3}>
              <CCardBody>
                <CCard style={{ width: '14rem' }}>
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
                <CCard style={{ width: '14rem' }}>
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
                <CCard style={{ width: '14rem' }}>
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
                <CCard style={{ width: '14rem' }}>
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
