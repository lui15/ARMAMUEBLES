/**
 * Datos de los textos legales.
 * Son un borrador: conviene que los revise un profesional.
 */
export const LEGAL = {
  nombre: 'ArmaMuebles',
  dominio: 'armamuebles.es',
  actividad: 'servicios de montaje de muebles y cocinas a domicilio en Madrid',

  titular: 'Luis Pichardo',
  nif: '61850512Q',
  domicilio: 'San Mariano 90, Madrid',
  correo: 'lpichardosanchez2@gmail.com',
  /** Solo para sociedades: registro mercantil, tomo, folio y hoja. Déjalo vacío si no aplica. */
  registro: '',
  conservacion:
    'Conservamos tus datos durante 12 meses si la solicitud no llega a contratarse. Si se contrata, los guardamos el tiempo que exija la ley.',

  datos: 'nombre, teléfono, correo electrónico (opcional), zona y los muebles y detalles del montaje que nos cuentes',
  proveedores: [
    'Hostinger: alojamiento de la web.',
    'Supabase: base de datos donde se guardan las solicitudes.',
    'EmailJS: envío del aviso por correo de cada solicitud.',
    'WhatsApp (Meta): solo si decides contactarnos o enviar tu solicitud por WhatsApp.',
    'Google Analytics (Google): estadísticas de visitas a la web, solo si aceptas las cookies analíticas.',
  ],
};
