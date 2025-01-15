import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

import ReactImg from 'src/assets/images/react.jpg'
import ReactImg2 from 'src/assets/images/principal.jpg'
import ReactImg3 from 'src/assets/images/logo.jpg'

const Colors = () => {
  return (
    <>
    <CRow>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Quem Somos</strong> 
          </CCardHeader>
          <CRow>
          <CCardBody>
                <CCard style={{ width: '15rem', alignItems:'center' }}>
                  <CCardImage orientation="top" src={ReactImg3} />
                  <CCardBody>                                        
                    </CCardBody>
                </CCard>
              </CCardBody>    
              <CCardBody>
                <CCard style={{ width: '65rem' }}>                  
                  <CCardBody>
                    <CCardTitle>Mamoré Educacional</CCardTitle>
                    <CCardText>
                   
                    <p class="lh-base">Bem-vindo à Mamoré Educacional, onde transformamos a educação matemática em experiências tangíveis e significativas. Nossa missão é promover o aprendizado através de materiais manipulativos que despertam a curiosidade, estimulam o raciocínio lógico e tornam a Matemática acessível e prazerosa para todos os estudantes.

Desde nossa fundação, acreditamos que aprender Matemática pode e deve ser uma experiência dinâmica. Por isso, nos dedicamos à criação de ferramentas pedagógicas inovadoras que ajudam professores a transformar suas aulas e estudantes a construir conhecimentos sólidos e duradouros.

Nosso time é composto por especialistas em educação, design e Matemática, comprometidos em desenvolver soluções criativas e eficazes. Cada produto da Mamoré Educacional é projetado com base em pesquisas educacionais e testado em sala de aula, garantindo qualidade e resultados reais.

Mais do que produtos, oferecemos parcerias para o crescimento educacional. Nosso compromisso vai além de fornecer materiais; queremos inspirar professores, engajar alunos e contribuir para a formação de gerações mais confiantes e preparadas no mundo dos números.

Junte-se a nós nessa jornada de transformação educacional. Venha conhecer nossos produtos e descobrir como a Mamoré Educacional pode fazer a diferença na sua escola, na sua sala de aula e, acima de tudo, na vida dos seus alunos.</p>

                    
                    </CCardText>
                    </CCardBody>
                </CCard>
              </CCardBody>     
          </CRow>
        </CCard>
    </CRow>
    </>
  )
}

export default Colors
