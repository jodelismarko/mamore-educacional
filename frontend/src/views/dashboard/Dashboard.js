import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

function DashboardDetalhes() {
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
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg'
    },
    {
      original: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
      thumbnail: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg'
    }

  ]

    return (
      <div style={{ justifyItems:'center'}}>
        <div style={{background:'black', width:'70%', height:'50%', alignItems:'center'}}>
            <ImageGallery showPlayButton={false} items={imagess} />
        </div>
      </div>

    )
}


export default DashboardDetalhes
