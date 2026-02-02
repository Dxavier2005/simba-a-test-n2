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

        
      </div>
    </>
  );
}
