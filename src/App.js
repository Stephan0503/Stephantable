import React, { useState } from 'react';

function TableCalculator() {
  const [number, setNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [results, setResults] = useState([]);

  const calculateTable = () => {
    const n = parseFloat(number);
    if (isNaN(n) || !operation) {
      alert("Veuillez entrer un nombre valide et choisir une opération !");
      return;
    }

    const table = [];
    for (let i = 1; i <= 10; i++) {
      let result;
      switch (operation) {
        case 'addition':
          result = `${i} + ${n} = ${i + n}`;
          break;
        case 'soustraction':
          result = `${i} - ${n} = ${i - n}`;
          break;
        case 'multiplication':
          result = `${i} x ${n} = ${i * n}`;
          break;
        case 'division':
          result = `${i} ÷ ${n} = ${n !== 0 ? (i / n).toFixed(2) : 'Erreur: Division par 0'}`;
          break;
        default:
          result = "Opération invalide";
      }
      table.push(result);
    }

    setResults(table);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Générateur de table avec opération developper par I02B L2 informatique</h2>

      <input
        type="number"
        placeholder="Entrez un nombre"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <select onChange={(e) => setOperation(e.target.value)} style={{ padding: "5px" }}>
        <option value="">Cliquer pour choisir</option>
        <option value="addition">Addition</option>
        <option value="soustraction">Soustraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
      </select>

      <br /><br />
      <button onClick={calculateTable} style={{ padding: "8px 16px" }}>
        Calculer
      </button>

      <ul>
        {results.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export default TableCalculator;
