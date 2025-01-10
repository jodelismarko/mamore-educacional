import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

function DashboardDetalhes() {
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

    return (
      <div style={{ justifyItems:'center'}}>
        <div style={{background:'black', width:'70%', height:'50%', alignItems:'center'}}>
            <ImageGallery showPlayButton={false} items={imagess} />
        </div>
      </div>

    )
}


export default DashboardDetalhes
