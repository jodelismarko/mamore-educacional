import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';

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
        <div style={{ justifyItems: 'center' }}>
          <div style={{ background: 'black', width: '100%', height: '80%', alignItems: 'center' }}>
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
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
        <CCol xs>
          <CCard >
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Primeiro produto</CCardTitle>
              <CCardSubtitle>Cod: 00539</CCardSubtitle>
                <CRow>
                  <CCol >{VerticallyCentered()}</CCol>
                  <CCol><CButton color="primary">Comprar</CButton></CCol>
                </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Colors
