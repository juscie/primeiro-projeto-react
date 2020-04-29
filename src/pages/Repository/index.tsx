import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}
//const Repository: React.FC = () => {
const Repository: React.FunctionComponent = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="github Exploerer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/27565971?s=460&u=21e5e72bb04e347d742343ecc0e534fe6655da81&v=4"
            alt="Jusciê"
          />
          <div>
            <strong>juscie/primeiro-projeto-react</strong>
            <p>Descirção do repositório </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertos</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="aaaa">
          <div>
            <strong>aaaaaaa</strong>
            <p>aaaaaaaa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
