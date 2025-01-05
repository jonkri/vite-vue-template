<script>
  export default {
    props: {
      msg: {
        required: true,
        type: String
      }
    }
  };
</script>

<template>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
</template>

<style>
  p {
    font-weight: bold;
  }
</style>
