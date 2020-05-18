import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('Insira um email válido'),
    password: Yup.string()
        .min(6, 'Minimo 6 caracteres')
        .required('Insira uma senha válida'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    async function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já possuo conta</Link>
            </Form>
        </>
    );
}
