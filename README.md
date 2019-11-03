# vue-custom-element

> [tutorial - vue-classroom](https://vue-classroom.com/blog/vue/vue-custom-elements/)

## Project setup
```
yarn install
```
### Add dependency
```sh
 $ yar add vue-custom-element
```

### Process
```sh
// main.js
import App from './App.vue'
import vueCustomElement from 'vue-custom-element';

Vue.config.ignoredElements = [
  'app-element'
];

Vue.use(vueCustomElement);

Vue.customElement('app-element', App, {});
```

```sh
// App.vue
<template>
  <p><img alt="Vue logo" src="./assets/logo.png"><br/> prop value: {{myprop}}</p>
</template>

<script>
export default {
  name: 'app-element',
  props: ['myprop']
}
</script>
```
```sh
// index.html
<body>
  <noscript>
    <strong>We're sorry but vue-custom-element-demo doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <!-- built files will be auto injected -->
  <app-element myprop="I can pass props!"></app-element>
  <script>
    console.info(document.querySelector('app-element'));
  </script>
</body>
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```