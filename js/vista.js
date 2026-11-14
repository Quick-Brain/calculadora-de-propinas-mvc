// VISTA: lee los campos y muestra los resultados en la página.
class VistaPropinas {
  constructor() {
    this.formulario = document.getElementById('formulario');
    this.monto = document.getElementById('monto');
    this.porcentaje = document.getElementById('porcentaje');
    this.personalizado = document.getElementById('personalizado');
    this.campoPersonalizado = document.getElementById('campo-personalizado');
    this.limpiar = document.getElementById('limpiar');
    this.mensaje = document.getElementById('mensaje');
    this.base = document.getElementById('base');
    this.propina = document.getElementById('propina');
    this.total = document.getElementById('total');
    this.tasa = document.getElementById('tasa');
    this.moneda = new Intl.NumberFormat('es-CO', {
      style: 'currency', currency: 'COP',
      minimumFractionDigits: 2, maximumFractionDigits: 2
    });
  }

  leerDatos() {
    return {
      monto: this.monto.value,
      porcentaje: this.porcentaje.value === 'otro'
        ? this.personalizado.value : this.porcentaje.value
    };
  }

  mostrarPersonalizado() {
    const esOtro = this.porcentaje.value === 'otro';
    this.campoPersonalizado.hidden = !esOtro;
    this.personalizado.disabled = !esOtro;
  }

  mostrar(resultado) {
    this.mensaje.textContent = '';
    this.base.textContent = this.moneda.format(resultado.cuenta);
    this.propina.textContent = this.moneda.format(resultado.propina);
    this.total.textContent = this.moneda.format(resultado.total);
    this.tasa.textContent = `(${resultado.porcentaje.toLocaleString('es-CO')} %)`;
  }

  mostrarAviso(texto) {
    // No dejamos visibles resultados anteriores cuando los datos son inválidos.
    this.base.textContent = '—';
    this.propina.textContent = '—';
    this.total.textContent = '—';
    this.tasa.textContent = '';
    this.mensaje.textContent = texto;
  }

  reiniciar() {
    this.formulario.reset();
    this.mostrarPersonalizado();
    this.mostrarAviso('Ingresa el valor de la cuenta para comenzar.');
    this.monto.focus();
  }
}
