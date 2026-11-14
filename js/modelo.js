// MODELO: valida los números y realiza los cálculos, sin utilizar HTML.
class ModeloPropinas {
  calcular(montoTexto, porcentajeTexto) {
    if (String(montoTexto).trim() === '') {
      throw new Error('Ingresa el valor de la cuenta.');
    }
    const monto = Number(montoTexto);
    const porcentaje = Number(porcentajeTexto);
    if (!Number.isFinite(monto) || monto < 0 || monto > 1000000000) {
      throw new Error('La cuenta debe estar entre 0 y 1.000.000.000 COP.');
    }
    if (String(porcentajeTexto).trim() === '' ||
        !Number.isFinite(porcentaje) || porcentaje < 0 || porcentaje > 100) {
      throw new Error('Ingresa un porcentaje entre 0 y 100.');
    }
    // Trabajamos con centavos para sumar valores monetarios redondeados.
    const centavos = Math.round((monto + Number.EPSILON) * 100);
    const centavosPropina = Math.round(centavos * porcentaje / 100);
    return {
      cuenta: centavos / 100,
      porcentaje: porcentaje,
      propina: centavosPropina / 100,
      total: (centavos + centavosPropina) / 100
    };
  }
}
