import React, { useState, useEffect } from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {
  const [idConta, setIdConta] = useState('');
  const [transferencias, setTransferencias] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/transferencias/${idConta}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setTransferencias(retorno_convertido));
  }, [idConta]);
  
  const alterarId = (idConta) => {
    setIdConta(idConta);
  };
  

  return (
    <div>
      <Tabela vetor={transferencias} setIdConta={alterarId} />
    </div>
  );
}

export default App;
