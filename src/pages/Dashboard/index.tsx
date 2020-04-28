import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';


import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

//const Dashboard: React.FC = () => {
const Dashboard: React.FunctionComponent = () => {


  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore respositório no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/27565971?s=460&u=21e5e72bb04e347d742343ecc0e534fe6655da81&v=4" alt="Jusciê" />
          <div>
            <strong>Bootcamp 11 - front-end</strong>
            <p>No description, website, or topics provided.
</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
