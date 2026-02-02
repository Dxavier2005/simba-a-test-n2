import React, { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  status: string | null;
};

type ApiResponse = {
  results: Character[];
};

export default function EstadisticasAnt() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [estadoObjetivo, setEstadoObjetivo] = useState<string>("Alive");
  const [pesoEstado, setPesoEstado] = useState<number>(2);
  const [bonoExtra, setBonoExtra] = useState<number>(5);
  const [minimoRequerido, setMinimoRequerido] = useState<number>(10);
  const [resultado, setResultado] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters?page=7")
      .then((res) => res.json() as Promise<ApiResponse>)
      .then((data) => setCharacters(data.results || []))
      .catch(() => {});
  }, []);

  const calcularIndice = () => {
    const conteoEstado = characters.filter(
      (c) => c.status === estadoObjetivo
    ).length;
    const indice = conteoEstado * pesoEstado + bonoExtra;
    setResultado(indice);
    setShowResult(true);
  };

  const validar = () => {
    if (!resultado) return { valid: false, msg: "" };
    const valid = resultado >= minimoRequerido;
    return {
      valid,
      msg: valid ? "✅ Aprobado" : "❌ Por debajo del mínimo requerido",
    };
  };

  return (
    <>
      <h2>Estadística clara: "Índice de presencia" (página actual)</h2>
      <p className="muted">
        Calcula un resultado a partir de <strong>3 inputs + 1 select</strong>. Se usa el total de personajes cargados en la página como base.
      </p>

      <div className="card form-card">
        <div className="form-grid">
          <div className="form-group">
            <label>Estado objetivo</label>
            <select
              value={estadoObjetivo}
              onChange={(e) => setEstadoObjetivo(e.target.value)}
            >
              <option value="Alive">Alive</option>
              <option value="Deceased">Deceased</option>
              <option value="Unknown">Unknown</option>
            </select>
            <small className="help">El 2 se aporta el doble</small>
          </div>

          <div className="form-group">
            <label>Peso del estado</label>
            <input
              type="number"
              value={pesoEstado}
              onChange={(e) => setPesoEstado(Number(e.target.value))}
            />
            <small className="help">USD por personaje</small>
          </div>

          <div className="form-group">
            <label>Bono extra</label>
            <input
              type="number"
              value={bonoExtra}
              onChange={(e) => setBonoExtra(Number(e.target.value))}
            />
            <small className="help">Se suma al final</small>
          </div>

          <div className="form-group">
            <label>Mínimo requerido</label>
            <input
              type="number"
              value={minimoRequerido}
              onChange={(e) => setMinimoRequerido(Number(e.target.value))}
            />
            <small className="help">Para aprobar/validar</small>
          </div>
        </div>

        <button className="btn btn-primary" onClick={calcularIndice}>
          Calcular índice
        </button>

        <div className="formula">
          <strong>Fórmula:</strong> índice = (conteoEstado × peso) + bono
        </div>

        {showResult && resultado !== null && (
          <div className="result-box">
            <div className="result-value">Índice calculado: {resultado}</div>
            <div className={`result-validation ${validar().valid ? 'valid' : 'invalid'}`}>
              {validar().msg}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
