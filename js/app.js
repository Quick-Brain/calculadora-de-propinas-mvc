// Crea las tres partes de la aplicación y las conecta.
const modelo = new ModeloPropinas();
const vista = new VistaPropinas();
const controlador = new ControladorPropinas(modelo, vista);
