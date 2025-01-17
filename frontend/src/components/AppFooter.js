import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto">
        <span className="me-1">Criado por</span>
        <a href="https://instagam.com/mamoreducacional" target="_blank" rel="noopener noreferrer">
          Mamore Educacional
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
