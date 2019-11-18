<template>
  <!-- ESTE COMPONENT ES EL FOOTER DE CADA PAGINA -->
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a>IS Team</a>
    </span>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
