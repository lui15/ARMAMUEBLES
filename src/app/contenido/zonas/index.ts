// Archivo generado por scripts/generar-zonas.mjs. No lo edites a mano.
import { PaginaSeo } from '../../landing/pagina-seo';
import { ALCALA_DE_HENARES } from './alcala-de-henares';
import { ALCOBENDAS } from './alcobendas';
import { ARGANZUELA } from './arganzuela';
import { BARAJAS } from './barajas';
import { CARABANCHEL } from './carabanchel';
import { CHAMARTIN } from './chamartin';
import { CIUDAD_LINEAL } from './ciudad-lineal';
import { COSLADA } from './coslada';
import { HORTALEZA } from './hortaleza';
import { LATINA } from './latina';
import { MORATALAZ } from './moratalaz';
import { PUENTE_DE_VALLECAS } from './puente-de-vallecas';
import { RETIRO } from './retiro';
import { RIVAS_VACIAMADRID } from './rivas-vaciamadrid';
import { SALAMANCA } from './salamanca';
import { SAN_BLAS } from './san-blas';
import { SAN_FERNANDO_DE_HENARES } from './san-fernando-de-henares';
import { TETUAN } from './tetuan';
import { TORREJON_DE_ARDOZ } from './torrejon-de-ardoz';
import { USERA } from './usera';
import { VICALVARO } from './vicalvaro';
import { VILLA_DE_VALLECAS } from './villa-de-vallecas';
import { paginaDeZona } from './pagina-de-zona';
import { ZonaContenido } from './tipos';

/** Todas las zonas con contenido propio, por orden alfabético de archivo. */
export const ZONAS_CONTENIDO: ZonaContenido[] = [
  ALCALA_DE_HENARES,
  ALCOBENDAS,
  ARGANZUELA,
  BARAJAS,
  CARABANCHEL,
  CHAMARTIN,
  CIUDAD_LINEAL,
  COSLADA,
  HORTALEZA,
  LATINA,
  MORATALAZ,
  PUENTE_DE_VALLECAS,
  RETIRO,
  RIVAS_VACIAMADRID,
  SALAMANCA,
  SAN_BLAS,
  SAN_FERNANDO_DE_HENARES,
  TETUAN,
  TORREJON_DE_ARDOZ,
  USERA,
  VICALVARO,
  VILLA_DE_VALLECAS,
];

export const PAGINAS_ZONAS_CONTENIDO: PaginaSeo[] = ZONAS_CONTENIDO.map(paginaDeZona);
