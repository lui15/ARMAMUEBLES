import { INDICE_PAGINAS } from './indice.generado';
import { PAGINAS } from './landing-data';

describe('INDICE_PAGINAS', () => {
  it('coincide con PAGINAS (ruta, tipo, etiqueta y zona, en el mismo orden)', () => {
    const esperado = PAGINAS.map((p) => ({
      path: p.path,
      tipo: p.tipo,
      etiqueta: p.etiqueta,
      ...(p.zona ? { zona: p.zona } : {}),
    }));
    expect(INDICE_PAGINAS).toEqual(esperado);
  });
});
