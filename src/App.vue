<template>
  <p>
    <img alt="Vue logo" width="150" src="./assets/logo.png">
    <br/>
    prop value: {{myprop}}
  </p>
</template>

<script>
export default {
  name: 'app-element',
  props: ['myprop']
}
</script>