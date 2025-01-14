import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import ReactImg from 'src/assets/images/react.jpg'

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

const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Detalhes
      </CButton>
      <CModal size="lg" alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <div style={{ justifyItems: 'center' }}>
          <div style={{ background: 'black', width: '100%', height: '80%', alignItems: 'center' }}>
            <ImageGallery showPlayButton={false} showBullets={true} items={imagess} />
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

const Colors = () => {
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Primeiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00539</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>{VerticallyCentered()}</CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Segundo Produto</CCardTitle>
              <CCardSubtitle>Cod: 00540</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Terceiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00541</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Quarto Produto</CCardTitle>
              <CCardSubtitle>Cod: 00542</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol>
                    <CButton color="primary">Comprar</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Primeiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00539</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>{VerticallyCentered()}</CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Segundo Produto</CCardTitle>
              <CCardSubtitle>Cod: 00540</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Terceiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00541</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Quarto Produto</CCardTitle>
              <CCardSubtitle>Cod: 00542</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol>
                    <CButton color="primary">Comprar</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Primeiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00539</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>{VerticallyCentered()}</CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Segundo Produto</CCardTitle>
              <CCardSubtitle>Cod: 00540</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Terceiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00541</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Quarto Produto</CCardTitle>
              <CCardSubtitle>Cod: 00542</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol>
                    <CButton color="primary">Comprar</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Primeiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00539</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>{VerticallyCentered()}</CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Segundo Produto</CCardTitle>
              <CCardSubtitle>Cod: 00540</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Terceiro Produto</CCardTitle>
              <CCardSubtitle>Cod: 00541</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Quarto Produto</CCardTitle>
              <CCardSubtitle>Cod: 00542</CCardSubtitle>
              <CCardText />
            </CCardBody>
            <CCardFooter>
              <CContainer>
                <CRow className="justify-content-around">
                  <CCol>
                    <CCol>{VerticallyCentered()}</CCol>
                  </CCol>
                  <CCol>
                    <CButton color="primary">Comprar</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Colors
