<template>
  <footer class="text-center py-2 bg-color">
    <a href="https://beian.miit.gov.cn" target="_blank">
      版权所有 Copyright © ALL Rights Reserved. 粤ICP备17007661号-3
    </a>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-color {
  background-color: $mask-color;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

a,
a:hover,
a:active,
a:visited,
a:link,
a:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  color: #ffffff99;
  outline: none;
  background: none;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
</style>
