import React, { useState } from "react";

function Tabela({vetor, setIdConta, setDataInicio, setDataFim, setOperador}) {

  const [idContaInput, setIdContaInput] = useState("");
  const [dataInicioInput, setDataInicioInput] = useState("");
  const [dataFimInput, setDataFimInput] = useState("");
  const [operadorInput, setOperadorInput] = useState("");

  const receberIdConta = (e) => {
    setIdContaInput(e.target.value);
  };

  const receberDataInicio = (e) => {
    setDataInicioInput(e.target.value);
  }

  const receberDataFim = (e) => {
    setDataFimInput(e.target.value);
  }

  const receberOperador = (e) => {
    setOperadorInput(e.target.value);
  }

  const submeterForm = (e) => {
    e.preventDefault();
    setIdConta(idContaInput);
    setDataInicio(dataInicioInput);
    setDataFim(dataFimInput);
    setOperador(operadorInput);
  };

  return (
    <div className="container my-2" align="center">
      <form onSubmit={submeterForm}>
        <div className="form-row">
          <div className="form-group">
            <label>ID da Conta:</label>
            <input type="text" id="idContaInput" className="form-control" value={idContaInput} onChange={receberIdConta} placeholder="Digite o ID da conta" required/>
          </div>
          <div className="form-group">
            <label>Data de início:</label>
            <input type="date" id="dataInicioInput" className="form-control" value={dataInicioInput} onChange={receberDataInicio} placeholder="yyyy/mm/dd"/>
          </div>
          <div className="form-group">
            <label>Data de fim:</label>
            <input type="date" id="dataFimInput" className="form-control" value={dataFimInput} onChange={receberDataFim} placeholder="yyyy/mm/dd"/>
          </div>
          <div className="form-group">
            <label>Nome do operador transicionado:</label>
            <input type="text" id="operadorInput" className="form-control" value={operadorInput} onChange={receberOperador} placeholder="Digite o nome do operador"/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Pesquisar</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Dados</th>
            <th>Valencia</th>
            <th>Tipo</th>
            <th>Nome do Operador</th>
          </tr>
        </thead>
        <tbody>
          {vetor.map((obj, indice) => (
            <tr key={indice}>
              <td>{indice + 1}</td>
              <td>{obj.dataTransferencia}</td>
              <td>{obj.valor}</td>
              <td>{obj.tipo}</td>
              <td>{obj.operador}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
