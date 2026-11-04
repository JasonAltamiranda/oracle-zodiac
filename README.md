# Oracle Zodiac

Sitio web de astrología con calculadora zodiacal y fichas de los 12 signos agrupados por elemento. Proyecto académico hecho con HTML, CSS y JavaScript, sin frameworks ni backend.

## Qué hace

- **Calculadora zodiacal:** a partir de fecha y hora de nacimiento calcula signo, ascendente, descendente, horóscopo chino y signo lunar.
- **Los 12 signos por elemento:** una única página (`elemento.html`) muestra las fichas de fuego, tierra, aire o agua, generadas dinámicamente desde `js/signos-data.js`.
- **Registro e inicio de sesión:** simulado en el navegador, con usuarios guardados en `localStorage`.

## Decisiones de diseño

- Las páginas por elemento eran 4 HTML y 4 CSS casi idénticos. Se unificaron en una sola página alimentada por un archivo de datos, lo que elimina código repetido y facilita agregar contenido.
- Los datos de los signos están centralizados en un solo archivo.

## Estructura

```
index.html          Página principal
ascendente.html     Calculadora zodiacal
elemento.html       Fichas de signos por elemento
login.html          Ingreso y registro
js/                 auth, elemento, signos-data
css/                Estilos por página
```

## Cómo ejecutarlo

No requiere instalación. Descargá el repo y abrí `index.html` en el navegador.

## Limitaciones

El login es una simulación educativa: las contraseñas se guardan en el navegador y no deben usarse datos reales.

## Autor

Jason Altamiranda · [GitHub](https://github.com/JasonAltamiranda)
