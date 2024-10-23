import React from 'react';
import './Tabela.css';
import Alunos from './Alunos';

const Tabela = ({ alunos }) => {
  return (
    <div className="tabela">
      <h2>Lista de Alunos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
              <Alunos alunos={alunos} />
      </table>
    </div>
  );
};

export default Tabela;