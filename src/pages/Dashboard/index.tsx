import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github explorer" />
      <Title>Explore repositórios no GitHub.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/53925545?s=460&u=904efc75e5a025f462a287e9132d5746ae0b40f0&v=4"
            alt="Andrew"
          />
          <div>
            <strong>drewProgram/spotifyFront</strong>
            <p>Front-end of the spotify web page with React.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/53925545?s=460&u=904efc75e5a025f462a287e9132d5746ae0b40f0&v=4"
            alt="Andrew"
          />
          <div>
            <strong>drewProgram/spotifyFront</strong>
            <p>Front-end of the spotify web page with React.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/53925545?s=460&u=904efc75e5a025f462a287e9132d5746ae0b40f0&v=4"
            alt="Andrew"
          />
          <div>
            <strong>drewProgram/spotifyFront</strong>
            <p>Front-end of the spotify web page with React.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/53925545?s=460&u=904efc75e5a025f462a287e9132d5746ae0b40f0&v=4"
            alt="Andrew"
          />
          <div>
            <strong>drewProgram/spotifyFront</strong>
            <p>Front-end of the spotify web page with React.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
