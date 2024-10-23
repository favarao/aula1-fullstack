import React from 'react';
import './Alunos.css';

const Alunos = ({ alunos }) => {
  return (
    <tbody>
      {alunos.map((aluno, index) => (
        <tr key={index}>
          <td>{aluno}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Alunos;