import React, { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  occupation: string | null;
  gender: string | null;
  status: string | null;
  age: number | null;
};

type ApiResponse = {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: Character[];
};

const IMG_CDN = "https://cdn.thesimpsonsapi.com/500/character";

export default function ListadoAnt() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(7);
  const [totalPages, setTotalPages] = useState(60);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    const url = `https://thesimpsonsapi.com/api/characters?page=${page}`;

    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error("No se pudo cargar la API");
        return (await res.json()) as ApiResponse;
      })
      .then((data) => {
        if (!active) return;
        setCharacters(data.results || []);
        setTotalPages(data.pages);
        setTotalCount(data.count);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message || "Error inesperado");
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [page]);

  return (
    <>
      <div className="page-header">
        <h2>Listado de Personajes</h2>
        <div className="page-controls">
          <button
            className="btn btn-icon"
            onClick={() => setPage(1)}
            disabled={page === 1}
            title="Primera página"
          >
            ⏮
          </button>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={page}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val >= 1 && val <= totalPages) setPage(val);
            }}
            style={{ width: "80px", textAlign: "center" }}
          />
          <button
            className="btn btn-icon"
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            title="Última página"
          >
            ⏭
          </button>
        </div>
      </div>

      <div className="info-box">
        <div className="info-row">
          <span>URL de la API utilizada:</span>
          <code className="code-display">
            https://thesimpsonsapi.com/api/characters?page={page}
          </code>
        </div>
        <div className="info-row">
          <span>CDN de imágenes (por ID):</span>
          <code className="code-display">
            https://cdn.thesimpsonsapi.com/500/character/{"{id}"}.webp
          </code>
        </div>
        <div className="info-badges">
          <span className="badge-info">Página: {page}/{totalPages}</span>
          <span className="badge-info">Total: {totalCount}</span>
          <span className="badge-info">Cargados: {characters.length}</span>
        </div>
      </div>

      {loading && <div className="state">Cargando personajes…</div>}

      {error && (
        <div className="state state--error">
          {error}. Reintenta más tarde o revisa tu conexión.
        </div>
      )}

      {!loading && !error && (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Género</th>
                <th>Edad</th>
                <th>Ocupación</th>
                <th>Estado</th>
                <th>Foto</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.gender ?? "-"}</td>
                  <td>{c.age ?? "-"}</td>
                  <td>{c.occupation ?? "-"}</td>
                  <td>
                    <span
                      className={`badge badge--${
                        c.status === "Alive"
                          ? "ok"
                          : c.status === "Deceased"
                          ? "bad"
                          : "warn"
                      }`}
                    >
                      {c.status ?? "Unknown"}
                    </span>
                  </td>
                  <td>
                    <img
                      className="avatar"
                      src={`${IMG_CDN}/${c.id}.webp`}
                      alt={c.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://via.placeholder.com/72x72?text=?";
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
