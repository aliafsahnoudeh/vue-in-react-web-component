<template>
  <div class="vue-component" @click="handleClick">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MyVueComponent",
  props: {
    msg: String,
  },
  methods: {
    handleClick(): void {
      alert('showing: ' + this.msg);
    }
  }
});
</script>

<style scoped>
.vue-component {
  background: lightblue;
}
</style>
