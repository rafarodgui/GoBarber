import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '../Notifications';

import logo from '~/assets/logo_2.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const defaultAvatar =
        'https://api.adorable.io/avatars/50/abott@adorable.png';

    const profile = useSelector((state) => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">Dashboard</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src={profile.avatar.url || defaultAvatar}
                            alt="Rafael Guimarães"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
