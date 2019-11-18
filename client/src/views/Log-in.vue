<template>
<div align="center" class="myStyle">
  <section class="form-elegant">
      <mdb-col md="5">
        <mdb-card>
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5"><strong>Iniciar Sesión</strong></h3>
            </div>
            <mdb-input label="Ingrese su correo" type="email"/>
            <mdb-input label="Ingrese su contraseña" type="password" containerClass="mb-0"/>
            <div class="text-center mb-3">
              <mdb-btn type="button" gradient="blue" rounded class="btn-block z-depth-1a">Ingresar</mdb-btn>
            </div>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">No está registrado? <a href="#" class="blue-text ml-1" align="right"> Registrarse</a></p>
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</div>
</template>

<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon
    }
  }
</script>

<style>
  .myStyle {
  margin-top: 130px;
  }
</style>