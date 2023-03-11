<template>
  <component :is="type" :to="to" :href="href" class="btn btn-primary">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      if (this.to) {
        return "nuxt-link";
      } else if (this.href) {
        return "a";
      } else {
        return "button";
      }
    }
  }
};
</script>

<style scoped>
.btn-primary {
  background:#0a64d2 !important;
  border:transparent;
  border-radius: 18px;
}

</style>
