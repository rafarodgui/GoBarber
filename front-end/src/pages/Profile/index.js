import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import AvatarInput from './AvatarInput/index';

import { SignOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(SignOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="e-mail" />

                <hr />

                <Input
                    type="passwor d"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar nova senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="submit" onClick={handleSignOut}>
                Sair
            </button>
        </Container>
    );
}
