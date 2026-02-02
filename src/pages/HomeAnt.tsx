import React from "react";

export default function HomeAnt() {
  return (
    <>
      <section className="hero">
        <h1>Personajes de Los Simpsons</h1>
        <p>Listado dinámico usando API pública + CDN estable.</p>
        <p className="muted">
          Objetivo del mini-proyecto: practicar <strong>fetch</strong>, paginación, renderizado en tabla,
          manejo de errores y cálculos con datos reales.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h3>¿Qué practicarás aquí?</h3>
          <ol>
            <li>Consumes una API con paginación.</li>
            <li>Renderizas una tabla con imágenes.</li>
            <li>Haces cálculos a partir de la página actual.</li>
            <li>Manejas estados: cargando, ok, error.</li>
          </ol>
          <div className="card__images">
            <img
              src="https://picsum.photos/id/1015/480/260"
              alt="Paisaje"
            />
            <img
              src="https://picsum.photos/id/1003/480/260"
              alt="Arquitectura"
            />
          </div>
          <div className="card__captions">
            <span>Imagen de ejemplo (Picsum) para practicar layout.</span>
            <span>Otra imagen para practicar responsive.</span>
          </div>
        </div>

        <div className="side">
          <div className="card">
            <h4>Checklist mínimo</h4>
            <ul>
              <li>Paginación funcionando</li>
              <li>Tabla con imágenes y fallback</li>
              <li>Un cálculo con 3 inputs + select</li>
              <li>Otro cálculo con 3 inputs + select</li>
              <li>Mensajes claros al usuario</li>
            </ul>
          </div>
          <div className="card">
            <h4>Tip</h4>
            <p className="muted">
              Si una API falla, muestra un error <strong>útil</strong> y no dejes la pantalla en blanco.
              Evita "Error" genérico: indica qué acción puede tomar el usuario.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h3>Reto rápido</h3>
          <p>
            Agrega un filtro por nombre (input) y que solo muestre los personajes que contengan ese texto.
            <br />
            <span className="muted">Pista: usa <code>characters.filter(...)</code> y vuelve a renderizar.</span>
          </p>
        </div>
      </section>
    </>
  );
}
