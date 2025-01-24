import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import emailjs from '@emailjs/browser';
import FlatList from 'flatlist-react';

import {
    CButton,
    CCol,
    CForm,
    CFormInput, CInputGroup, CInputGroupText,
} from '@coreui/react'
import { IMaskMixin } from 'react-imask'

const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
    <CFormInput {...props} ref={inputRef} />
))

export const ContactUs = () => {
    const form = useRef();
    const dispatch = useDispatch()
    const carrinho = useSelector((state) => state.carrinho)
    const [visible, setVisible] = useState(false)
    const teste = useSelector((state) => state.teste)

    useEffect(() => {
        console.log("carrinho mudou")
    }, [teste])


    const handleSubmit = (event) => {
        dispatch({ type: 'limparCarrinho' })
        const form = event.currentTarget
        event.preventDefault();
        emailjs
            .sendForm('service_l12aupq', 'template_djmjjer', form, {
                publicKey: 'r4IV6L9kChtW_NLSW',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <>
            <CForm style={{ marginTop: 50 }}
                className="row g-2 needs-validation"
                onSubmit={handleSubmit}
            >
                <CCol md={7}>
                    <CFormInput
                        type="text"
                        placeholder="Nome Completo"
                        feedbackValid="Looks good!"
                        name="to_name"
                        required
                    />
                </CCol>
                <CCol md={5}>
                    <CFormInputWithMask
                        mask="(00)0000-0000"
                        placeholder="Telefone"
                        feedbackValid="Looks good!"
                        name="from_name"
                        required
                    />
                </CCol>
                <CCol md={12}>
                    <CInputGroup className="has-validation">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                            type="text"
                            aria-describedby="inputGroupPrependFeedback"
                            feedbackValid="Please choose a username."
                            placeholder="name@example.com"
                            name="cliente_email"
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={12}>
                    <CFormInput
                        type="hidden"
                        value="jjmamore@gmail.com"
                        aria-describedby="inputGroupPrependFeedback"
                        feedbackValid="Please choose a username."
                        name="user_email"
                    />
                </CCol>
                <CCol xs={12}>
                    {carrinho.map((item) => <CFormInput type="hidden" name="message" value={"Produto: " + item.nome + "; Quantidade: " + item.qtde} />)}
                </CCol>
                <CCol xs={12}>
                    <CButton color="primary" type="submit">
                        Solicitar Orçamento
                    </CButton>
                </CCol>
            </CForm>

        </>

    );
};