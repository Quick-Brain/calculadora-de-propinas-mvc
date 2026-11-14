# Ejercicio 2: Calculadora de propinas con MVC

Enunciado: desarrollar una aplicación que calcule automáticamente la propina basada en el monto total de la cuenta y el porcentaje seleccionado por el usuario.

## Abrir el proyecto

1. Extrae el ZIP.
2. Coloca 02_CalculadoraDePropinas dentro de TallerMVC, junto al primer ejercicio.
3. En Visual Studio Code, selecciona Archivo > Abrir carpeta y elige 02_CalculadoraDePropinas.
4. Abre index.html con Chrome o Edge desde el Explorador de archivos.

No necesita XAMPP, paquetes ni un proceso de compilación. Es un proyecto independiente del ejercicio 1.

## Uso

Escribe el monto sin separadores de miles: para cincuenta mil, escribe 50000.
Selecciona 0 %, 5 %, 10 %, 15 % o 20 %. Para otro valor, elige Otro porcentaje y escribe el porcentaje deseado.
El resultado cambia automáticamente, sin pulsar un botón de calcular. Limpiar valores borra la cuenta y vuelve al porcentaje inicial del 10 %.

La aplicación muestra valores en COP con dos decimales. Acepta cuentas entre 0 y 1.000.000.000 COP y porcentajes entre 0 y 100, con hasta dos decimales. Estos límites son decisiones de implementación. Rechaza datos vacíos o negativos y oculta resultados anteriores cuando la entrada es inválida.

## Fórmulas

Propina = cuenta × porcentaje / 100.
Total = cuenta + propina.

Ejemplo: 50000 × 10 / 100 = 5000 de propina. Total: 55000 COP.
El código convierte el monto a centavos y redondea la propina al centavo antes de sumar.

## Arquitectura MVC

| Archivo | Función |
|---|---|
| index.html | Estructura de la interfaz; parte de la vista. |
| css/estilos.css | Presentación y adaptación a pantallas pequeñas. |
| js/modelo.js | Validaciones numéricas y cálculo de la propina y el total. |
| js/vista.js | Lectura de campos y presentación de resultados. |
| js/controlador.js | Escucha los cambios, llama al modelo y actualiza la vista. |
| js/app.js | Crea y conecta las tres partes. |

El modelo no usa el DOM. La vista no hace el cálculo de la propina. El controlador coordina ambos.

## Pruebas manuales

| Cuenta | Porcentaje | Propina | Total |
|---|---|---|---|
| 50000 | 10 % | 5000 | 55000 |
| 80000 | 15 % | 12000 | 92000 |
| 50000 | 0 % | 0 | 50000 |
| 20000 | Otro: 12.5 % | 2500 | 22500 |
| 99.99 | 10 % | 10.00 | 109.99 |
| 0 | 10 % | 0 | 0 |

Prueba también borrar el monto, escribir un número negativo, escribir un porcentaje mayor a 100, pulsar Limpiar valores y reducir el ancho de la ventana. Con datos inválidos debe mostrarse un aviso y los resultados deben quedar en blanco (—).

Se verificaron automáticamente 8 casos numéricos, 10 entradas inválidas, la sintaxis de los cuatro archivos JavaScript y las rutas de sus recursos. La interfaz aún requiere comprobación manual en un navegador; la ejecución del navegador automatizado está restringida en el entorno de creación.

## Publicar como ejercicio independiente

Crea un repositorio llamado calculadora-de-propinas-mvc. Sube el CONTENIDO de esta carpeta: index.html, README.md, css y js. index.html debe quedar directamente en la raíz; no subas únicamente el ZIP ni la carpeta exterior.

Activa GitHub Pages con el mismo procedimiento del primer ejercicio: publicación desde la rama main y la carpeta raíz /(root). Espera a que el despliegue termine correctamente y abre el enlace que muestre GitHub.

No se ha creado ni publicado ningún repositorio automáticamente.

## Alcance

No almacena cuentas ni resultados: al recargar vuelve a su estado inicial. El enunciado requiere cálculo automático, no historial ni persistencia. No incluye cuentas de usuario, base de datos ni funciones adicionales de otros ejercicios.
