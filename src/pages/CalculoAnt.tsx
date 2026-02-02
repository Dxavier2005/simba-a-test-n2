import React, { useEffect, useState } from "react";

type Character = {
  id: number;
};

type ApiResponse = {
  results: Character[];
};

export default function CalculoAnt() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [tipoProduccion, setTipoProduccion] = useState<string>("Simple");
  const [costoUnitario, setCostoUnitario] = useState<number>(1.25);
  const [costoFijo, setCostoFijo] = useState<number>(10);
  const [impuesto, setImpuesto] = useState<number>(12);
  const [resultado, setResultado] = useState<{ subtotal: number; total: number } | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters?page=7")
      .then((res) => res.json() as Promise<ApiResponse>)
      .then((data) => setCharacters(data.results || []))
      .catch(() => {});
  }, []);

  const calcularCosto = () => {
    const cargados = characters.length;
    const multiplicador = tipoProduccion === "Simple" ? 1 : tipoProduccion === "Doble" ? 2 : 3;
    const subtotal = cargados * costoUnitario * multiplicador + costoFijo;
    const total = subtotal + subtotal * (impuesto / 100);
    setResultado({ subtotal, total });
    setShowResult(true);
  };

  return (
    <>
      <h2>Cálculo claro: "Costo de producción" (página actual)</h2>
      <p className="muted">
        Otro cálculo con <strong>3 inputs + 1 select</strong>. Simula un costo usando la cantidad de personajes cargados.
      </p>

      <div className="card form-card">
        <div className="form-grid">
          <div className="form-group">
            <label>Tipo de producción</label>
            <select
              value={tipoProduccion}
              onChange={(e) => setTipoProduccion(e.target.value)}
            >
              <option value="Simple">Simple</option>
              <option value="Doble">Doble</option>
              <option value="Triple">Triple</option>
            </select>
            <small className="help">Multiplicador por select</small>
          </div>

          <div className="form-group">
            <label>Costo unitario</label>
            <input
              type="number"
              step="0.01"
              value={costoUnitario}
              onChange={(e) => setCostoUnitario(Number(e.target.value))}
            />
            <small className="help">USD por personaje</small>
          </div>

          <div className="form-group">
            <label>Costo fijo</label>
            <input
              type="number"
              value={costoFijo}
              onChange={(e) => setCostoFijo(Number(e.target.value))}
            />
            <small className="help">USD</small>
          </div>

          <div className="form-group">
            <label>Impuesto (%)</label>
            <input
              type="number"
              value={impuesto}
              onChange={(e) => setImpuesto(Number(e.target.value))}
            />
            <small className="help">Ej: 12</small>
          </div>
        </div>

        <button className="btn btn-success" onClick={calcularCosto}>
          Calcular costo
        </button>

        <div className="formula">
          <strong>Fórmula:</strong> subtotal = (cargados × costoUnit × multi) + fijo | total = subtotal + (subtotal × impuesto)
        </div>

        {showResult && resultado && (
          <div className="result-box">
            <div className="result-value">Subtotal: ${resultado.subtotal.toFixed(2)} USD</div>
            <div className="result-value">Total (con impuesto): ${resultado.total.toFixed(2)} USD</div>
          </div>
        )}
      </div>
    </>
  );
}
