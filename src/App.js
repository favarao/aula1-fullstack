import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabela from './components/Tabela';
import './App.css';

function App() {
  const alunos = ['João', 'Maria', 'Carlos', 'Daniel', 'Ana'];

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Tabela alunos={alunos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;