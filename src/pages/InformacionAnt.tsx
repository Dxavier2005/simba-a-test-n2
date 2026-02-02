import React from "react";

export default function InformacionAnt() {
  return (
    <>
      <h2>Información del Proyecto</h2>

      <div className="info-content">
        <p>
          Este ejercicio está diseñado para reforzar el consumo de <strong>APIs públicas</strong>, el uso de{" "}
          <strong>CDN para imágenes</strong> y la aplicación de <strong>lógica de negocio</strong> en el frontend
          usando JavaScript puro.
        </p>

        <p>
          El estudiante debe comprender cómo una API entrega datos paginados, cómo se renderizan dinámicamente en una tabla
          y cómo esos mismos datos pueden reutilizarse para cálculos y estadísticas.
        </p>

        <div className="image-container">
          <img
            src="https://fastly.picsum.photos/id/233/1200/500.jpg?hmac=EPRzDcSbV_xHJPBZhIqajgow6e1sOHYHn3l5tCwYJRw"
            alt="Imagen ilustrativa"
            className="full-image"
          />
          <p className="image-caption">Imagen ilustrativa usada solo con fines académicos (Picsum Photos).</p>
        </div>

        <div className="card">
          <h3>Objetivos de aprendizaje</h3>
          <ul>
            <li>Consumo de APIs REST con paginación</li>
            <li>Renderizado dinámico de tablas con datos reales</li>
            <li>Manejo de estados: loading, error, success</li>
            <li>Implementación de cálculos con inputs y selects</li>
            <li>Uso de CDN para optimizar carga de imágenes</li>
            <li>Validación y feedback claro al usuario</li>
          </ul>
        </div>

        <div className="card">
          <h3>Tecnologías utilizadas</h3>
          <ul>
            <li><strong>React + TypeScript</strong> - Framework y tipado</li>
            <li><strong>Vite</strong> - Build tool y dev server</li>
            <li><strong>Simpsons API</strong> - Fuente de datos</li>
            <li><strong>CSS Grid & Flexbox</strong> - Layout responsive</li>
          </ul>
        </div>
      </div>
    </>
  );
}
