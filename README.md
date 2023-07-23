# Streaming Platform Challenge:

Desarrollar la clásica plataforma de streaming.

## Muestra tus conocimientos:

1. Crear un repositorio público
2. Realizar commits de cada paso de su proceso
3. No olvidar las buenas prácticas
4. ES6+
5. Unit test

## Requerimientos

- Diseñar e implementar una aplicación web para la plataforma de streaming utilizando
  Angular o React.
- Es un ejercicio básico, se buscará que el código sea simple, bien diseñado, eficaz y en
  lo posible, comprobado con unit test.
- Se podrá usar cualquier librería de css.
- Debe contener 2 secciones principales, la de login y la home.

### Login

Debe tener una Login Page para autenticar el usuario, se puede usar Auth0 para gestionar la
identidad del usuario. Si la autenticación es exitosa, debe redirigir a la Home Page.

### Home

La Home Page deberá mostrar el listado de películas y series, cada item debe mostrar la imagen
y el título de la película o serie. El usuario tendrá la posibilidad de ordenar y filtrar los datos.

- Se podrá ordenar por: nombre, año.
- Se podrá filtrar por: año, película o serie.
- Se envía link de archivo .json para descargar y consumirlo simulando un servicio REST. https://assets-aivo.s3.amazonaws.com/movies.json

## Entregables:

- Código en repositorio público de GitHub, Bitbucket o similar
- Incluir un archivo README con instrucciones de configuración o documentación.
  Tiempo de entrega
- No necesitas completar todo el desafío.
- Sugerimos no gastar más de 8 horas en total, repartiendo el trabajo en el transcurso de
  2 a 3 días.
- Realizar commits con la mayor frecuencia posible, no realizar todo en un único commit.
- Se evaluará el código, el tiempo empleado, la creatividad y cómo se priorizan los
  requerimientos.

## Run in development

- clone the repo
- install dependencies: `pnpm i`
- start dev mode: `pnpm run dev`

> keep in mind that the filter options are keep it on the localStorage
> that's it :)
