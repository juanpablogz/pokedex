# pokedex

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

escogi nuxt para realizar la pokedex porque le añade unos agregas muy potentes a vue al momento de querer escalar un proyecto, podemos tener una PWA con poca configuracion, convertir nuestro proyecto en un SSR, ser amigables con el seo entre otras, en los estilos decidi hacerlos con css sin ningun framework, decidi usar vuex para almacenar los datos ya que si se llegase a tener un gran flujo de datos, esta es una de las formas mas optimas de hacerlo, para persistir la informacion lo hice en el localstorage
