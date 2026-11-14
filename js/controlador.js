// CONTROLADOR: conecta las acciones del usuario con el modelo y la vista.
class ControladorPropinas {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
    vista.mostrarPersonalizado();
    vista.mostrarAviso('Ingresa el valor de la cuenta para comenzar.');
    vista.monto.addEventListener('input', () => this.actualizar());
    vista.personalizado.addEventListener('input', () => this.actualizar());
    vista.porcentaje.addEventListener('change', () => {
      vista.mostrarPersonalizado();
      this.actualizar();
      if (vista.porcentaje.value === 'otro') vista.personalizado.focus();
    });
    vista.formulario.addEventListener('submit', evento => {
      evento.preventDefault();
      this.actualizar();
    });
    vista.limpiar.addEventListener('click', () => vista.reiniciar());
  }

  actualizar() {
    const datos = this.vista.leerDatos();
    try {
      // step=0.01 permite hasta dos decimales en cada campo.
      if (this.vista.monto.validity.stepMismatch ||
          (this.vista.porcentaje.value === 'otro' &&
           this.vista.personalizado.validity.stepMismatch)) {
        throw new Error('Utiliza como máximo dos decimales.');
      }
      const resultado = this.modelo.calcular(datos.monto, datos.porcentaje);
      this.vista.mostrar(resultado);
    } catch (error) {
      this.vista.mostrarAviso(error.message);
    }
  }
}
