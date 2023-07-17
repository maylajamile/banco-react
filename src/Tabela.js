import React, { useState } from "react";

function Tabela({ vetor, setIdConta }) {
  const [idContaInput, setIdContaInput] = useState("");

  const receberInput = (e) => {
    setIdContaInput(e.target.value);
  };

  const submeterForm = (e) => {
    e.preventDefault();
    setIdConta(idContaInput);
  };

  return (
    <div className="container my-2" align="center">
      <form onSubmit={submeterForm}>
        <input
          type="text"
          value={idContaInput}
          onChange={receberInput}
          placeholder="Digite o ID da conta"
        />
        <button type="submit">Buscar</button>
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
