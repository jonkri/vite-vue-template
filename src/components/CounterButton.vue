<script>
  import { mapStores } from "pinia";
  import { useCounterStore } from "../store";

  export default {
    // computed: Object.assign({}, mapStores(useCounterStore))
    computed: {
      ...mapStores(useCounterStore)
    }
  };
</script>

<template>
  <input
    @click="counterStore.increment"
    type="button"
    :value="counterStore.value"
  />
</template>
