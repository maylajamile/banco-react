import React, { useState, useEffect } from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {
  const [idConta, setIdConta] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [operador, setOperador] = useState("");
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoPeriodo, setSaldoPeriodo] = useState(0);
  const [transferencias, setTransferencias] = useState([]);

  const formatarData = (data) => {
    const [dia, mes, ano] = data.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  const calcularSaldos = (transferencias) => {
    let saldoTotalConta = 0;
    let saldoPeriodoConta = 0;

    transferencias.forEach((transferencia) => {
      saldoTotalConta += transferencia.valor;

      const dataTransferencia = new Date(transferencia.dataTransferencia);
      const dataInicioPeriodo = new Date(dataInicio);
      const dataFimPeriodo = new Date(dataFim);

      if (dataTransferencia >= dataInicioPeriodo && dataTransferencia <= dataFimPeriodo) {
        saldoPeriodoConta += transferencia.valor;
      }
    });

    setSaldoTotal(saldoTotalConta);
    setSaldoPeriodo(saldoPeriodoConta);
  };

  useEffect(() => {
    let url = `http://localhost:8080/transferencias/${idConta}`;
    const parametros = [];

    if (operador) {
      parametros.push(`operador=${operador}`);
    }

    if (dataInicio) {
      parametros.push(`dataInicio=${formatarData(dataInicio)}`);
    }

    if (dataFim) {
      parametros.push(`dataFinal=${formatarData(dataFim)}`);
    }

    if (parametros.length > 0) {
      url += `?${parametros.join('&')}`;
    }

    fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((retorno) => retorno.json())
    .then((retorno_convertido) => {
      setTransferencias(retorno_convertido);
      calcularSaldos(retorno_convertido);
    });
  }, [idConta, dataInicio, dataFim, operador]);
  
  const alterarId = (idConta) => {
    setIdConta(idConta);
  };
  
  return (
    <div>
      <Tabela vetor={transferencias} saldoTotal={saldoTotal.toFixed(2)} saldoPeriodo={saldoPeriodo.toFixed(2)} 
          setIdConta={alterarId} setDataInicio={setDataInicio} setDataFim={setDataFim} setOperador={setOperador} />
    </div>
  );
}

export default App;
