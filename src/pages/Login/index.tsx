import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content } from './styles';

const Login: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu Login</h1>

        <input placeholder="E-mail"/>

        <input placeholder="Senha"/>

        <button type="submit">Entrar</button>
      </form>

      <a href="">
        <FiLogIn/>
        Criar conta
      </a>
    </Content>
  </Container>
);

export default Login;