/**
 * Datos de los textos legales. Sustituye cada [PENDIENTE] antes de publicar.
 * Son un borrador: conviene que los revise un profesional.
 */
export const LEGAL = {
  nombre: 'ArmaMuebles',
  dominio: 'armamuebles.es',
  actividad: 'servicios de montaje de muebles y cocinas a domicilio en Madrid',

  titular: '[PENDIENTE: nombre completo o razón social]',
  nif: '[PENDIENTE: NIF o CIF]',
  domicilio: '[PENDIENTE: domicilio]',
  correo: '[PENDIENTE: correo de contacto]',
  /** Solo para sociedades: registro mercantil, tomo, folio y hoja. Déjalo vacío si no aplica. */
  registro: '',
  conservacion: '[PENDIENTE: plazo de conservación de las solicitudes]',

  datos: 'nombre, teléfono, correo electrónico (opcional), zona y los muebles y detalles del montaje que nos cuentes',
  proveedores: [
    'Hostinger: alojamiento de la web.',
    'Supabase: base de datos donde se guardan las solicitudes.',
    'EmailJS: envío del aviso por correo de cada solicitud.',
    'WhatsApp (Meta): solo si decides contactarnos o enviar tu solicitud por WhatsApp.',
  ],
};
