// Archivo generado por scripts/generar-zonas.mjs. No lo edites a mano.
import { PaginaSeo } from '../../landing/pagina-seo';
import { ALCALA_DE_HENARES } from './alcala-de-henares';
import { ALCOBENDAS } from './alcobendas';
import { BARAJAS } from './barajas';
import { CIUDAD_LINEAL } from './ciudad-lineal';
import { COSLADA } from './coslada';
import { HORTALEZA } from './hortaleza';
import { MORATALAZ } from './moratalaz';
import { RIVAS_VACIAMADRID } from './rivas-vaciamadrid';
import { SAN_BLAS } from './san-blas';
import { SAN_FERNANDO_DE_HENARES } from './san-fernando-de-henares';
import { TORREJON_DE_ARDOZ } from './torrejon-de-ardoz';
import { VICALVARO } from './vicalvaro';
import { paginaDeZona } from './pagina-de-zona';
import { ZonaContenido } from './tipos';

/** Todas las zonas con contenido propio, por orden alfabético de archivo. */
export const ZONAS_CONTENIDO: ZonaContenido[] = [
  ALCALA_DE_HENARES,
  ALCOBENDAS,
  BARAJAS,
  CIUDAD_LINEAL,
  COSLADA,
  HORTALEZA,
  MORATALAZ,
  RIVAS_VACIAMADRID,
  SAN_BLAS,
  SAN_FERNANDO_DE_HENARES,
  TORREJON_DE_ARDOZ,
  VICALVARO,
];

export const PAGINAS_ZONAS_CONTENIDO: PaginaSeo[] = ZONAS_CONTENIDO.map(paginaDeZona);
