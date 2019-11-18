<template>
  <v-app>

  <div v-if="autentificado==='false'">
    <Log-in />
  </div>
  <div v-if="autentificado==='true'">

    <core-filter />

    <core-toolbar />

    <core-drawer />

  </div>
    <core-view />
  </v-app>
</template>

<script> 
export default {
  data: function () {
    return {
      autentificado: 'false'
    }
  }
}
</script>

<style lang="scss">
$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
