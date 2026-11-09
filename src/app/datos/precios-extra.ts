/* Precios complementarios del negocio (Madrid, 2026). Solo para lo que el catálogo no recoge. */

/** Servicio mínimo: incluye el desplazamiento dentro de Madrid capital. */
export const SERVICIO_MINIMO = 40;

export const NOTA_PRECIOS =
  'Precios orientativos con IVA incluido. Te damos un precio cerrado antes de ir.';

export interface PrecioExtra {
  concepto: string;
  detalle?: string;
  precio: string;
}

/** Tabla complementaria que se muestra en /precios. */
export const PRECIOS_EXTRA: PrecioExtra[] = [
  {
    concepto: 'Servicio mínimo',
    detalle: 'Incluye el desplazamiento en Madrid capital',
    precio: `${SERVICIO_MINIMO} €`,
  },
  {
    concepto: 'Desplazamiento a municipios del área metropolitana',
    detalle: 'Según la distancia',
    precio: '0–15 €',
  },
  { concepto: 'Trabajos a medida o por horas', precio: '30–40 €/h' },
  { concepto: 'Colgar la TV en la pared', detalle: 'Con el soporte que nos des', precio: 'desde 40 €' },
  { concepto: 'Colgar baldas, cuadros o espejos', detalle: 'Hasta 5 piezas', precio: 'desde 30 €' },
  { concepto: 'Desmontar un mueble', precio: '50–60 % del precio de montaje' },
  { concepto: 'Fijar el mueble a la pared (antivuelco)', precio: 'Incluido en el montaje' },
];

/** Armario PAX con puertas correderas (no está en el catálogo como servicio propio). */
export const PRECIO_PAX_CORREDERAS = 150;
